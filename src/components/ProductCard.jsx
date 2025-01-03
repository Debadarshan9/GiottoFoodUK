import PropTypes from "prop-types";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import ReactStars from "react-stars";
function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg pb-5 flex flex-col gap-4 shadow-all-sides">
      <Carousel className="">
        <CarouselContent className="">
          {product.images.map((image) => (
            <CarouselItem className="flex justify-center items-center ">
              <img
                src={image}
                alt=""
                className="h-48 mt-4 w-full object-contain rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full px-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <ReactStars count={5} size={36} value={product.ratingValue} color2="#F6BE00" />
        <div className="w-full flex justify-around">
          {product.format.map((format,index)=>(
            <span key={index} className="text-lg text-slate-500 font-semibold">{format}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="border border-green-500 bg-transparent text-green-500 font-semibold hover:bg-green-500 hover:text-white"
          >
            <ShoppingCart size={24} />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
