import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts"
      );
      setProducts(response.data);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product Dashboard</h2>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
