import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

const setContent = (process, Component, data, errStyle) => {
  switch (process) {
    case "waiting":
      return <Skeleton />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return <ErrorMessage style={errStyle} />;
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContent;
