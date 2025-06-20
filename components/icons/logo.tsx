import React from "react";

export function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="500"
        width="500"
        height="500"
        rx="250"
        transform="rotate(-90 0 500)"
        fill="#F24D15"
      />
      <path
        d="M250 437C350.516 437 432 353.277 432 250C432 146.723 350.516 63 250 63C149.484 63 68 146.723 68 250C68 353.277 149.484 437 250 437Z"
        stroke="white"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="249.5"
        cy="249.5"
        r="22.5"
        transform="matrix(0 -1 1 0 0 499)"
        fill="white"
      />
    </svg>
  );
}
