import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";


const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");//ADD A PROXY IN PACKAGE.JSON - NO CORS ERR

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-center">
        <i className="fab fa-pushed"></i>NERO
      </h1>
      <h4>Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
