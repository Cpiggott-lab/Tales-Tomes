// Reusable loading message component with optional custom text
function LoadingIndicator({ message = "Loading..." }) {
  return <p className="loading-text">{message}</p>;
}

export default LoadingIndicator;
