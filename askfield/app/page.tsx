import Header from "./components/Home/Header";
import AskFieldFeatures from "./components/Features/AskFieldFeatures";
// import Customers from "./components/Feedback/Customers";
import FaqSection from "./components/Faq/FaqSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <AskFieldFeatures />
      {/* <Customers /> */}
      <FaqSection/>
    </div>
  );
}
