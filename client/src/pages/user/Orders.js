import React from "react";
import Layout from "../../components/Layouts/Layout";
import UserMenu from "../../components/Layouts/UserMenu";

const Orders = () => {
  return (
    <Layout>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">Orders</div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
