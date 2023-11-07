import FeaturedInfo from "../AdminpanelComponents/FeaturedInfo";
import Chart from "../AdminpanelComponents/Chart";
import WidgetSm from "../AdminpanelComponents/WidgetSm";
import WidgetLg from "../AdminpanelComponents/WidgetLg";
import { userData } from "./data";
import "./adminhome.css";
export default function AdminHome() {
  return (
    <div className="Adminhome">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="AdminhomeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}