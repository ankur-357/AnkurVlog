import axios from 'axios';
import {
    API_NOTIFICATION_MESSAGES,
    SERVICE_URLS,
} from '../constants/config';
import {
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    getType,
} from '../utils/common-utils';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => processResponse(response),
    (error) => ProcessError(error)
);

const processResponse = (response) => {
    return response.status === 200
        ? { isSuccess: true, data: response.data }
        : {
            isFailure: true,
            status: response.status,
            msg: response.msg,
            code: response.code,
        };
};

const ProcessError = async (error) => {
    if (error.response) {
        if (error.response.status === 403) {
            try {
                const refreshResponse = await API.getRefreshToken({
                    token: getRefreshToken(),
                });
                if (refreshResponse.isSuccess) {
                    sessionStorage.clear();
                    setAccessToken(refreshResponse.data.accessToken);
                    return axios(error.config);
                }
            } catch (error) {
                return Promise.reject(error);
            }
        } else {
            console.error('ERROR IN RESPONSE:', error.toJSON());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status,
            };
        }
    } else if (error.request) {
        console.error('ERROR IN RESPONSE:', error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: '',
        };
    } else {
        console.error('ERROR IN RESPONSE:', error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: '',
        };
    }
};

const createApiMethod = ([key, value]) => async (
    body,
    showUploadProgress,
    showDownloadProgress
) => {
    try {
        const response = await axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: (progressEvent) => {
                if (showUploadProgress) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: (progressEvent) => {
                if (showDownloadProgress) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    showDownloadProgress(percentCompleted);
                }
            },
        });

        return processResponse(response);
    } catch (error) {
        return ProcessError(error);
    }
};

const API = Object.fromEntries(
    Object.entries(SERVICE_URLS).map(createApiMethod)
);

export { API };
