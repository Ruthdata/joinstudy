import TopNav from "./TopNav";
import SideBar from "./SideBar";
import Finance from "./Finance";
import AvailableSurveys from "../../Surveys/AvailableSurveys";

export default function ParticipantHomeMgt() {
  return (
    <div className="">
      <div className="flex-1 overflow-auto">
        <TopNav />
        <div className="flex ">
          <SideBar />   
          <Finance/>
          <AvailableSurveys/>     
          </div>
      </div>
    </div>
  );
}
