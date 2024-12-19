'use client'

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cameraClicked, setCameraClicked] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [showErrorDiv, setShowErrorDiv] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cameraClicked,
        setCameraClicked,
        filteredSuggestions,
        setFilteredSuggestions,
        imageUrl,
        setImageUrl,
        showErrorDiv,
        setShowErrorDiv,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
