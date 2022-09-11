import "./errorMessage.scss"

const ErrorMessage = ({err = 'Something went wrong but Groot soon will be repair all.', style = {}}) => {
  return (
    <div className="errorMessage" style={style}>
        <h3>{err}</h3>
    </div>
  );
};

export default ErrorMessage;
