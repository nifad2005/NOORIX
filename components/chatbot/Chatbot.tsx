"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { useSelector } from "react-redux";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const user = useSelector((state: any) => state.user);
  const [aiResponse, setAiResponse] = useState<any>("");

  const aiContext = `You are now a chatbot of NOORIX startup. 
    User will ask you questions and you will answer them.
    Some detials about NOORIX -
    NOORIX is a startup that provides AI based services to its users.
    NOORIX was founded by MD NIFAD UZZAMAN.
    NOORIX is a startup that provides tech based products and services to its users.

    -Make your response short and simple as possible.
    -Make your response simple and easy to understand.
    -If user ask question in another language then you have give answer in the same language that user using.
    -Dont answer anything that is not related to NOORIX.

    The Question is - ${inputValue}


  `;
  const handleSubmit = async (e: any) => {
    if (e.key == "Enter") {
      setAiResponse(".....");
      setInputValue("");
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: aiContext,
      });
      const res = response.text;
      console.log("Ai response:", res);
      setAiResponse(res);
      return;
    }
  };
  const handleCloseChat = () => {
    setChatOpen(false);
    setAiResponse("");
    setInputValue("");
  };
  return (
    <div className="fixed rounded-4xl z-10 bottom-12  left-12
      shadow-2xl  shadow-sky-400/30
      ">
      {!chatOpen && (
        <div
          onClick={() => setChatOpen(!chatOpen)}
          className="
        h-14 aspect-square
        ring-4 ring-green-500
        rounded-full overflow-hidden
        cursor-pointer
        shadow-2xl
        "
        >
          <Image
            src={"/images/logo.png"}
            alt="logo"
            className="brightness-75 hover:brightness-100 duration-200"
            width={100}
            height={100}
          />
        </div>
      )}
      {chatOpen && (
        <>
          <div
            className="
          h-[400px] w-[320px] p-4 pb-5  
          bg-cyan-600/20 backdrop-blur-md
          relative 
          rounded-3xl
           transition-all duration-300
          "
          >
            <div
              className="
            gap-2
            flex items-center
            absolute
            rounded-3xl
            pr-3 
            ring-1 ring-slate-500
            "
            >
              <div className="h-10 aspect-square rounded-full overflow-hidden ">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  className="brightness-75"
                  width={100}
                  height={100}
                />
              </div>
               <div>
                  <h1 className="text-sm text-slate-800 font-medium">NOORIX CHATBOOT</h1>
                  <p className="text-xs text-slate-500">To assist you about NOORIX.</p>
                </div>
            </div>
            <h1
              onClick={handleCloseChat}
              className="
          text-2xl
          text-slate-500 hover:text-slate-600
          absolute top-2 right-4
          cursor-pointer
          "
            >
              X
            </h1>

            <div
              className="
            h-full w-full
            flex flex-col items-center justify-end gap-4
            "
            >
              {aiResponse && (
                <div className="flex w-full  gap-2 items-center justify-start">
                  <div className="rounded-full max-h-10 w-square overflow-hidden">
                    <Image
                      src={"/images/logo.png"}
                      alt="user"
                      className="h-10 aspect-square"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p
                    className="
                    bg-sky-300 rounded-3xl px-4 py-1 text-sm font-normal 
                    "
                  >
                    {aiResponse}
                  </p>
                </div>
              )}
              <div className="w-full px-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleSubmit}
                  autoFocus
                  placeholder="Any question about NOORIX?"
                  className="w-full px-5 py-3
                bg-slate-200
                ring-2 ring-slate-500 rounded-4xl  
                outline-none
                shadow-2xl
                "
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
