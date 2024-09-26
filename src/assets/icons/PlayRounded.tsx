import React from "react";

interface PlayRoundedProps {
  className?: string;
}

const PlayRounded = ({ className }: PlayRoundedProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 30 29"
      fill="none"
    >
      <circle cx="14.7083" cy="14.5089" r="14.4999" fill="#1ED760" />
      <path
        d="M19.1022 13.5575C19.8345 13.9803 19.8345 15.0373 19.1022 15.4601L13.3352 18.7897C12.6028 19.2125 11.6874 18.684 11.6874 17.8384L11.6874 11.1792C11.6874 10.3336 12.6028 9.80509 13.3352 10.2279L19.1022 13.5575Z"
        fill="black"
      />
    </svg>
  );
};

export default PlayRounded;
