import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";
import { useNavigate } from "react-router-dom";

export default function UserProducts() {
  const navigate = useNavigate();
  return (
    <AdminTemplate>
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-xl mb-4">Produtos Anunciados</h1>
        <button
          onClick={() => navigate("/form-products")}
          className="bg-amber-500 text-white px-4 py-2 rounded mb-4"
        >
          Criar Anúncio
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 10 }).map(() => (
          <CardProductAdmin />
        ))}
      </div>
      <p className="text-right">{Array.from({ length: 10 }).length} itens</p>
    </AdminTemplate>
  );
}
