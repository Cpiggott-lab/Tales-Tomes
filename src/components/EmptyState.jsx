// Reusable component to show a message when a list is empty
function EmptyState({ message }) {
  return <h2 className="empty-message">{message}</h2>;
}

export default EmptyState;
