import Dashboard from "../components/Dashbaord";
import Product from "../components/Product";

export default function DashBoard() {
  return (
    <div className="flex items-center justify-start  flex-col  min-h-[100vh] max-win-[100vw] w-[100%]  bg-[#DEC1F5]">
      <Dashboard />
      <Product />
    </div>
  );
}
