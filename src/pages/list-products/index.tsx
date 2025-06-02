import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function ListProducts() {
  return (
    <UserTemplate>
      <h1 className="text-2xl mb-4">Lista de Produtos</h1>
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 10 }).map(() => (
          <CardProduct />
        ))}
      </div>
    </UserTemplate>
  );
}
