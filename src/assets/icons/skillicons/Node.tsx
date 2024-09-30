import React from "react";

interface Props {
  className?: string;
}

const Node = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2211_841)">
        <g clip-path="url(#clip0_2211_841)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2211_841)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2211_841)"
          >
            <circle
              opacity="0.852"
              cx="72"
              cy="73"
              r="28"
              fill="url(#paint1_radial_2211_841)"
            />
            <path
              d="M53.5027 94.0667C53.4645 94.0387 53.4254 94.0033 53.3862 93.9603C52.6614 93.3009 51.4809 92.2609 50.2472 90.6889C49.1818 88.3779 49.7857 84.496 52.4077 79.0151C56.1071 71.2819 62.0262 63.4302 64.4531 60.6451C63.7625 59.8747 61.6238 57.7651 58.5932 55.4896C55.5626 53.2141 53.3548 52.981 52.5853 53.1193C53.2956 52.3489 54.9529 50.8971 56.3439 49.9193C60.653 47.786 68.6162 51.3909 72.0295 53.4452V67.5783C63.3284 74.2744 55.2785 84.615 53.6507 88.6445C52.4084 91.7201 52.8995 93.4257 53.3862 93.9603C53.4265 93.9969 53.4654 94.0324 53.5027 94.0667Z"
              fill="url(#paint2_linear_2211_841)"
            />
            <path
              d="M53.5027 94.0661C53.4645 94.0381 53.4254 94.0027 53.3862 93.9597C52.6614 93.3003 51.4809 92.2603 50.2472 90.6884C49.1818 88.3773 49.7857 84.4954 52.4077 79.0145C56.7027 70.0364 64.4531 60.6445 64.4531 60.6445C64.4531 60.6445 65.8369 64.0809 68.9777 70.0364C60.8888 77.2068 55.2785 84.6144 53.6507 88.6439C52.4084 91.7194 52.8995 93.4251 53.3862 93.9597C53.4265 93.9963 53.4654 94.0318 53.5027 94.0661Z"
              fill="url(#paint3_linear_2211_841)"
            />
            <path
              d="M90.5563 94.0667C90.5945 94.0387 90.6337 94.0033 90.6728 93.9603C91.3976 93.3009 92.5782 92.2609 93.8118 90.6889C94.8773 88.3779 94.2733 84.496 91.6514 79.0151C87.9519 71.2819 82.0328 63.4302 79.606 60.6451C80.2966 59.8747 82.4353 57.7651 85.4659 55.4896C88.4965 53.2141 90.7043 52.981 91.4738 53.1193C90.7635 52.3489 89.1062 50.8971 87.7152 49.9193C83.4061 47.786 75.4429 51.3909 72.0296 53.4452V67.5783C80.7306 74.2744 88.7806 84.615 90.4084 88.6445C91.6507 91.7201 91.1596 93.4257 90.6728 93.9603C90.6326 93.9969 90.5937 94.0324 90.5563 94.0667Z"
              fill="url(#paint4_linear_2211_841)"
            />
            <path
              d="M90.5563 94.0661C90.5945 94.0381 90.6337 94.0027 90.6729 93.9597C91.3976 93.3003 92.5782 92.2603 93.8118 90.6884C94.8773 88.3773 94.2733 84.4954 91.6514 79.0145C87.3564 70.0364 79.606 60.6445 79.606 60.6445C79.606 60.6445 78.2221 64.0809 75.0814 70.0364C83.1703 77.2068 88.7806 84.6144 90.4084 88.6439C91.6507 91.7194 91.1596 93.4251 90.6729 93.9597C90.6326 93.9963 90.5937 94.0318 90.5563 94.0661Z"
              fill="url(#paint5_linear_2211_841)"
            />
          </g>
          <g clip-path="url(#clip1_2211_841)">
            <path
              d="M71.9961 97C71.3541 97 70.7141 96.832 70.1521 96.506L64.2801 93.032C63.4041 92.542 63.8321 92.368 64.1201 92.266C65.2901 91.86 65.5261 91.766 66.7761 91.058C66.9061 90.984 67.0781 91.012 67.2121 91.092L71.7241 93.77C71.8881 93.86 72.1181 93.86 72.2681 93.77L89.8581 83.618C90.0221 83.524 90.1261 83.336 90.1261 83.142V62.842C90.1261 62.644 90.0201 62.458 89.8521 62.358L72.2701 52.214C72.1081 52.12 71.8921 52.12 71.7281 52.214L54.1501 62.36C53.9801 62.458 53.8721 62.65 53.8721 62.842V83.142C53.8721 83.336 53.9801 83.52 54.1501 83.612L58.9681 86.396C61.5821 87.704 63.1841 86.164 63.1841 84.616V64.574C63.1841 64.29 63.4121 64.068 63.6961 64.068H65.9261C66.2041 64.068 66.4361 64.292 66.4361 64.574V84.616C66.4361 88.106 64.5361 90.106 61.2281 90.106C60.2121 90.106 59.4101 90.106 57.1761 89.004L52.5601 86.35C51.4201 85.692 50.7161 84.46 50.7161 83.142V62.842C50.7161 61.524 51.4221 60.292 52.5601 59.636L70.1501 49.472C71.2641 48.842 72.7421 48.842 73.8461 49.472L91.4341 59.636C92.5741 60.294 93.2821 61.524 93.2821 62.842V83.142C93.2821 84.46 92.5741 85.688 91.4341 86.35L73.8461 96.506C73.2861 96.832 72.6481 97 71.9961 97ZM86.1981 76.986C86.1981 73.186 83.6301 72.174 78.2241 71.46C72.7621 70.738 72.2061 70.364 72.2061 69.086C72.2061 68.03 72.6761 66.62 76.7221 66.62C80.3361 66.62 81.6681 67.398 82.2161 69.834C82.2641 70.064 82.4741 70.232 82.7101 70.232H84.9921C85.1341 70.232 85.2681 70.17 85.3641 70.07C85.4601 69.962 85.5121 69.824 85.4981 69.678C85.1441 65.482 82.3561 63.526 76.7221 63.526C71.7061 63.526 68.7141 65.642 68.7141 69.192C68.7141 73.042 71.6901 74.106 76.5041 74.582C82.2641 75.146 82.7101 75.988 82.7101 77.12C82.7101 79.086 81.1321 79.924 77.4261 79.924C72.7721 79.924 71.7481 78.756 71.4041 76.44C71.3641 76.192 71.1521 76.01 70.8981 76.01H68.6241C68.3421 76.01 68.1161 76.234 68.1161 76.516C68.1161 79.48 69.7281 83.012 77.4261 83.012C83.0021 83.014 86.1981 80.82 86.1981 76.986Z"
              fill="#5FA04E"
            />
          </g>
          <g filter="url(#filter2_f_2211_841)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#61BC2D" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint6_linear_2211_841)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2211_841)">
        <circle cx="58" cy="59" r="18" fill="white" fillOpacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2211_841"
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
            result="effect1_backgroundBlur_2211_841"
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
            in2="effect1_backgroundBlur_2211_841"
            result="effect2_dropShadow_2211_841"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2211_841"
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
            values="0 0 0 0 0.380392 0 0 0 0 0.737255 0 0 0 0 0.176471 0 0 0 0.36 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2211_841"
          />
        </filter>
        <filter
          id="filter1_f_2211_841"
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
            result="effect1_foregroundBlur_2211_841"
          />
        </filter>
        <filter
          id="filter2_f_2211_841"
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
            result="effect1_foregroundBlur_2211_841"
          />
        </filter>
        <filter
          id="filter3_f_2211_841"
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
            result="effect1_foregroundBlur_2211_841"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2211_841"
          x1="24"
          y1="25"
          x2="120"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8FBFF" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_2211_841"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72 70) rotate(90.0548) scale(31)"
        >
          <stop stop-color="#FAFAFA" />
          <stop offset="0.499976" stop-color="#EFEFEF" />
          <stop offset="0.828794" stop-color="#C0BEC0" />
          <stop offset="1" stop-color="#879288" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_2211_841"
          x1="65.9851"
          y1="50.4518"
          x2="66.4592"
          y2="66.5704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#008B00" />
          <stop offset="1" stop-color="#6CC329" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2211_841"
          x1="60.2962"
          y1="66.3334"
          x2="65.748"
          y2="73.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#008C00" />
          <stop offset="1" stop-color="#48BF21" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2211_841"
          x1="78.074"
          y1="50.4518"
          x2="77.5999"
          y2="66.5704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#008B00" />
          <stop offset="1" stop-color="#6CC329" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2211_841"
          x1="83.7629"
          y1="66.3334"
          x2="78.311"
          y2="73.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#008C00" />
          <stop offset="1" stop-color="#48BF21" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2211_841"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2211_841">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2211_841">
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

export default Node;
