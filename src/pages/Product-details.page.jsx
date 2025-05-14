import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  return <h1>Book ID: {id}</h1>;
}
export default ProductDetailsPage;
