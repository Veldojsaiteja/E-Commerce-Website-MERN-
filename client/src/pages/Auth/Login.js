import React from "react";
import Layout from "../../components/Layouts/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
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
        <h1>Login Here</h1> <br />
        <form onSubmit={handleClick}>
          <div>
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
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
