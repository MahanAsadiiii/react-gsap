import { ContainerBox, HoverContainer,FadeAnimation } from "./components/index";

function App() {


  return (
    <div className="bg-gray-300 flex flex-col gap-10 ">
      <HoverContainer />
      <ContainerBox />
      <FadeAnimation/>
    </div>
  );
}

export default App;
