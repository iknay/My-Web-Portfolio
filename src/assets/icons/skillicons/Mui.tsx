import React from "react";

interface Props {
  className?: string;
}

const Mui = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 162 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2194_870)">
        <g clip-path="url(#clip0_2194_870)">
          <rect
            x="17"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2194_870)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2194_870)"
          >
            <path
              d="M34.3823 84.9097C31.987 86.5871 32.4306 89.4768 37.8954 91.2839C43.3602 93.0909 49.7121 93.4645 55.301 92.4581C55.1413 92.4581 55.6204 92.4581 55.301 92.4581V86.7548L49.8718 88.6C47.7958 89.271 45.7199 89.4387 43.644 88.9355C42.0472 88.4323 42.3666 87.4258 44.2828 86.5871L55.301 82.5613V76.3548L39.9713 81.8903C38.0551 82.5613 36.1389 83.5677 34.3823 84.9097ZM71.4292 59.7484V76.0194C77.9763 79.3742 83.0862 76.0194 83.0862 67.2968C83.0862 58.4065 80.0522 54.3806 71.2695 51.1935C66.6387 49.5161 61.8481 48.0065 57.0576 47V95.4774L68.2355 99V58.2387C68.2355 56.3935 68.2355 55.0516 69.513 55.5548C71.2695 56.0581 71.4292 57.9032 71.4292 59.7484ZM92.1882 81.0516C87.5574 79.3742 82.6071 78.7032 77.8166 79.2065C75.1559 79.3811 72.6587 80.1738 70.1517 81.0516V87.5935L80.5312 83.5677C82.6071 82.8968 84.683 82.729 86.7589 83.2323C88.3558 83.7355 88.0364 84.7419 86.1202 85.5806L70.1517 91.7871V98.1613L92.1882 89.6064C93.7851 88.9355 95.2223 88.0968 96.4997 86.7548C97.6175 85.0774 97.1385 82.729 92.1882 81.0516Z"
              fill="#0070D1"
            />
          </g>
          <g clip-path="url(#clip1_2194_870)">
            <path
              d="M81.458 80.586C81.6605 80.4696 81.8288 80.302 81.946 80.1C82.0634 79.8976 82.1255 79.6679 82.126 79.434L82.15 71.718C82.1505 71.484 82.2126 71.2543 82.33 71.052C82.4478 70.8497 82.6168 70.6821 82.82 70.566L87 68.16C87.2028 68.044 87.4324 67.9833 87.666 67.984C87.8999 67.9845 88.1296 68.0466 88.332 68.164C88.5344 68.2805 88.7027 68.4481 88.82 68.65C88.9368 68.8525 88.9981 69.0822 88.998 69.316V83.344C88.9978 83.5786 88.9358 83.8089 88.8182 84.0119C88.7005 84.2149 88.5315 84.3832 88.328 84.5L72.542 93.568C72.3405 93.6834 72.1123 93.7441 71.88 93.7441C71.6478 93.7441 71.4195 93.6834 71.218 93.568L58.83 86.484C58.6259 86.3675 58.4562 86.1991 58.338 85.996C58.22 85.7924 58.1579 85.5613 58.158 85.326V78.252C58.158 78.244 58.166 78.24 58.174 78.244C58.182 78.248 58.19 78.244 58.19 78.234V78.226C58.19 78.22 58.194 78.216 58.198 78.212L68.402 72.352C68.41 72.346 68.406 72.332 68.396 72.332C68.3945 72.332 68.3929 72.3316 68.3915 72.3309C68.3901 72.3302 68.3889 72.3292 68.388 72.328C68.3871 72.3269 68.3865 72.3256 68.3861 72.3242C68.3858 72.3228 68.3857 72.3214 68.386 72.32L68.406 65.386C68.4069 65.1511 68.3458 64.9202 68.2289 64.7165C68.112 64.5128 67.9433 64.3436 67.74 64.226C67.5372 64.1089 67.3072 64.0473 67.073 64.0473C66.8388 64.0473 66.6088 64.1089 66.406 64.226L58.824 68.598C58.6217 68.7143 58.3924 68.7755 58.159 68.7755C57.9256 68.7755 57.6963 68.7143 57.494 68.598L49.886 64.218C49.6834 64.1017 49.4538 64.0407 49.2202 64.041C48.9865 64.0413 48.7571 64.103 48.5548 64.2198C48.3525 64.3367 48.1844 64.5046 48.0674 64.7068C47.9504 64.909 47.8885 65.1384 47.888 65.372V77.906C47.8881 78.1396 47.8268 78.3692 47.7103 78.5717C47.5937 78.7743 47.4261 78.9426 47.224 79.06C47.0223 79.1771 46.7933 79.2392 46.56 79.24C46.3264 79.2406 46.0968 79.1799 45.894 79.064L41.672 76.65C41.4679 76.5335 41.2982 76.3651 41.18 76.162C41.0616 75.9578 40.9995 75.726 41 75.49L41.038 53.584C41.0387 53.3506 41.1006 53.1216 41.2176 52.9197C41.3345 52.7178 41.5023 52.55 41.7043 52.4332C41.9063 52.3165 42.1354 52.2547 42.3687 52.2541C42.602 52.2536 42.8314 52.3142 43.034 52.43L57.494 60.736C57.6963 60.8523 57.9256 60.9135 58.159 60.9135C58.3924 60.9135 58.6217 60.8523 58.824 60.736L73.28 52.43C73.4827 52.3139 73.7124 52.2532 73.946 52.254C74.18 52.2544 74.4097 52.3165 74.612 52.434C74.8147 52.551 74.983 52.7193 75.1 52.922C75.216 53.1247 75.2767 53.3544 75.276 53.588V75.5C75.276 75.734 75.216 75.964 75.098 76.168C74.9804 76.3709 74.8114 76.5392 74.608 76.656L67.038 81.016C66.8344 81.1333 66.6653 81.3023 66.548 81.506C66.4309 81.7091 66.3695 81.9395 66.37 82.174C66.3702 82.4086 66.4323 82.639 66.55 82.842C66.6686 83.0455 66.8391 83.2138 67.044 83.33L71.22 85.708C71.4213 85.822 71.6487 85.8819 71.88 85.882C72.1131 85.8817 72.342 85.8203 72.544 85.704L81.458 80.584V80.586ZM82.334 60.93C82.3338 61.1653 82.3959 61.3965 82.514 61.6C82.6332 61.8037 82.8044 61.9721 83.01 62.088C83.2149 62.2038 83.4468 62.2633 83.6822 62.2604C83.9175 62.2576 84.1479 62.1926 84.35 62.072L88.352 59.672C88.5493 59.5536 88.7126 59.3862 88.826 59.186C88.9399 58.9854 88.9999 58.7587 89 58.528V53.64C88.9995 53.4045 88.9367 53.1733 88.818 52.97C88.699 52.7666 88.5282 52.5984 88.323 52.4825C88.1178 52.3665 87.8856 52.307 87.65 52.31C87.4147 52.3126 87.1842 52.3775 86.982 52.498L82.982 54.898C82.7839 55.016 82.6199 55.1835 82.506 55.384C82.3929 55.5848 82.3336 55.8115 82.334 56.042V60.93Z"
              fill="#007FFF"
            />
          </g>
          <g filter="url(#filter2_f_2194_870)">
            <ellipse cx="66" cy="120" rx="23" ry="13" fill="#0E78D4" />
          </g>
        </g>
        <rect
          x="17"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2194_870)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2194_870"
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
            result="effect1_backgroundBlur_2194_870"
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
            in2="effect1_backgroundBlur_2194_870"
            result="effect2_dropShadow_2194_870"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2194_870"
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
            result="effect3_innerShadow_2194_870"
          />
        </filter>
        <filter
          id="filter1_f_2194_870"
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
            result="effect1_foregroundBlur_2194_870"
          />
        </filter>
        <filter
          id="filter2_f_2194_870"
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
            result="effect1_foregroundBlur_2194_870"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2194_870"
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
          id="paint1_linear_2194_870"
          x1="19"
          y1="23"
          x2="110"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2194_870">
          <rect x="17" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2194_870">
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

export default Mui;
