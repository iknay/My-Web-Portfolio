import React from "react";

interface Props {
  className?: string;
}

const Git = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2211_912)">
        <g clip-path="url(#clip0_2211_912)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2211_912)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2211_912)"
          >
            <path
              d="M44.489 60.8822C44.7461 56.9247 47.9279 53.8231 51.8889 53.6269C57.6248 53.3427 65.8229 53 72 53C78.1771 53 86.3752 53.3427 92.1111 53.6269C96.0721 53.8231 99.2539 56.9247 99.511 60.8822C99.7573 64.6739 100 69.3393 100 73C100 76.6607 99.7573 81.3262 99.511 85.1178C99.2539 89.0753 96.0721 92.1769 92.1111 92.3731C86.3752 92.6573 78.1771 93 72 93C65.8229 93 57.6248 92.6573 51.8889 92.3731C47.9279 92.1769 44.7461 89.0753 44.489 85.1178C44.2427 81.3261 44 76.6607 44 73C44 69.3393 44.2427 64.6739 44.489 60.8822Z"
              fill="#FC0D1B"
            />
            <path d="M66 65V81L82 73L66 65Z" fill="white" />
          </g>
          <g clip-path="url(#clip1_2211_912)">
            <path
              d="M95.092 70.86L74.134 49.904C72.926 48.698 70.97 48.698 69.758 49.904L65.416 54.254L70.936 59.774C72.226 59.344 73.694 59.634 74.714 60.656C75.746 61.686 76.03 63.172 75.59 64.456L80.906 69.776C82.196 69.33 83.68 69.62 84.706 70.646C86.148 72.086 86.148 74.414 84.706 75.854C83.268 77.292 80.944 77.292 79.506 75.854C78.428 74.772 78.158 73.18 78.698 71.862L73.72 66.91V79.96C74.072 80.132 74.404 80.366 74.696 80.656C76.122 82.098 76.122 84.422 74.696 85.856C73.258 87.298 70.918 87.298 69.478 85.856C68.04 84.418 68.04 82.098 69.478 80.66C69.842 80.3 70.252 80.028 70.688 79.848V66.67C70.254 66.488 69.84 66.226 69.488 65.868C68.398 64.778 68.136 63.184 68.696 61.85L63.272 56.4L48.9 70.762C47.7 71.972 47.7 73.93 48.9 75.14L69.86 96.094C71.068 97.302 73.024 97.302 74.232 96.094L95.092 75.234C96.302 74.028 96.302 72.07 95.092 70.86Z"
              fill="#F05032"
            />
          </g>
          <g filter="url(#filter2_f_2211_912)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#FC0D1B" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2211_912)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2211_912)">
        <circle cx="58" cy="59" r="18" fill="white" fillOpacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2211_912"
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
            result="effect1_backgroundBlur_2211_912"
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
            in2="effect1_backgroundBlur_2211_912"
            result="effect2_dropShadow_2211_912"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2211_912"
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
            values="0 0 0 0 0.988235 0 0 0 0 0.0509804 0 0 0 0 0.105882 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2211_912"
          />
        </filter>
        <filter
          id="filter1_f_2211_912"
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
            result="effect1_foregroundBlur_2211_912"
          />
        </filter>
        <filter
          id="filter2_f_2211_912"
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
            result="effect1_foregroundBlur_2211_912"
          />
        </filter>
        <filter
          id="filter3_f_2211_912"
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
            result="effect1_foregroundBlur_2211_912"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2211_912"
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
          id="paint1_linear_2211_912"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2211_912">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2211_912">
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

export default Git;
