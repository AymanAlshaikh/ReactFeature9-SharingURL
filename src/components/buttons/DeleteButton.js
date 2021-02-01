// Styling
import { DeleteButtonStyled } from "../../styles";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions";
const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
