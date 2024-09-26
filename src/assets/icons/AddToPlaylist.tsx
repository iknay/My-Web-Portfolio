import React from "react";

interface AddToPlaylistProps {
  className?: string;
  color?: string;
}

const AddToPlaylist = ({ className, color }: AddToPlaylistProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 17 18"
      fill="none"
    >
      <rect
        width="14.3525"
        height="14.3525"
        rx="2.15287"
        transform="matrix(1 0 0 -1 1.35352 17.0598)"
        stroke={color}
        stroke-width="1.43525"
        stroke-linejoin="round"
      />
      <path
        d="M2.78876 2.7074H14.2707V2.7074C14.2707 1.5184 13.3069 0.554525 12.1179 0.554525H4.94163C3.75263 0.554525 2.78876 1.5184 2.78876 2.7074V2.7074Z"
        stroke={color}
        stroke-width="1.07644"
        stroke-linejoin="round"
      />
      <path
        d="M5.65924 9.88368H8.52974M11.4002 9.88368H8.52974M8.52974 9.88368V7.01318M8.52974 9.88368V12.7542"
        stroke={color}
        stroke-width="1.44999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AddToPlaylist;
