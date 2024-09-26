import React from "react";

interface DownloadProps {
  className?: string;
  color?: string;
}

const Download = ({ className, color }: DownloadProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.20045 3.95178V11.0291M8.20045 11.0291L10.6171 8.61246M8.20045 11.0291L5.7838 8.61246"
        stroke={color}
        stroke-width="1.44999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8.55298"
        cy="7.92939"
        r="6.64578"
        stroke={color}
        stroke-width="1.20832"
      />
    </svg>
  );
};

export default Download;
