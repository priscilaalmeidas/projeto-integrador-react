import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

type UserTemplateProps = PropsWithChildren & {};
export default function UserTemplate(props: UserTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-[10%] py-[2%]">{props.children}</div>
      <Footer />
    </div>
  );
}
