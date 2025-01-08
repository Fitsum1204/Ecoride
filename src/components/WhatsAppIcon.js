import React from "react";

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-14 right-1 z-50 cursor-pointer">
      <a
        href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-16 h-16 rounded-s-full shadow-lg transition-transform duration-200 hover:scale-110"
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
