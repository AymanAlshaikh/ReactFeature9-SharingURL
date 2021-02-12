import { useState } from "react";
import { createProduct, updateProduct } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const ProductForm = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products);
  const productz = products.find((product) => product.slug === productSlug);

  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(
    productz
      ? productz
      : {
          image: "",
          name: "",
          price: 0,
          description: "",
        }
  );
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setProduct({
      image: "",
      name: "",
      price: 0,
      description: "",
    });
  };

  const handleSubmit = (e) => {
    console.log(product);
    e.preventDefault();
    if (productz) dispatch(updateProduct(product));
    else dispatch(createProduct(product));

    resetForm();
    history.push("/products");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{productz ? "UPDATE" : "ADD"} Product</h2>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Image
          </label>
          <input
            value={product.image}
            onChange={handleChange}
            name="image"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Image"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            value={product.name}
            onChange={handleChange}
            name="name"
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Price
          </label>
          <input
            value={product.price}
            onChange={handleChange}
            name="price"
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
          />
        </div>{" "}
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Description
          </label>
          <input
            value={product.description}
            onChange={handleChange}
            name="description"
            type="etext"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="description"
          />
        </div>
        <button type="submit" class="btn btn-warning btn-lg">
          {productz ? "UPDATE" : "ADD"}
        </button>
      </form>
    </div>
  );
};
export default ProductForm;
