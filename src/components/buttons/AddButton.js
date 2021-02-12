import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Link to="/products/newform">
      <button type="button" class="btn btn-warning btn-lg">
        ADD
      </button>
    </Link>
  );
};
export default AddButton;
