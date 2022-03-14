import EditIcon from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/interfaces";
import "./AdminPage.css";
import AdminPageForm from "./AdminPageForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function AdminPage() {
  const { products } = useContext(ProductContext);
  const [editForm, setEditForm] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product>();

  const sendToEdit = (product: Product) => {
    setActiveProduct(product);
    setEditForm(true);
  };

  if (!editForm) {
    return (
      <div className="admin-container">
        {products.map((item) => (
          <div className="admin-product-container">
            <EditIcon
              onClick={() => sendToEdit(item)}
              className="admin-edit-icon"
            />
            <h2>Title: {item.title}</h2>
            <p style={{ paddingLeft: "1rem" }}>ID: {item.id}</p>
            <div className="admin-image-container">
              <img className="admin-image" src={item.image} alt="" />
              <img className="admin-image" src={item.image2} alt="" />
              <img className="admin-image" src={item.image3} alt="" />
            </div>
            <div className="admin-info-container">
              <p>Price: {item.price}</p>
              <p>Long info: {item.longinfo}</p>
              <ul>
                <li>Short info 1: {item.info1}</li>
                <li>Short info 2: {item.info2}</li>
                <li>Short info 3: {item.info3}</li>
              </ul>

              <ul>
                {item.spec.map((spec) => (
                  <li key={spec.id}>
                    <p>
                      {spec.spectitle} ID: {spec.id}
                    </p>
                    <p>{spec.spec}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="admin-container">
        <div className="admin-product-form-container">
          <ArrowBackIcon
            onClick={() => setEditForm(false)}
            className="admin-edit-form-icon"
          />
          <AdminPageForm product={activeProduct} />
        </div>
      </div>
    );
  }
}

export default AdminPage;
