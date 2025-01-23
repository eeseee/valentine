'use client'

import React, { useEffect, useState } from "react";
import "98.css"
import TaskBar from "./components/taskbar";

export default function Home() {
  const [isYes, setIsYes] = useState<boolean | undefined>(undefined);
  // const [progress, setProgress] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval)
  //         return 100
  //       }

  //       return prev + 1;
  //     })
  //   }, 30);

  //   return () => clearInterval(interval);
  // }, []);

  return (
      <div className="flex h-screen">
        <div className="flex w-full justify-center items-center">
          <div className="window absolute">
            <div className="title-bar">
              <div className="title-bar-text">A Question?</div>
              <div className="title-bar-controls">
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              {
                isYes ? (
                  <img src="yippee.gif" alt="yippee" />
                ) : (
                  <img src="ask.png" alt="cat asking if free" />
                )
              }
              <div className="flex m-2 justify-center space-x-10">
                <button
                  onClick={() => setIsYes(true)}
                  title={isYes === undefined ? "u know u wanna:)" : isYes ? "" : "pls gimme a chance"}
                >
                  Yes
                </button>
                <button 
                  onClick={() => setIsYes(false)}
                  disabled={isYes}
                  title={isYes === undefined ? "don't do it" : isYes ? "no take backsies :)" : "WHYYYYYYY"}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          {
            isYes === false && (
              <div className="window relative">
                <div className="title-bar">
                  <div className="title-bar-text">ERROR 404</div>
                  <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => setIsYes(undefined)}></button>
                  </div>
                </div>
                <div className="window-body flex justify-center items-center">
                  <img src="error.png" alt="error icon" width="80" height="80" />
                  <p>Wrong answer. Please try again.</p>
                </div>
              </div>
            )
          }
        </div>
        <TaskBar />
      </div>
  );
}
