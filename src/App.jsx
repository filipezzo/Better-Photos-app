import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import About from "./components/About";
function App() {
  return (
    <div className=" w-full h-screen   xl:w-[1240px] xl:h-[900px]  bg-white shadow-lg  text-gray flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-grid-area lg:grid-rows-grid-area ">
      <Header />
      <Sidebar />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
