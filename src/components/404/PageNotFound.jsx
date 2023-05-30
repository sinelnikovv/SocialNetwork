import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>404</p>
      <p>Page not found</p>
      <Link to={`/profile/`}>To main page</Link>
    </div>
  );
};

export default PageNotFound;
