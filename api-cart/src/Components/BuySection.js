import { cleanup } from "@testing-library/react";
import Axios from "axios";
import { random, commerce } from "faker";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "YOUR_API_KEY";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "https://jsonblob.com/116a3865-54f0-11eb-a469-7f7196a6bdaf";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  // const fetchPhotos=async()=>{
  //     const response=await Axios.get(url,{
  //         header:{
  //             Authorization:apiKey
  //         }
  //     })
  // }

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl, {});

    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
