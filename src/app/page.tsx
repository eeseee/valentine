'use client'

import React, { useState } from "react";
import "98.css"

import TaskBar from "./components/taskbar";

export default function Home() {
  const [isFree, setIsFree] = useState<boolean | undefined>(undefined);
  const [isYes, setIsYes] = useState<boolean | undefined>(undefined);
  const [isError, setIsError] = useState<boolean>(false);

  return (
      <div className="flex h-screen">
        <div className="flex w-full justify-center items-center">
          <div className="window absolute">
            <div className="title-bar">
              <div className="title-bar-text">
                {isYes ? "YAYYYY" : "A Question?"}
              </div>
              <div className="title-bar-controls">
                <button 
                  aria-label="Close" 
                  onClick={() => {
                    setIsFree(false);
                    setIsYes(false);
                    setIsError(false);
                }}>
                </button>
              </div>
            </div>
            <div className="window-body">
              {
                isYes ? (
                  <img src="yippee.gif" alt="yippee" />
                ) : isFree ? (
                  <div className="flex flex-col space-y-2">
                    <img src="flowers.gif" alt="flowers" />
                    <div className="self-center text-lg">Will you be my Valentine?</div>
                  </div>
                ) : (
                  <img src="ask.png" alt="cat asking if free" />
                )
              }
              <div className="flex m-2 justify-center space-x-10">
                {
                  isYes ? (
                    <div>{"no take backsies :)"}</div>
                  ) : isFree ? (
                    <>
                      <button 
                        onClick={() => {
                          setIsYes(true);
                          setIsError(false);
                        }}
                        title={isError ? "PLSSSSS" : "say yes or else"}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setIsError(true)}
                        disabled={isError}
                        title={isError ? "WHYYYYY" : "don't do it"}
                      >
                        No
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsFree(true);
                          setIsError(false);
                        }}
                        title={isError ? "PLSSSSSS" : "pls gimme a chance"}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setIsError(true)}
                        disabled={isError}
                        title={isError ? "wrong answer" : "dont click this"}
                      >
                        No
                      </button>
                    </>
                  )
                }
              </div>
            </div>
          </div>
          {
            isError && (
              <div className="window relative">
                <div className="title-bar">
                  <div className="title-bar-text">ERROR 404</div>
                  <div className="title-bar-controls">
                    <button aria-label="Close" onClick={() => setIsError(false)}></button>
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
