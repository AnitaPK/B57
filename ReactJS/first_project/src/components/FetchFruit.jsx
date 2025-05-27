import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchFruit = () => {
  const [products, setProducts] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(
      "https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts"
    );
    console.log(response.data);
    setProducts(response.data);
  };

  // const fetchAPI = async()=>{
  //    await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
  //     .then(response=>response.json())
  //     .then(data=>console.log(data))
  // }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3 " key={index}>
              <div class="card" style={{"width": "18rem;"}}>
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">
                    {product.description}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchFruit;
