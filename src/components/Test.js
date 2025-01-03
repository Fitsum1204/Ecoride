import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <nav className="p-4 bg-gray-100 shadow-md">
      <ul className="flex gap-4">
        {/* React Router Link for internal navigation */}
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 hover:underline">
            About
          </Link>
        </li>

        {/* Anchor tag for linking to section IDs */}
        <li>
          <a href="#section1" className="text-blue-500 hover:underline">
            Section 1
          </a>
        </li>
        <li>
          <a href="#section2" className="text-blue-500 hover:underline">
            Section 2
          </a>
        </li>

        {/* External link using anchor tag */}
        <li>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            External Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Test;
