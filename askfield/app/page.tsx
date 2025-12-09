// import NavbarHome from "./components/Navbar/NavbarHome";
import Header from "./components/Home/Header";
import FeatureHome from "./components/Features/FeatureHome";
import Customers from "./components/Feedback/Customers";
import FaqSection from "./components/Faq/FaqSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <FeatureHome />
      <Customers />
      <FaqSection/>
    </div>
  );
}
