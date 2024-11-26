import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import AddProduct from "./AddProduct";

export default function Dashboard() {
  return (
    <div className="w-[100%] max-w-[1500px]  min-h-[90vh] flex flex-col items-center   mt-2 ">
      {/* dashboard-Navbar */}
      <div className="w-[100%] max-w-[1500px]  border-red-800 h-[80px] flex flex-row justify-evenly items-center   m-6">
        <div className="min-w-[100px] h-[100%] flex sm:justify-start justify-center items-center border-black  font-bold text-2xl text-center sm:text-4xl">
          Admin DashBoard
        </div>
        <div className="h-[100%] text-2xl  sm:hidden flex justify-center items-center">
          <BsLayoutTextSidebarReverse />
        </div>
        <div className="hidden sm:flex h-[100%]  rounded-lg justify-evenly items-center min-w-[370px] p-4  border-black ">
          <button className=" border-[#A78BFA] text-[#5B21B6] px-4 py-2 rounded-md hover:bg-[#A78BFA] hover:text-white transition-all duration-100">
            Add Product
          </button>
          <button className=" border-[#A78BFA] text-[#5B21B6] px-4 py-2 rounded-md hover:bg-[#A78BFA] hover:text-white transition-all duration-300">
            Products
          </button>
        </div>
      </div>
      <AddProduct />
    </div>
  );
}
