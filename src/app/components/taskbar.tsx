import React, { useState, useEffect } from "react";

export default function TaskBar() {
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Date().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            setLocalTime(currentTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex bg-[#c0c0c0] h-10 w-full absolute bottom-0 z-50 justify-between shadow-[0_-2px_#fffdfc,0_-4px_#cce9eb]">
            <img src="start3.png" alt="start" className="mx-2 my-1"/>
            <div className="status-bar py-1 px-2">
                <div className="status-bar-field flex items-center justify-center h-[32px] w-[80px]">
                    <span className="text-base font-medium">{localTime}</span>
                </div>
            </div>
        </div>
    )
}