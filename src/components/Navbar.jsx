import logo from "../assets/Logo.png";

export const Navbar = () => {
  return (
    <div className="w-[100%] max-w-[1500px]  h-[80px] flex flex-row  sm:justify-start justify-evenly items-center  text-4xl  border-b-4 border-black mt-4">
      <div className="min-w-[100px] h-[100%] flex sm:justify-start justify-center items-center  text-xl mb-4">
        <img
          src={logo}
          alt="logo"
          className="h-[100%] w-[100%] cursor-pointer"
        />
      </div>
    </div>
  );
};
