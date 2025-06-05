import CardProduct from "../../components/card-product";
import { Carousel } from "react-responsive-carousel";
import { GrGamepad } from "react-icons/gr";
import { PiTShirt } from "react-icons/pi";
import { IoCarOutline, IoSearch, IoFastFoodOutline } from "react-icons/io5";
import { FiTool } from "react-icons/fi";
import { TiGift } from "react-icons/ti";
import { RiMore2Fill } from "react-icons/ri";
import banner from "../../assets/banner.png";
import AdminTemplate from "../../templates/admin-template";

const itemsCategory = [
  {
    id: 1,
    name: "Jogos",
    icon: <GrGamepad />,
  },
  {
    id: 2,
    name: "Roupas",
    icon: <PiTShirt />,
  },
  {
    id: 3,
    name: "Veículos",
    icon: <IoCarOutline />,
  },
  {
    id: 4,
    name: "Ferramentas",
    icon: <FiTool />,
  },
  {
    id: 5,
    name: "Comida",
    icon: <IoFastFoodOutline />,
  },
  {
    id: 6,
    name: "Presentes",
    icon: <TiGift />,
  },
  {
    id: 7,
    name: "Outros",
    icon: <RiMore2Fill />,
  },
];
export default function Dashboard() {
  return (
    <AdminTemplate>
      <div className="flex flex-col items-center">
        <Carousel showThumbs={false}>
          <div>
            <img src={banner} alt="Banner promocional" />
          </div>
          <div>
            <img src={banner} alt="Banner promocional" />
          </div>
          <div>
            <img src={banner} alt="Banner promocional" />
          </div>
        </Carousel>
        <div className="flex flex-row h-[45px] border w-full border-gray-300 rounded-md items-center mt-10 ">
          <input
            className="flex-1 h-full p-3"
            placeholder="Estou procurando por..."
          />
          <IoSearch className="mx-2" color="gray" size={20} />
        </div>
      </div>
      <div className="flex flex-1 flex-col mt-5">
        <div className="mb-8 ">
          <h2 className="w-full mt-2 text-2xl mb-4">Itens Recentes</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <p className="text-right text-lg m-8">Ver mais</p>
        </div>
        <div className="bg-blue-900 rounded-2xl w-full  p-4 mb-8 max-w-sm md:max-w-4xl mx-auto">
          <h2 className="w-full text-white mt-2 text-xl px-3 mb-4">
            Categorias
          </h2>
          <div className="flex flex-wrap justify-between py-5 px-6 text-center items-center gap-4">
            {itemsCategory.map((items) => (
              <div className="flex flex-col items-center" key={items.id}>
                <div className="bg-white rounded-full p-4 w-[50px]">
                  {items.icon}
                </div>
                <p className="text-white">{items.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="w-full mt-2  text-2xl  mb-4">Anúncios</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
          <p className="text-right text-lg m-8">Ver mais</p>
        </div>
      </div>
    </AdminTemplate>
  );
}
