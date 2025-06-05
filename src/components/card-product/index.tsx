import { useNavigate } from "react-router-dom";
import { CardProductProps } from "./types";
export default function CardProduct(props: CardProductProps) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/products/details/${props.id}`)}>
      <div className="max-w-[300px] m-2 flex-wrap p-4 items-center text-center bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl  font-semibold mb-2">{props.name}</h2>
        <div className="flex justify-center m-2">
          <img
            className="w-[50%] mb-4 rounded-lg"
            src={props.image}
            alt="Product"
          />
        </div>
        <p className="text-gray-700 mb-4">{props.manufacturer}</p>
        <span className="text-[25px] font-bold text-green-600">
          R${props.price}
        </span>
      </div>
    </button>
  );
}
