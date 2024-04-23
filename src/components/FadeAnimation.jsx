import React, { useRef,forwardRef } from "react";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";


const FadeIn = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
    const el = useRef();
    const animation = useRef();
  
    useGSAP(() => {
      animation.current = gsap.from(el.current.children, {
        opacity: 0,
        rotation:720,
        stagger,
        y:-550,
      });
    });
  
    useGSAP(() => {
      // forward the animation instance
      if (typeof ref === "function") {
        ref(animation.current);
      } else if (ref) {
        ref.current = animation.current;
      }
    }, [ref]);
  
    return <span className="flex justify-evenly gap-5" ref={el}>{children}</span>;
  });



const FadeAnimation = () => {
  
    const animation = useRef();

    const toggle = () => {
      animation.current.reversed(!animation.current.reversed());
    };

  return (
    <div  className="bg-yellow-400 flex justify-evenly py-10">
      <button onClick={toggle} className="bg-blue-500 p-5 rounded-lg text-white">
        click to fade
      </button>
      <FadeIn ref={animation} >
        <div className="box p-5 rounded-lg bg-red-500 justify-center text-white items-center flex">
          box
        </div>
        <div className="box p-5 rounded-lg bg-red-500 justify-center text-white items-center flex">
          box
        </div>
        <div className="box p-5 rounded-lg bg-red-500 justify-center text-white items-center flex">
          box
        </div>
      </FadeIn>
    </div>
  );
};

export { FadeAnimation };
