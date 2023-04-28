import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  console.log(id);

  return <h1>Product Detail Page {id} product </h1>;
}

export default ProductPage;
