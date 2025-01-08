import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const TranslateWidget = () => {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleToggle = () => {
    setShowTranslate(!showTranslate);

    // Log any errors related to Google Translate
    if (!window.google || !window.google.translate) {
      console.error("Google Translate script not loaded.");
    }
  };

  return (
    <div>
      {/* Language Selector Button */}
      <div
        className="fixed top-0 right-2 flex items-center space-x-2 bg-gray-800 text-white rounded-full px-3 py-2 shadow-lg cursor-pointer z-50"
        onClick={handleToggle}
      >
        <span className="text-sm font-medium">EN</span>
        <FaGlobe size={16} />
      </div>

      {/* Google Translate Widget */}
      <div
        id="google_translate_element"
        className={`${
            showTranslate ? "block" : "hidden"
          } absolute top-10 right-2 bg-white rounded-lg p-4 z-50 shadow-md`}
      ></div>
    </div>
  );
};

export default TranslateWidget;
