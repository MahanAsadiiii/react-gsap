import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

function ContainerBox() {
  const container = useRef();
  const tl = useRef();

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(
          ".box",
          {
            rotation: 720,
            x: 200,
          },
          0.5
        )
        .to(
          ".circle",
          {
            x: 100,
          },
          2
        );
    },
    { scope: container }
  );

  const toggleTimeline = contextSafe(() => {
    tl.current.reversed(!tl.current.reversed());
  });

  return (
    <div className="app flex justify-evenly p-10 bg-red-400" ref={container}>
      <div>
        <button
          className="rounded-full bg-blue-500 p-5 text-white shadow-2xl shadow-gray-400"
          onClick={toggleTimeline}
        >
          click here
        </button>
      </div>
      <div className="bg-yellow-500 rounded-lg flex items-center p-5 box">
        box
      </div>
      <div className="flex items-center bg-gray-400 p-5 rounded-full circle">
        circle
      </div>
    </div>
  );
}

export { ContainerBox };
