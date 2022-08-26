import "./errorMessage.scss"

const ErrorMessage = ({err = 'Something went wrong but Groot soon will be repair all.'}) => {
  return (
    <div className="errorMessage">
        <h3>{err}</h3>
    </div>
  );
};

export default ErrorMessage;
