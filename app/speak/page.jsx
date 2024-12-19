"use client";
import "./Listening.css";
import { FaMicrophone } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
function Listening() {
  const router = useRouter();
  function crossButtonNavigation() {
    router.push("/");
  }
  return (
    <div className="main">
      <div className="cross-container">
        <RxCross2
          className="cross-icon"
          onClick={() => crossButtonNavigation()}
        />
      </div>
      <div className="content-box">
        <div className="text-box">
          Listening
          <div className="listening-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        <div className="icon-container">
          <FaMicrophone className="mic-icon" />
        </div>
      </div>
    </div>
  );
}

export default Listening;
