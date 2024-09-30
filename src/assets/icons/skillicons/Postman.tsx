import React from "react";

interface Props {
  className?: string;
}

const Postman = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169 162"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_bdi_2194_857)">
        <g clip-path="url(#clip0_2194_857)">
          <rect
            x="24"
            y="25"
            width="96"
            height="96"
            rx="24"
            fill="url(#paint0_linear_2194_857)"
            fill-opacity="0.04"
            shape-rendering="crispEdges"
          />
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            opacity="0.5"
            filter="url(#filter1_f_2194_857)"
          >
            <path
              d="M72 45C56.5562 45 44 57.5562 44 73C44 88.4437 56.5562 101 72 101C87.4437 101 100 88.4437 100 73C100 57.5562 87.4437 45 72 45Z"
              fill="#FC471E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M80.0385 58.819C80.0132 58.9797 80 59.1445 80 59.3125C80 61.0086 81.3431 62.3836 83 62.3836C84.6569 62.3836 86 61.0086 86 59.3125C86 57.6164 84.6569 56.2414 83 56.2414C82.2617 56.2414 81.5857 56.5144 81.0631 56.9672L73.2724 55L70.4566 66.5302C66.7108 66.7825 63.342 67.9438 60.8006 69.697C60.079 68.9726 59.0905 68.5259 58 68.5259C55.7909 68.5259 54 70.3592 54 72.6207C54 74.1945 54.8673 75.561 56.1393 76.2465C56.0474 76.7349 56 77.2332 56 77.7392C56 83.9584 63.1634 89 72 89C80.8366 89 88 83.9584 88 77.7392C88 77.2332 87.9526 76.7349 87.8607 76.2465C89.1327 75.561 90 74.1945 90 72.6207C90 70.3592 88.2091 68.5259 86 68.5259C84.9095 68.5259 83.921 68.9726 83.1994 69.697C80.4307 67.7869 76.6798 66.5795 72.5293 66.4845L74.7276 57.4829L80.0385 58.819ZM65 78.7629C66.6569 78.7629 68 77.3879 68 75.6918C68 73.9957 66.6569 72.6207 65 72.6207C63.3431 72.6207 62 73.9957 62 75.6918C62 77.3879 63.3431 78.7629 65 78.7629ZM79 78.7629C80.6569 78.7629 82 77.3879 82 75.6918C82 73.9957 80.6569 72.6207 79 72.6207C77.3431 72.6207 76 73.9957 76 75.6918C76 77.3879 77.3431 78.7629 79 78.7629ZM65.5547 82.006C65.0952 81.6924 64.4743 81.8195 64.1679 82.2899C63.8616 82.7603 63.9858 83.3959 64.4453 83.7095C66.6215 85.1947 69.3107 85.9373 72 85.9373C74.6893 85.9373 77.3785 85.1947 79.5547 83.7095C80.0142 83.3959 80.1384 82.7603 79.8321 82.2899C79.5257 81.8195 78.9048 81.6924 78.4453 82.006C76.605 83.2619 74.3025 83.8899 72 83.8899C70.6345 83.8899 69.2691 83.669 68 83.2273C67.1291 82.9242 66.3036 82.5171 65.5547 82.006Z"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip1_2194_857)">
            <path
              d="M75.0537 49.1976C61.9097 47.5116 49.8837 56.7996 48.1977 69.9456C46.5117 83.0896 55.7977 95.1136 68.9437 96.8016C82.0897 98.4876 94.1177 89.1996 95.7997 76.0536C97.4877 62.9096 88.2017 50.8856 75.0537 49.1976ZM79.9957 64.1676C79.5503 64.1735 79.1248 64.3529 78.8097 64.6676L69.9037 73.5736L69.2897 72.9596L68.0037 71.6736C76.7817 62.9216 78.3637 62.8376 79.9957 64.1676ZM70.2697 73.8896L79.1497 65.0096C79.2661 64.8876 79.4061 64.7905 79.5613 64.7244C79.7165 64.6584 79.8835 64.6246 80.0522 64.6253C80.2208 64.626 80.3876 64.6611 80.5422 64.7285C80.6968 64.7958 80.8361 64.894 80.9515 65.017C81.0669 65.14 81.156 65.2853 81.2133 65.4439C81.2706 65.6025 81.295 65.7712 81.2849 65.9395C81.2748 66.1079 81.2304 66.2724 81.1546 66.4231C81.0787 66.5737 80.9729 66.7073 80.8437 66.8156L71.4457 75.0656L70.2697 73.8896ZM70.9297 75.2776L68.7297 75.7536C68.7034 75.7595 68.6759 75.7564 68.6516 75.7448C68.6273 75.7332 68.6076 75.7138 68.5957 75.6896C68.5823 75.6665 68.577 75.6396 68.5806 75.6132C68.5842 75.5868 68.5966 75.5623 68.6157 75.5436L69.9057 74.2536L70.9297 75.2776ZM65.3237 74.3596L67.6677 72.0156L69.4257 73.7716L65.4677 74.6236C65.4347 74.6322 65.3997 74.6291 65.3688 74.6149C65.3378 74.6007 65.3127 74.5762 65.2977 74.5456C65.279 74.5166 65.2714 74.4819 65.2762 74.4478C65.2809 74.4137 65.2978 74.3824 65.3237 74.3596ZM58.0317 86.4756C58.0117 86.4739 57.9922 86.4682 57.9744 86.4589C57.9567 86.4496 57.9409 86.4368 57.9281 86.4214C57.9152 86.4059 57.9056 86.3881 57.8997 86.3689C57.8938 86.3498 57.8917 86.3296 57.8937 86.3096C57.8975 86.2749 57.913 86.2424 57.9377 86.2176H57.9417L59.8337 84.3256L62.2777 86.7696L58.0317 86.4756ZM62.8817 83.9636C62.791 84.0105 62.7186 84.0864 62.6762 84.1792C62.6338 84.272 62.6237 84.3764 62.6477 84.4756L63.0537 86.2056C63.0668 86.2589 63.062 86.3151 63.04 86.3654C63.018 86.4157 62.9801 86.4574 62.9321 86.484C62.8841 86.5106 62.8287 86.5207 62.7744 86.5127C62.7201 86.5047 62.6699 86.479 62.6317 86.4396H62.6257L60.7577 84.5716L60.1697 83.9816L67.6937 76.4656L71.3337 75.6796L73.0817 77.4276C70.5717 79.6316 67.1397 81.8296 62.8817 83.9636ZM73.4397 77.1076H73.4357L71.7577 75.4296L81.1557 67.1796C81.2426 67.1024 81.3223 67.0174 81.3937 66.9256C81.0977 69.6156 77.3357 73.4156 73.4397 77.1076ZM80.7537 64.1876L80.7477 64.1836C80.0864 63.5192 79.7066 62.6256 79.6873 61.6884C79.6679 60.7512 80.0104 59.8426 80.6436 59.1514C81.2768 58.4603 82.1521 58.0397 83.0873 57.9772C84.0226 57.9146 84.9461 58.2149 85.6657 58.8156L82.4457 62.0416C82.4233 62.0638 82.4056 62.0901 82.3936 62.1191C82.3815 62.1481 82.3752 62.1792 82.3752 62.2106C82.3752 62.242 82.3815 62.2732 82.3936 62.3022C82.4056 62.3312 82.4233 62.3575 82.4457 62.3796L84.9397 64.8736C84.258 65.212 83.4872 65.3278 82.7362 65.2048C81.9851 65.0817 81.2917 64.7259 80.7537 64.1876ZM85.9097 64.1876C85.7442 64.351 85.5626 64.497 85.3677 64.6236L82.9517 62.2096L86.0177 59.1436C87.3397 60.5836 87.2917 62.8076 85.9097 64.1876ZM85.7097 61.0996C85.6616 61.1345 85.6255 61.1834 85.6065 61.2397C85.5876 61.296 85.5865 61.3568 85.6037 61.4136C85.6749 61.5578 85.7028 61.7196 85.6839 61.8793C85.6651 62.0391 85.6004 62.1899 85.4977 62.3136C85.4748 62.3425 85.4578 62.3756 85.4477 62.411C85.4376 62.4465 85.4346 62.4836 85.4389 62.5202C85.4431 62.5568 85.4546 62.5922 85.4726 62.6243C85.4906 62.6565 85.5147 62.6848 85.5437 62.7076C85.5917 62.7453 85.6506 62.7663 85.7117 62.7676C85.7521 62.7673 85.792 62.7581 85.8286 62.7409C85.8652 62.7236 85.8976 62.6986 85.9237 62.6676C86.0954 62.4612 86.2034 62.2093 86.2343 61.9425C86.2652 61.6758 86.2177 61.4058 86.0977 61.1656C86.0767 61.1356 86.05 61.11 86.0191 61.0904C85.9881 61.0707 85.9536 61.0575 85.9175 61.0513C85.8814 61.0452 85.8444 61.0463 85.8087 61.0546C85.773 61.0629 85.7394 61.0782 85.7097 61.0996Z"
              fill="#FF6C37"
            />
          </g>
          <g filter="url(#filter2_f_2194_857)">
            <ellipse cx="73" cy="120" rx="23" ry="13" fill="#FF4115" />
          </g>
        </g>
        <rect
          x="24"
          y="25"
          width="96"
          height="96"
          rx="24"
          stroke="url(#paint1_linear_2194_857)"
          stroke-opacity="0.5"
          stroke-width="1.6"
          shape-rendering="crispEdges"
        />
      </g>
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter3_f_2194_857)">
        <circle cx="58" cy="59" r="18" fill="white" fill-opacity="0.18" />
      </g>
      <defs>
        <filter
          id="filter0_bdi_2194_857"
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
            result="effect1_backgroundBlur_2194_857"
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
            in2="effect1_backgroundBlur_2194_857"
            result="effect2_dropShadow_2194_857"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2194_857"
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
            values="0 0 0 0 0.988235 0 0 0 0 0.219686 0 0 0 0 0.0509804 0 0 0 0.32 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2194_857"
          />
        </filter>
        <filter
          id="filter1_f_2194_857"
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
            result="effect1_foregroundBlur_2194_857"
          />
        </filter>
        <filter
          id="filter2_f_2194_857"
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
            result="effect1_foregroundBlur_2194_857"
          />
        </filter>
        <filter
          id="filter3_f_2194_857"
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
            result="effect1_foregroundBlur_2194_857"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2194_857"
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
          id="paint1_linear_2194_857"
          x1="26"
          y1="23"
          x2="117"
          y2="121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D8D8D8" stop-opacity="0.05" />
          <stop offset="1" stop-color="white" stop-opacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_2194_857">
          <rect x="24" y="25" width="96" height="96" rx="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2194_857">
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

export default Postman;
