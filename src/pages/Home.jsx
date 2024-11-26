import { Counter } from "../components/Counter";
import { Navbar } from "../components/Navbar";
import { Signin } from "../components/Signin";

export default function Home() {
  return (
    <div className="flex items-center flex-col bg-[#DEC1F5] min-h-[100vh] max-w-[100vw] w-[100%]  ">
      <Navbar />
      <Signin />
      <Counter />
    </div>
  );
}
