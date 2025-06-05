import Footer from "../../components/footer";
import { PropsWithChildren } from "react";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplateProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <HeaderAdmin />
      <div className="px-[10%] py-[2%]">{props.children}</div>
      <Footer />
    </div>
  );
}
