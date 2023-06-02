import React from "react";
import Layout from "../../components/Layouts/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title="ecommerce registration page">
      <div className="register">
        <h1>Register Here</h1> <br />
        <form onSubmit={handleClick}>
          <div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputpassword"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputemail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputphone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter your phone"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputaddress"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                aria-describedby="emailHelp"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
