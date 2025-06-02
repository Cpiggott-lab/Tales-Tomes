
function LoadingIndicator(props) {
  let message = "Loading...";

  if (props.message) {
    message = props.message;
  }

  return <p className="loading-text">{message}</p>;
}

export default LoadingIndicator;
