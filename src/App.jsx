import Generator from "./components/Generator";
import "./App.css";

function App() {
  return (
    <div className="App relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="bg-black h-[37%]"></div>
        <div className="bg-lime-green h-[63%]"></div>
      </div>
      <div className="relative container mx-auto flex flex-col justify-center items-center h-full font-krona overflow-hidden z-10">
        <Generator />
      </div>
    </div>
  );
}

export default App;
