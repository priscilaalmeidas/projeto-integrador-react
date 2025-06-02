import img_product from "../../assets/img_product.jpg";
export default function CardProduct() {
  return (
    <div className="max-w-sm flex-wrap p-4 items-center text-center bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-xl  font-semibold mb-2">Nome do Produto</h2>
      <div className="flex justify-center m-2">
        <img
          className="w-[80%] h-[20%] mb-4 rounded-lg"
          src={img_product}
          alt="Product"
        />
      </div>
      <p className="text-gray-700 mb-4">Amazon</p>
      <span className="text-[25px] font-bold text-green-600">R$99.99</span>
    </div>
  );
}
