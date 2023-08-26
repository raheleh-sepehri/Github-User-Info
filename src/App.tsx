import GitHabUserInput from "./components/GitHabUserInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import github from "../src/assets/DarkMode_dribbble_1_.gif";
import "./App.css";

function App() {
  return (
    <div className=" w-full h-screen container mx-auto flex px-4">
      <GitHabUserInput />
      <div className="w-full bg-blue-50 hidden md:block  ">
        <img className="w-full h-full object-cover" src={github} alt="github" />
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
