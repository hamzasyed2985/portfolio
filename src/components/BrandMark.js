import React from "react";

function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
      <path
        d="M12 28V12h3.2v6.4H24.8V12H28v16h-3.2v-6.4H15.2V28H12z"
        fill="currentColor"
      />
      <rect x="28" y="28" width="6" height="6" fill="#2DD4BF" />
    </svg>
  );
}

export default BrandMark;
