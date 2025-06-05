import { PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

type UserTemplateProps = PropsWithChildren & {};
export default function UserTemplate(props: UserTemplateProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-[10%] py-[2%]">{props.children}</div>
      <Footer />
    </div>
  );
}
