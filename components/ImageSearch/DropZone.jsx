"use client"
import { useRouter } from "next/navigation";
// import { AppContext } from '../../main.jsx';
import { useContext} from "react";
import ErrorDiv from "../ErrorDiv/ErrorDiv.jsx";
import { AppContext } from "@/app/Context/AppContext.jsx";
function DropZone({
  dragActive,
  handleDrag,
  handleDrop,
  handleFileChange,
  selectedImage,
  inputRef,
}) 
{
  const router = useRouter();
  const {showErrorDiv}=  useContext(AppContext);

  return (
    <div
      className={`drop-zone ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      
    >
      {selectedImage ? (      
        router.push('/results')

      ) : (
        <>
        <div className="drop-text-and-icon">
          {showErrorDiv && <ErrorDiv />}
          <div className="image-icon">
            <img src="/images/dropImage.png"></img>
          </div>
          <p>
            <span className="drop-text">Drag an image here or{" "}</span>
            <label className="upload-label">
              upload a file
              <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="file-input"
              />
            </label>
          </p>
          </div>
        </>
       )} 
    </div>
  );
}

export default DropZone;
