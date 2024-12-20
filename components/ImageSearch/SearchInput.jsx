"use client"
import { useContext, useState } from "react";
import { AppContext } from "@/app/Context/AppContext.jsx";
import { useRouter } from "next/navigation";

function SearchInput() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const { setCameraClicked, setImageUrl, setShowErrorDiv } = useContext(AppContext);

  function handleSearchButton() {
    if (inputVal) {
      if (inputVal.startsWith("http://") || inputVal.startsWith("https://")) {   // input url validation
        setImageUrl(inputVal);
       router.push("/results");
        setCameraClicked(false);
        setShowErrorDiv(false);
      }
      else{
        setShowErrorDiv(true);
      }
    }    
  }
  return (
    <div className="url-input-container">
      <input
        type="text"
        placeholder="Paste image link"
        className="url-input"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="search-button" onClick={() => handleSearchButton()}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
