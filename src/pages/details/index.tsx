import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import imageProduct from "../../assets/img_product.jpg";

export default function Details() {
  return (
    <UserTemplate>
      <p className="text-[30px] font-semibold mb-4">Echo Dot (8ª geração)</p>
      <div className="flex justify-center ">
        <div className="w-[20%]">
          <Carousel showThumbs={false}>
            <div>
              <img
                src={imageProduct}
                className="w-[80%] h-[20%]"
                alt="Banner promocional"
              />
            </div>
            <div>
              <img src={imageProduct} alt="Banner promocional" />
            </div>
            <div>
              <img src={imageProduct} alt="Banner promocional" />
            </div>
          </Carousel>
        </div>
        <div className="ml-8">
          <div className="ml-8 background-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Informações do vendedor</h2>
            <p className=" mb-4">João Silva</p>
            <p className="text-gray-700 mb-4">São Paulo - SP</p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> joaosilva@email.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Telefone:</strong> (11) 99999-8888
            </p>
          </div>
          <div className="ml-8 background-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Preço</h2>
            <p className="text-gray-700 text-[30px] mb-4">R$ 99.99</p>
          </div>
        </div>
      </div>
      <div className="ml-8">
        <h2 className="text-2xl font-semibold mb-2">Descrição do Produto</h2>
        <p className="text-gray-700 mb-4">
          O Echo Dot (8ª geração) é um alto-falante inteligente com Alexa, que
          oferece som de alta qualidade, controle por voz e integração com
          dispositivos inteligentes. Com um design compacto e elegante, ele se
          adapta facilmente a qualquer ambiente. Você pode tocar música, fazer
          chamadas, controlar sua casa inteligente e muito mais, tudo com a sua
          voz. O Echo Dot também possui recursos de segurança, como alarmes e
          lembretes, tornando-o um assistente pessoal versátil e prático. Ideal
          para quem busca conveniência e tecnologia em um só dispositivo.
          <br />
        </p>
      </div>
    </UserTemplate>
  );
}
