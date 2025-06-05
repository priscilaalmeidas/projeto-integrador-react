import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { Carousel } from "react-responsive-carousel";
import { GrGamepad } from "react-icons/gr";
import { PiTShirt } from "react-icons/pi";
import { IoCarOutline, IoSearch, IoFastFoodOutline } from "react-icons/io5";
import { FiTool } from "react-icons/fi";
import { TiGift } from "react-icons/ti";
import { RiMore2Fill } from "react-icons/ri";
import banner from "../../assets/banner.png";
import { getApiRecentProducts, getApiRecommendedProducts } from "./services";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Products } from "./types";
import ListLoading from "../../components/list-loading";
import { Link, useNavigate } from "react-router-dom";

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

export default function Home() {
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();
  const [recentProducts, setRecentProducts] = useState<Products[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Products[]>(
    []
  );
  const [inputSearch, setInputSearch] = useState("");
  const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] =
    useState(false);
  const [isLoadingRecommendedProducts, setIsLoadingRecommendedProducts] =
    useState(false);

  async function getRecentsProducts() {
    setIsLoadingRecentsProducts(true);
    try {
      const response = await getApiRecentProducts();
      setRecentProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch recent products:", error);
      notify("Erro ao buscar produtos recentes");
    }
    setIsLoadingRecentsProducts(false);
  }

  async function getRecommendedProducts() {
    setIsLoadingRecommendedProducts(true);
    try {
      const response = await getApiRecommendedProducts();
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch recent products:", error);
      notify("Erro ao buscar produtos recentes");
    }
    setIsLoadingRecommendedProducts(false);
  }

  useEffect(() => {
    getRecentsProducts();
  }, []);

  useEffect(() => {
    getRecommendedProducts();
  }, []);

  return (
    <UserTemplate>
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
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
          <button onClick={() => navigate(`/products/search/${inputSearch}`)}>
            <IoSearch className="mx-2" color="gray" size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col mt-5">
        <div className="mb-8 ">
          <h2 className="w-full mt-2 text-2xl mb-4">Itens Recentes</h2>
          {isLoadingRecentsProducts && <ListLoading />}
          {!isLoadingRecentsProducts && recentProducts.length === 0 && (
            <p className="text-center text-gray-500">
              Nenhum produto recente encontrado.
            </p>
          )}
          <div className="flex flex-wrap justify-center ">
            {recentProducts.map((product) => (
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.url1}
                manufacturer={product.manufacturer}
              />
            ))}
          </div>
          <Link to="/all-recent-products">
            <p className="text-right text-mg mt-8 cursor-pointer text-blue-600 hover:text-blue-800">
              Ver mais
            </p>
          </Link>
        </div>
        <div className="bg-blue-900 rounded-2xl w-full  p-4 mb-8 ">
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
          {isLoadingRecommendedProducts && <ListLoading />}
          {!isLoadingRecommendedProducts &&
            recommendedProducts.length === 0 && (
              <p className="text-center text-gray-500">
                Nenhum produto recomendado encontrado.
              </p>
            )}
          <div className="flex flex-wrap justify-center gap-4">
            {recommendedProducts.map((product) => (
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                image={product.url1}
                manufacturer={product.manufacturer}
              />
            ))}
          </div>
          <Link to="/all-products">
            <p className="text-right text-mg mt-8 cursor-pointer text-blue-600 hover:text-blue-800">
              Ver mais
            </p>
          </Link>
        </div>
      </div>
    </UserTemplate>
  );
}
