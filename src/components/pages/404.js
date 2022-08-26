import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div style={{ height: "400px", width: "800px", margin: "0 auto"}}>
      <ErrorMessage err={"Page doesn`t exist"} />
      <Link
        className="button button__main"
        style={{
          margin: "0 auto",
          display: "block",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "15px",
          width: "500px",
        }}
        to={"/marvel-db"}
      >
        {" "}
        <div className="inner">Back to main page</div>
      </Link>
    </div>
  );
};

export default Page404;
