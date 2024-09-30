import React from "react";

interface Props {
  className?: string;
}

const Tailwind = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2211_827)">
        <g clip-path="url(#clip0_2211_827)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2211_827)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2211_827)"
          >
            <path
              d="M63.5775 97C57.1075 97 51.0763 95.1182 46 91.8712C50.31 92.1501 57.9161 91.4822 62.6472 86.9696C55.5302 86.643 52.3205 81.1846 51.9019 78.8519C52.5066 79.0852 55.3906 79.3651 57.0187 78.712C48.8318 76.6592 47.5759 69.4746 47.855 67.2819C49.39 68.355 51.9949 68.7282 53.0183 68.6349C45.3896 63.1765 48.1341 54.9655 49.483 53.1927C54.9576 60.7773 63.1624 65.0371 73.3128 65.2741C73.1214 64.4347 73.0203 63.5608 73.0203 62.6633C73.0203 56.2218 78.2268 51 84.6494 51C88.0051 51 91.0288 52.4255 93.1514 54.7057C95.3938 54.1802 98.7686 52.9501 100.418 51.8864C99.5868 54.8722 96.9979 57.363 95.4318 58.2862C95.4448 58.3176 95.4191 58.2546 95.4318 58.2862C96.8074 58.0781 100.53 57.3627 102 56.3651C101.273 58.0425 98.528 60.8315 96.2754 62.3928C96.6945 80.8761 82.553 97 63.5775 97Z"
              fill="#00A9FF"
            />
          </g>
          <g clip-path="url(#clip1_2211_827)">
            <path
              d="M72.002 58.6C65.602 58.6 61.602 61.8 60.002 68.2C62.402 65 65.202 63.8 68.402 64.6C70.228 65.056 71.532 66.38 72.978 67.848C75.332 70.236 78.054 73 84.002 73C90.402 73 94.402 69.8 96.002 63.4C93.602 66.6 90.802 67.8 87.602 67C85.776 66.544 84.472 65.22 83.026 63.752C80.674 61.364 77.952 58.6 72.002 58.6ZM60.002 73C53.602 73 49.602 76.2 48.002 82.6C50.402 79.4 53.202 78.2 56.402 79C58.228 79.456 59.532 80.78 60.978 82.248C63.332 84.636 66.054 87.4 72.002 87.4C78.402 87.4 82.402 84.2 84.002 77.8C81.602 81 78.802 82.2 75.602 81.4C73.776 80.944 72.472 79.62 71.026 78.152C68.674 75.764 65.952 73 60.002 73Z"
              fill="#06B6D4"
            />
          </g>
          <g filter="url(#filter2_f_2211_827)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#11B0FF" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2211_827)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2211_827)">
        <circle cx="58" cy="59" r="18" fill="white" fill-opacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2211_827"
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
            result="effect1_backgroundBlur_2211_827"
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
            in2="effect1_backgroundBlur_2211_827"
            result="effect2_dropShadow_2211_827"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2211_827"
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
            values="0 0 0 0 0.0509804 0 0 0 0 0.932 0 0 0 0 0.988235 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2211_827"
          />
        </filter>
        <filter
          id="filter1_f_2211_827"
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
            result="effect1_foregroundBlur_2211_827"
          />
        </filter>
        <filter
          id="filter2_f_2211_827"
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
            result="effect1_foregroundBlur_2211_827"
          />
        </filter>
        <filter
          id="filter3_f_2211_827"
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
            result="effect1_foregroundBlur_2211_827"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2211_827"
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
          id="paint1_linear_2211_827"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2211_827">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2211_827">
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

export default Tailwind;
