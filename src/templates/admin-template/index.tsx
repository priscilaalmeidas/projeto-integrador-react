import Footer from "../../components/footer";
import { PropsWithChildren } from "react";
import HeaderAdmin from "../../components/header-admin";
import { Bounce, ToastContainer } from "react-toastify";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <HeaderAdmin />
      <div className="px-[10%] py-[2%]">{props.children}</div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}
