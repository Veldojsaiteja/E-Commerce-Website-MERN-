import React from "react";
import Layout from "../../components/Layouts/Layout";
import AdminMenu from "../../components/Layouts/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const { auth } = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75">
              <h2>Admin Name : {auth?.user?.name}</h2>
              <h2>Admin Email : {auth?.user?.email}</h2>
              <h2>Admin Phone : {auth?.user?.phone}</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
