import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, keyword: e.target.value });
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

/*

The useState hook in React does not provide immutability for state updates by default. When you call setValues with a new value, it replaces the entire state object with the new value provided. If you directly modify the existing values object without using the spread operator, it would mutate the state object, which is generally discouraged in React.
In summary, using the spread operator when calling setValues ensures that the state object is updated immutably, by creating a new object with the updated properties while leaving the other properties unchanged. This is a recommended practice to maintain the immutability of state in React components.

*/
