import "./App.css";
import Navbar from "./navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function App() {

  const product = productData.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const carouselOptions = {
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    

  };

  return (
  <div className="App">
    <Navbar />
    <h1>Featured Products</h1>
    <Carousel showDots={true} autoPlay={true} responsive={responsive} {...carouselOptions} >
      {product}
    </Carousel>
  </div>
  );
}
