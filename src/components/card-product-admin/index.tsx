import { useNavigate } from "react-router-dom";
import img_product from "../../assets/img_product.jpg";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";
import { toast } from "react-toastify";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CardProductAdmin() {
  const notify = () => toast.error("Não é possível excluir este produto!");
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
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

      <div className="flex justify-between mt-4">
        <div className="w-full">
          <p className="text-gray-700 mb-4">Amazon</p>
          <span className="text-[25px] font-bold text-green-600">R$99.99</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-xl">
          <AiOutlineEdit onClick={() => navigate("/form-products")} />
          <AiOutlineDelete onClick={openModal} />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h2 className="text-semibold text-center mb-4">Excluir Produto</h2>
        <p className="text-gray-500 text-center mb-4">
          Tem certeza que deseja excluir este produto?
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              console.log("Produto excluído");
              setIsOpen(false);
              notify();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
          >
            Excluir
          </button>
        </div>
      </Modal>
    </div>
  );
}
