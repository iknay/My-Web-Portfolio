import React from "react";

interface Props {
  className?: string;
}

const Css = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2181_964)">
        <g clip-path="url(#clip0_2181_964)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2181_964)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2181_964)"
          >
            <path
              d="M85.9731 61.4176C86.2225 59.8066 84.6908 58.5351 83.2584 59.164L54.7296 71.6897C53.7025 72.1407 53.7776 73.6965 54.8429 74.0358L60.7263 75.9094C61.8492 76.2669 63.0651 76.082 64.0456 75.4046L77.3099 66.2405C77.7099 65.9642 78.1459 66.5329 77.8042 66.8853L68.2562 76.7293C67.33 77.6842 67.5139 79.3023 68.6279 80.0009L79.3179 86.7046C80.5169 87.4565 82.0594 86.7011 82.2836 85.2523L85.9731 61.4176Z"
              fill="white"
            />
          </g>
          <path
            d="M51 49H93L89.18 92.126L71.954 97L54.824 92.124L51 49ZM85.18 57.826L58.82 57.82L59.246 63.064L79.496 63.068L78.986 68.5H65.706L66.186 73.646H78.55L77.818 80.692L71.998 82.3L66.086 80.68L65.71 76.46H60.49L61.07 84.17L72 87.576L82.746 84.516L85.18 57.826Z"
            fill="#1572B6"
          />
          <g filter="url(#filter2_f_2181_964)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#1893D1" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2181_964)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2181_964)">
        <circle cx="58" cy="59" r="18" fill="white" fillOpacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2181_964"
          x="-16.8"
          y="-15.8"
          width="185.6"
          height="177.6"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2181_964"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="16" dy="8" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_2181_964"
            result="effect2_dropShadow_2181_964"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2181_964"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.707059 0 0 0 0 0.988235 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2181_964"
          />
        </filter>
        <filter
          id="filter1_f_2181_964"
          x="16"
          y="17"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_2181_964"
          />
        </filter>
        <filter
          id="filter2_f_2181_964"
          x="14"
          y="71"
          width="118"
          height="98"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="18"
            result="effect1_foregroundBlur_2181_964"
          />
        </filter>
        <filter
          id="filter3_f_2181_964"
          x="0"
          y="1"
          width="116"
          height="116"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_2181_964"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2181_964"
          x1="24"
          y1="25"
          x2="120"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8FBFF" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2181_964"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2181_964">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Css;
