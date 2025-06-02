import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function SearchProducts() {
  return (
    <UserTemplate>
      <div className="">
        <h1 className="text-2xl mb-4">Página de Busca</h1>
        <div className="flex flex-wrap gap-6">
          {Array.from({ length: 10 }).map(() => (
            <CardProduct />
          ))}
        </div>
        <p>Total: 4 itens </p>
      </div>
    </UserTemplate>
  );
}
