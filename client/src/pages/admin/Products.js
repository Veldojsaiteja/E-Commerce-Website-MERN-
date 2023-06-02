import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layouts/AdminMenu";
import Layout from "./../../components/Layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

// about images, understand..
// 1. how your storing in it the db , {req.fields and req.files thing} , get a clarity about this thing.
// 2. how your uploading photo, how your handling the hook.
// 3. how to show the photo, creating a seperate get route to backend to show the image, for that we set , res.set("content-type", ...)
// 4. the difference between {URL.createObjectURL(p.photo)} && {`http://localhost:8000/api/v1/product/product-photo/${p._id}`} is that,
// {URL.createObjectURL(p.photo)} is used only we your showing one single picture (as it generates from browser and cannot hold multiple pics urls),
// but whereas {`http://localhost:8000/api/v1/product/product-photo/${p._id}`} is used to get the photos from product db and setting the response type to photo.data.contentType,
// which basically helps in getting image directly to show when we hit that particular API.
