//netlify free delop (hosting)
//state management
//reference to reference
import { useState } from "react";
import { productsData } from "./data";

export default function App() {
  let [product, setProduct] = useState(productsData);

  // seperate seperate card ki quality lani hai (hum find function use karain gy ky humein product mein say product id do jis par click kiya gya hain then print product id index mein ajayen gi)
  //---------------
  //   const addToCart = (id) => {
  //     const products = productsData.findIndex(p => p.id === id );
  //     console.log(products);
  //     // alert("Add to cart " + id);
  //   };
  //-----------------
  //is mein product ki sari detail ajayen gi
  // const addToCart = (id) => {
  //     const products = productsData.find(p => p.id === id );
  //     console.log(products);
  //     // alert("Add to cart " + id);
  //   };
  //---------------------
  //ager hum is mein say immutable aur readonly nika daty hai tu tu is mei ager humein quailty add kari hai tu(asay woh rending nhi karain ga)
  // const addToCart = (id) => {
  //     const products = productsData.findIndex(p => p.id === id );
  //     productArray[index] .cartQty++;
  //     console.log(products);
  // }
  //------------------
  //is object mein saray product same he ho gy jin par click nhi kiya gya sirf uss par cart quailty add ki gai ho gi jis par click kiya ho
  const addToCart = (id) => {
    const copyProducts = [...product];
    const index = copyProducts.findIndex((p) => p.id === id);
    copyProducts[index].cartQty++;
    setProduct(copyProducts);
  };

  return (
    <div className="container my-1">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="row row-cols-1  row-cols-md-4 g-4 my-1">
        {product.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.id}. {product.title}
                </h5>
                <p className="card-text">{product.description}</p>
                <a
                  href="#"
                  className={`btn ${
                    product.stock ? "btn-primary" : "btn btn-danger"
                  }`}
                  // jis par click kia jayen uss ko arrow function mein change kar dy first of all
                  onClick={() => addToCart(product.id)}
                  disabled={
                    product.stock && product.cartQty < product.stock
                      ? false
                      : true
                  }
                >
                  {product.stock ? "Add to Stack" : "Out of Stock"}
                </a>
                {!!product.cartQty && <span>{product.cartQty}</span>}
                {product.cartQty === product.stock && (
                  <span className="text-info"> 3 stock limit reached!</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
