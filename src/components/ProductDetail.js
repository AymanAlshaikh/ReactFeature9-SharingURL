// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link, NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductDetail = (props) => {
  const products = useSelector((state) => state.products);
  //const product = props.product;
  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);
  if (!product) return <Redirect to="/products" />;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton product={product} />
    </DetailWrapper>
  );
};

export default ProductDetail;
/*<p onClick={props.selectProduct}>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />*/
