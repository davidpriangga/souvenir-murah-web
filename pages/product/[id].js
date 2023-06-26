import Head from "next/head";
import { useState } from "react";
import { getData } from "../../utils/fetchData";
import Link from "next/link";
import { Button } from "antd";
import { useCart } from "react-use-cart";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);
  const { addItem } = useCart();

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };

  const addToCart = () => {
    const productCart = {
      id: product._id,
      ...product,
    };

    addItem(productCart);
  };

  return (
    <div className="page_product">
      <div className="container">
        <div className="pt-4">
          <Link href="/product">
            <button className="btn btn-dark">
              <i className="fas fa-arrow-left"></i> Back to Product
            </button>
          </Link>
        </div>
        <div className="row detail_page">
          <Head>
            <title>Detail Product</title>
            <link rel="icon" href="/img/logo.png" />
          </Head>

          <div className="col-md-6">
            <img
              src={product.images[tab].url}
              alt={product.images[tab].url}
              className="d-block img-thumbnail rounded mt-4 w-100"
              style={{ height: "500px" }}
            />

            <div className="row mx-0" style={{ cursor: "pointer" }}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.url}
                  className={`img-thumbnail rounded ${isActive(index)}`}
                  style={{ height: "80px", width: "20%" }}
                  onClick={() => setTab(index)}
                />
              ))}
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <h2 className="text-capitalize">{product.title}</h2>
            <h5 className="text-danger">Rp. {product.price}</h5>

            <div className="my-2">{product.description}</div>
            <div className="my-2">{product.content}</div>
            <Button onClick={addToCart}>Masukan Keranjang</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
}

export default DetailProduct;
