import React from "react";

interface ShareProps {
  className?: string;
}

const Share = ({ className }: ShareProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M9.59477 9.87671V1.78468M9.59477 1.78468L6.26276 5.11669M9.59477 1.78468L12.9268 5.11669M15.5448 8.68671V12.0187C15.5448 13.0703 14.6923 13.9227 13.6408 13.9227L5.54875 13.9227C4.4972 13.9227 3.64474 13.0703 3.64474 12.0187L3.64474 8.68671"
        stroke={className}
        stroke-width="1.44999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Share;
