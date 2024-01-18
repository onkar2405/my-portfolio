import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [liveTime, setLiveTime] = useState(new Date());

  useEffect(function () {
    setInterval(() => setLiveTime(new Date()), 3000);
  }, []);

  return (
    <>
      <div className="text-white font-semibold flex justify-between">
        <h3>O/V</h3>

        <div className="flex gap-6">
          <h3>
            {liveTime.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h3>
          <h3>
            {liveTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
