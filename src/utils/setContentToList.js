import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const setContentToList = (process, Component, newItemLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return (
        <li className="char__item" style={{ width: 100 + "%" }}>
          {<ErrorMessage />}
        </li>
      );
    default:
      throw new Error("Unexpected process state");
  }
};

export default setContentToList;