import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import AddProduct from "./AddProduct";

export default function Dashboard() {
  return (
    <div className="w-[100%] max-w-[1500px]  min-h-[90vh] flex flex-col items-center   mt-4">
      <div className="min-w-[100px] h-[100%] flex sm:justify-start justify-center items-center border-black  font-bold text-2xl text-center sm:text-8xl m-8">
        Admin DashBoard
      </div>

      <AddProduct />
    </div>
  );
}
