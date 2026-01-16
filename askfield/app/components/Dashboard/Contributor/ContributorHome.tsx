import TopNav from "./TopNav";
import SideBar from "./SideBar";
import Features from "./Features";

export default function ContributorHome() {
  return (
    <div className="">
      <div className="flex-1 overflow-auto">
        <TopNav />
        <div className="flex ">
          <SideBar />
          <Features />
        </div>
      </div>
    </div>
  );
}
