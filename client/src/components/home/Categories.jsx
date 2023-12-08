/* eslint-disable no-undef */

import { styled } from "@mui/system";
import { Link, useSearchParams } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import { categories } from "../../constants/data";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: black;
`;

const IconContainer = styled("div")`
  display: flex;
  gap: 10px;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <Container>
            <IconContainer>
                <Link
                    className="button-86"
                    to={`/create?category=${category || ""}`}
                    style={{ textDecoration: "none" }}
                >
                    <PostAddOutlinedIcon style={{ fontSize: "20px" }} />
                    <FiberNewOutlinedIcon style={{ fontSize: "40px" }} />
                </Link>
            </IconContainer>
            <StyledLink to={"/"}>
                <abbr title="All Categories">
                    <CategoryIcon />
                    <span>All Categories</span>
                </abbr>
            </StyledLink>
            {categories.map((category) => (
                <StyledLink
                    key={category.id}
                    to={`/?category=${category.type}`}
                    className="button-86"
                >
                    <abbr title={category.name}>
                        {category.icon}
                        <span>{category.type}</span>
                    </abbr>
                </StyledLink>
            ))}
        </Container>
    );
};

export default Categories;
