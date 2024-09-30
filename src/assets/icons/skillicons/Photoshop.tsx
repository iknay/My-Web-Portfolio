import React from "react";

interface Props {
  className?: string;
}

const Photoshop = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2211_899)">
        <g clip-path="url(#clip0_2211_899)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2211_899)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2211_899)"
          >
            <path
              d="M85.9731 61.4176C86.2225 59.8066 84.6908 58.5351 83.2584 59.164L54.7296 71.6897C53.7025 72.1407 53.7776 73.6965 54.8429 74.0358L60.7263 75.9094C61.8492 76.2669 63.0651 76.082 64.0456 75.4046L77.3099 66.2405C77.7099 65.9642 78.1459 66.5329 77.8042 66.8853L68.2562 76.7293C67.33 77.6842 67.5139 79.3023 68.6279 80.0009L79.3179 86.7046C80.5169 87.4565 82.0594 86.7011 82.2836 85.2523L85.9731 61.4176Z"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip1_2211_899)">
            <path
              d="M67.7 65.84C66.96 65.54 66.16 65.42 65.34 65.44C64.82 65.44 64.36 65.44 63.98 65.46C63.58 65.44 63.3 65.46 63.16 65.48V72.2C63.44 72.22 63.7 72.24 63.94 72.24H65C65.78 72.24 66.56 72.12 67.3 71.88C67.94 71.7 68.5 71.32 68.94 70.82C69.36 70.32 69.56 69.64 69.56 68.76C69.58 68.14 69.42 67.52 69.1 66.98C68.76 66.46 68.28 66.06 67.7 65.84ZM87.5 49.6H56.5C51.8 49.6 48 53.4 48 58.1V87.898C48 92.598 51.8 96.398 56.5 96.398H87.5C92.2 96.398 96 92.598 96 87.898V58.1C96 53.4 92.2 49.6 87.5 49.6ZM72.718 72.9C71.92 74.02 70.8 74.86 69.5 75.34C68.14 75.84 66.64 76.02 65 76.02C64.52 76.02 64.2 76.02 64 76C63.8 75.98 63.52 75.98 63.14 75.98V82.398C63.16 82.538 63.06 82.66 62.92 82.68H59.04C58.88 82.68 58.8 82.598 58.8 82.418V61.84C58.8 61.7 58.86 61.62 59 61.62C59.34 61.62 59.66 61.62 60.12 61.6C60.6 61.58 61.1 61.58 61.64 61.56C62.18 61.54 62.76 61.54 63.38 61.52C64 61.5 64.6 61.5 65.2 61.5C66.84 61.5 68.2 61.7 69.32 62.12C70.32 62.46 71.24 63.02 72 63.76C72.64 64.4 73.14 65.18 73.46 66.04C73.758 66.88 73.918 67.74 73.918 68.64C73.92 70.36 73.52 71.78 72.718 72.9ZM86.9 80.68C86.34 81.48 85.558 82.098 84.66 82.462C83.68 82.88 82.48 83.098 81.038 83.098C80.12 83.098 79.218 83.02 78.32 82.84C77.62 82.718 76.92 82.5 76.28 82.2C76.14 82.122 76.038 81.982 76.058 81.822V78.342C76.058 78.284 76.08 78.202 76.14 78.162C76.198 78.122 76.26 78.142 76.32 78.182C77.1 78.642 77.92 78.964 78.8 79.162C79.558 79.362 80.358 79.462 81.16 79.462C81.92 79.462 82.46 79.36 82.82 79.18C83.14 79.04 83.36 78.7 83.36 78.34C83.36 78.058 83.2 77.8 82.88 77.54C82.56 77.282 81.902 76.982 80.922 76.598C79.902 76.238 78.964 75.758 78.082 75.16C77.462 74.718 76.944 74.14 76.56 73.46C76.242 72.82 76.082 72.12 76.102 71.418C76.102 70.558 76.342 69.738 76.784 68.998C77.284 68.198 78.022 67.558 78.882 67.158C79.82 66.68 81 66.46 82.42 66.46C83.24 66.46 84.08 66.52 84.9 66.64C85.5 66.72 86.08 66.88 86.62 67.1C86.698 67.12 86.78 67.2 86.82 67.28C86.84 67.36 86.86 67.44 86.86 67.52V70.78C86.86 70.86 86.82 70.94 86.76 70.98C86.58 71.02 86.48 71.02 86.4 70.98C85.8 70.66 85.16 70.44 84.48 70.3C83.74 70.14 83 70.04 82.24 70.04C81.84 70.02 81.42 70.08 81.038 70.18C80.78 70.24 80.558 70.38 80.418 70.58C80.318 70.74 80.258 70.94 80.258 71.12C80.258 71.3 80.338 71.48 80.46 71.64C80.64 71.86 80.878 72.04 81.14 72.18C81.598 72.42 82.08 72.64 82.558 72.84C83.64 73.2 84.68 73.7 85.64 74.3C86.3 74.718 86.84 75.28 87.218 75.96C87.538 76.596 87.698 77.3 87.678 78.018C87.7 78.96 87.42 79.898 86.9 80.68Z"
              fill="#31A8FF"
            />
          </g>
          <g filter="url(#filter2_f_2211_899)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#1893D1" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2211_899)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2211_899)">
        <circle cx="58" cy="59" r="18" fill="white" fillOpacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2211_899"
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
            result="effect1_backgroundBlur_2211_899"
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
            in2="effect1_backgroundBlur_2211_899"
            result="effect2_dropShadow_2211_899"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2211_899"
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
            result="effect3_innerShadow_2211_899"
          />
        </filter>
        <filter
          id="filter1_f_2211_899"
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
            result="effect1_foregroundBlur_2211_899"
          />
        </filter>
        <filter
          id="filter2_f_2211_899"
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
            result="effect1_foregroundBlur_2211_899"
          />
        </filter>
        <filter
          id="filter3_f_2211_899"
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
            result="effect1_foregroundBlur_2211_899"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2211_899"
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
          id="paint1_linear_2211_899"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2211_899">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2211_899">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(48 49)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Photoshop;
