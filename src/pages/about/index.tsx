import UserTemplate from "../../templates/user-template";
import about from "../../assets/about.jpg";

export default function About() {
  return (
    <UserTemplate>
      <div className="flex flex-1">
        <div className="max-w-6xl mx-auto p-6 space-y-8">
          <h1 className="text-4xl font-bold mb-4">Quem somos</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Nossa História
            </h2>

            <div className="flex justify-center mb-4">
              <p className="mr-[5%]">
                Bem-vindo à <strong>Loja Fictícia</strong>, o seu destino de
                compras completo e confiável! Desde a nossa fundação em 2021,
                temos nos dedicado a oferecer uma experiência única para cada
                cliente, garantindo qualidade, variedade e preços competitivos.
                Nossa loja conta com uma ampla gama de produtos: eletrônicos de
                última geração, moda atualizada, calçados, acessórios, itens
                para casa e decoração, brinquedos, cosméticos, produtos
                esportivos e muito mais. Trabalhamos com as melhores marcas do
                mercado, sempre atentos às tendências e inovações.
                <br />
                Nosso compromisso vai além de vender produtos: queremos
                proporcionar um ambiente acolhedor e inspirador, onde cada
                cliente se sinta especial. Acreditamos na força do atendimento
                humanizado e da personalização, oferecendo suporte especializado
                para ajudar na escolha ideal de cada item.
                <br />
                Investimos constantemente em tecnologia para garantir uma
                navegação intuitiva no nosso e-commerce, com total segurança nos
                pagamentos e entregas rápidas para todo o Brasil. Nosso time é
                formado por profissionais apaixonados por varejo, inovação e,
                principalmente, pela satisfação dos nossos clientes.
              </p>
              <img
                src={about}
                alt="Vendedora de produtos diversos"
                className="w-[35%] h-[35%] rounded-lg shadow-md"
              />
            </div>
            <p>
              Além da nossa presença online, contamos com lojas físicas
              cuidadosamente planejadas, para proporcionar uma experiência de
              compra confortável, segura e agradável. Venha nos visitar e
              aproveite nossas promoções exclusivas!
              <br />A <strong>Loja Fictícia</strong> agradece a sua preferência
              e confiança. Estamos sempre prontos para oferecer o melhor, com
              dedicação, respeito e carinho.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-950 mb-4">
              Onde Estamos
            </h2>
            <div className="w-full h-64">
              <iframe
                title="Localização da Loja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.701487043215!2d-46.57711968447557!3d-23.506201265632865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ec9ed5e2e4d%3A0x9b46b1cb9d54cb8e!2sShopping%20An%C3%A1lia%20Franco!5e0!3m2!1spt-BR!2sbr!4v1629835821864!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </UserTemplate>
  );
}
