import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { PropsWithChildren } from "react";

type AuthTemplateProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplateProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="bg-blue-950 flex items-center justify-between h-16 text-white">
        <button onClick={() => navigate("/")}>
          <h1 className="text-xl pl-4 cursor-pointer">My App Unyleya</h1>
        </button>
        <div />
      </div>
      {props.children}
      <Footer />
    </div>
  );
}
