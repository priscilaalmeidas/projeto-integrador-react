import UserTemplate from "../../templates/user-template";

export default function NotFound() {
  return (
    <UserTemplate>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-lg mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
      </div>
    </UserTemplate>
  );
}
