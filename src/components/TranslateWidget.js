import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

const TranslateWidget = () => {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleToggle = () => {
    setShowTranslate(!showTranslate);
  };

  useEffect(() => {
    // Load Google Translate script
    const addGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

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
