import ContainerBox from "./components/ContainerBox.jsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const app = useRef(null);
  const navRef = useRef(null);

  const xTo = useRef(null);
  const yTo = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".box", "x", {
        duration: 0.2,
        ease: "circ.in",
      });
      yTo.current = gsap.quickTo(".box", "y", {
        duration: 0.8,
        ease: "bounce.in",
      });
    },
    { scope: app }
  );

  const onMouseAnimation = contextSafe((e) => {
    yTo.current(e.clientY);
    xTo.current(e.clientX);
  });

  return (
    <div className="bg-red-500 flex flex-col ">
      <div
        ref={app}
        onMouseMove={(e) => onMouseAnimation(e)}
        className="h-[50vh] flex flex-col py-10 bg-blue-400"
      >
        <div className="box h-10 w-10 bg-green-400 fixed left-0 top-0"></div>
      </div>

      <ContainerBox />
    </div>
  );
}

export default App;
