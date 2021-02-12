import { Link } from "react-router-dom";
const UpdateButton = (props) => {
  return (
    <Link to={`/products/${props.product.slug}/edit`}>
      <button type="button" class="btn btn-warning btn-lg">
        Update
      </button>
    </Link>
  );
};
export default UpdateButton;
