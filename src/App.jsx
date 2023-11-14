import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import About from "./components/About";
function App() {
  return (
    <div className="w-[1240px] h-[900px]  bg-white shadow-lg  text-gray grid grid-cols-grid-area grid-rows-grid-area ">
      <Header />
      <Sidebar />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
