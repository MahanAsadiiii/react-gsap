import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import Rocket from '../assets/Rocket.svg'
import { useGSAP } from "@gsap/react";

const HoverContainer = (props) => {
  const appContainer = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".box", "x", {
        duration: 0.4,
        ease: "circ.in",
      });
      yTo.current = gsap.quickTo(".box", "y", {
        duration: 0.8,
        ease: "bounce.in",
      });
    },
    { scope: appContainer }
  );

  const onMouseAnimation = contextSafe((e) => {
    if (e.clientY > appContainer.current.clientHeight - 50) {
      yTo.current(e.clientY - 40);
      xTo.current(e.clientX);
    } else {
      yTo.current(e.clientY);
      xTo.current(e.clientX);
    }
  });

  return (
    <div
      ref={appContainer}
      onMouseMove={(e) => onMouseAnimation(e)}
      className="h-[50vh] flex flex-col py-10 bg-blue-400 "
    >
      <div className="box w-12 fixed left-0 top-0">
        <img src={Rocket} alt="" />
      </div>
    </div>
  );
};

export { HoverContainer };
