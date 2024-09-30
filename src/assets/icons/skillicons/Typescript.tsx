import React from "react";

interface Props {
  className?: string;
}

const Typescript = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 162 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2180_953)">
        <g clip-path="url(#clip0_2180_953)">
          <rect
            x="17"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2180_953)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2180_953)"
          >
            <path
              d="M34.3823 84.9097C31.987 86.5871 32.4306 89.4768 37.8954 91.2839C43.3602 93.0909 49.7121 93.4645 55.301 92.4581C55.1413 92.4581 55.6204 92.4581 55.301 92.4581V86.7548L49.8718 88.6C47.7958 89.271 45.7199 89.4387 43.644 88.9355C42.0472 88.4323 42.3666 87.4258 44.2828 86.5871L55.301 82.5613V76.3548L39.9713 81.8903C38.0551 82.5613 36.1389 83.5677 34.3823 84.9097ZM71.4292 59.7484V76.0194C77.9763 79.3742 83.0862 76.0194 83.0862 67.2968C83.0862 58.4065 80.0522 54.3806 71.2695 51.1935C66.6387 49.5161 61.8481 48.0065 57.0576 47V95.4774L68.2355 99V58.2387C68.2355 56.3935 68.2355 55.0516 69.513 55.5548C71.2695 56.0581 71.4292 57.9032 71.4292 59.7484ZM92.1882 81.0516C87.5574 79.3742 82.6071 78.7032 77.8166 79.2065C75.1559 79.3811 72.6587 80.1738 70.1517 81.0516V87.5935L80.5312 83.5677C82.6071 82.8968 84.683 82.729 86.759 83.2323C88.3558 83.7355 88.0364 84.7419 86.1202 85.5806L70.1517 91.7871V98.1613L92.1882 89.6064C93.7851 88.9355 95.2223 88.0968 96.4997 86.7548C97.6175 85.0774 97.1385 82.729 92.1882 81.0516Z"
              fill="#0070D1"
            />
          </g>
          <g clip-path="url(#clip1_2180_953)">
            <path
              d="M43.25 49C42.004 49 41 50.004 41 51.25V94.75C41 95.996 42.004 97 43.25 97H86.75C87.996 97 89 95.996 89 94.75V51.25C89 50.004 87.996 49 86.75 49H43.25ZM77.976 68.5C79.2 68.5 80.284 68.574 81.23 68.722C82.1223 68.8557 82.9978 69.0836 83.842 69.402V74.318C83.4368 74.0378 83.0062 73.796 82.556 73.596C82.0917 73.3871 81.6123 73.2132 81.122 73.076C80.1932 72.8172 79.2342 72.6827 78.27 72.676C77.67 72.676 77.124 72.732 76.632 72.848C76.1935 72.9418 75.7728 73.1052 75.386 73.332C75.046 73.54 74.786 73.79 74.6 74.08C74.4129 74.3723 74.3156 74.713 74.32 75.06C74.32 75.452 74.426 75.806 74.632 76.118C74.84 76.43 75.136 76.726 75.518 77.006C75.9 77.286 76.364 77.558 76.91 77.826C77.456 78.096 78.074 78.374 78.762 78.658C79.702 79.052 80.546 79.472 81.294 79.914C82.042 80.358 82.684 80.86 83.22 81.42C83.756 81.978 84.164 82.616 84.448 83.334C84.732 84.052 84.876 84.886 84.876 85.84C84.876 87.154 84.626 88.26 84.13 89.152C83.6454 90.0317 82.9499 90.7774 82.106 91.322C81.1964 91.8988 80.1882 92.3029 79.132 92.514C78 92.754 76.806 92.874 75.552 92.874C74.3178 92.8794 73.0858 92.7696 71.872 92.546C70.8219 92.3644 69.8034 92.0323 68.848 91.56V86.3C70.6556 87.8382 72.9485 88.6883 75.322 88.7C75.988 88.7 76.57 88.64 77.066 88.52C77.564 88.4 77.978 88.232 78.312 88.02C78.644 87.804 78.892 87.552 79.058 87.26C79.2415 86.92 79.3249 86.535 79.2987 86.1496C79.2726 85.7642 79.1378 85.394 78.91 85.082C78.6128 84.6888 78.2494 84.3504 77.836 84.082C77.3233 83.7422 76.7835 83.4452 76.222 83.194C75.5565 82.8901 74.885 82.5993 74.208 82.322C72.372 81.556 71.004 80.618 70.102 79.512C69.202 78.406 68.75 77.068 68.75 75.502C68.75 74.274 68.996 73.22 69.488 72.338C69.98 71.456 70.648 70.73 71.496 70.16C72.3929 69.5683 73.3887 69.1422 74.436 68.902C75.596 68.6285 76.7843 68.4936 77.976 68.5ZM47.75 68.876H66.876V73.208H60.012V92.5H54.578V73.208H47.75V68.876Z"
              fill="#3178C6"
            />
          </g>
          <g filter="url(#filter2_f_2180_953)">
            <ellipse cx="66" cy="120" rx="23" ry="13" fill="#0E78D4" />
          </g>
        </g>
        <rect
          x="17"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2180_953)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2180_953"
          x="-23.8"
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
            result="effect1_backgroundBlur_2180_953"
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
            in2="effect1_backgroundBlur_2180_953"
            result="effect2_dropShadow_2180_953"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2180_953"
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
            values="0 0 0 0 0.054902 0 0 0 0 0.470588 0 0 0 0 0.831373 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2180_953"
          />
        </filter>
        <filter
          id="filter1_f_2180_953"
          x="9"
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
            result="effect1_foregroundBlur_2180_953"
          />
        </filter>
        <filter
          id="filter2_f_2180_953"
          x="7"
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
            result="effect1_foregroundBlur_2180_953"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2180_953"
          x1="17"
          y1="25"
          x2="113"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8FBFF" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2180_953"
          x1="19"
          y1="23"
          x2="110"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2180_953">
          <rect x="17" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2180_953">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(41 49)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Typescript;
