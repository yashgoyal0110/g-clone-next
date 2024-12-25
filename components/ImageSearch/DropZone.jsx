"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import ErrorDiv from "../ErrorDiv/ErrorDiv.jsx";
import { AppContext } from "@/app/Context/AppContext.jsx";
function DropZone({
  dragActive,
  handleDrag,
  handleDrop,
  handleFileChange,
  selectedImage,
  inputRef,
}) {
  const router = useRouter();
  const { showErrorDiv } = useContext(AppContext);
  useEffect(() => {
    if (selectedImage) {
      router.push("/results");
    }
  }, [selectedImage, router]);

  return (
    <div
      className={`drop-zone ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <>
        <div className="drop-text-and-icon">
          {showErrorDiv && <ErrorDiv />}
          <div className="image-icon">
            <img src="/images/dropImage.png"></img>
          </div>
          <p>
            <span className="drop-text">Drag an image here or </span>
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
    </div>
  );
}

export default DropZone;
