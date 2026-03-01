

"use client";
import { useEffect } from "react";
import { gsap } from "@/public/lib/gsap";

export default function FloatingShapes() {
  useEffect(() => {
    gsap.to(".ilu-scan", { y:"110vh", duration:10, repeat:-1, ease:"none" });
  }, []);
  return (
    <>
      <div className="ilu-bg" />
      <div className="ilu-noise" />
      <div className="ilu-scan" />
      <div className="ilu-c ilu-c-tl" />
      <div className="ilu-c ilu-c-tr" />
      <div className="ilu-c ilu-c-bl" />
      <div className="ilu-c ilu-c-br" />
    </>
  );
}