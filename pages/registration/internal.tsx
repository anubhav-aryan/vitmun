import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

import NavWrapper from "@/wrappers/NavWrapper";
import BaseWrapper from "@/wrappers/BaseWrapper";
import MainWrapper from "@/wrappers/MainWrapper";
import Header from "@/components/common/Header";

import RegisterInternal from "@/screens/RegisterInternal";
const internal = () => {
  return (
    <>
      {" "}
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 2.5,
          smoothWheel: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <BaseWrapper>
          <NavWrapper>
            <Header />
          </NavWrapper>
          <MainWrapper>
            <RegisterInternal />
          </MainWrapper>
        </BaseWrapper>
      </ReactLenis>
    </>
  );
};

export default internal;
