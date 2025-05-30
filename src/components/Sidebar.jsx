"use client";
import React from "react";

export default function Sidebar() {
  return (
    <aside
      className="sidebar-container"
      role="navigation"
      aria-label="Main navigation"
    >
      <nav className="sidebar-nav">
        <button className="nav-item" aria-label="Navigation item 1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c97865eb1d275d8c8f0b4ff29d589a3536c797?placeholderIfAbsent=true"
            alt="Group"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb16e841efdc298648ff00d9419ec6a16439ae0?placeholderIfAbsent=true"
            alt="Group"
            className="nav-icon"
          />
        </button>

        <button
          className="nav-item nav-item-active"
          aria-label="Active navigation item"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg"> <path d="M13.544 2.56659L13.0243 3.10873V3.10748C12.98 3.15268 12.92 3.18226 12.8519 3.18351L10.7475 3.22997C10.3688 3.25271 9.75309 3.41231 9.48316 3.58363L9.4819 3.58237L9.42875 3.62311L7.87306 5.17879C7.22545 5.8264 8.19184 7.31595 9.72465 5.84762C10.6203 4.98797 11.6827 5.44847 12.5434 6.30369L14.8382 8.5837L16.8586 6.93734L17.3758 6.39898L13.544 2.56659ZM17.8105 6.13839C17.8469 6.14844 17.882 6.16797 17.9101 6.19643C17.9417 6.22726 17.9632 6.26437 17.9756 6.30288L18.1333 6.46053C18.2661 6.59459 18.4861 6.59459 18.6185 6.46053L19.8998 5.18052C20.0334 5.04645 20.0334 4.82686 19.8998 4.69405L15.433 0.226526C15.2993 0.0928757 15.0801 0.0928757 14.9465 0.226526L13.6665 1.50653C13.5997 1.57336 13.5656 1.66167 13.5656 1.75012C13.5656 1.8249 13.5896 1.89855 13.6372 1.96091C13.6723 1.97096 13.704 1.99049 13.7312 2.01658C13.7629 2.04741 13.7844 2.08452 13.7968 2.12303L17.8105 6.13839ZM6.33468 1.38087L5.05343 0.0996113C4.92061 -0.0332038 4.70061 -0.0332038 4.56821 0.0996113L0.0996113 4.56714C-0.0332038 4.70079 -0.0332038 4.92079 0.0996113 5.0536L1.38087 6.33486C1.51368 6.46768 1.73369 6.46768 1.86734 6.33486L6.33486 1.86662C6.46753 1.73367 6.46753 1.51366 6.33472 1.38083L6.33468 1.38087ZM6.31752 2.57855L2.46214 6.435L4.17212 8.75505C5.19737 9.76302 5.76295 10.3502 6.37288 10.9843C6.87053 11.5014 7.39885 12.0503 8.28696 12.9378C8.67132 13.3222 9.15332 13.3402 9.51743 13.0775C9.6183 13.0051 9.69977 12.9155 9.75348 12.8191C9.82715 12.6843 9.84068 12.5323 9.76144 12.4211L8.24429 10.9686C8.14663 10.8746 8.14342 10.719 8.23745 10.6218C8.33148 10.5242 8.48703 10.5222 8.58427 10.615L10.3079 12.2658C10.3171 12.2738 10.3251 12.2825 10.3328 12.293L10.6695 12.5923C11.0607 12.9335 11.6831 12.5479 11.866 12.1546C11.9444 11.9858 11.942 11.801 11.7991 11.6559L10.0755 10.007C9.97783 9.91296 9.97588 9.75741 10.0687 9.66017C10.1627 9.56251 10.3182 9.55931 10.4155 9.65334L12.1398 11.3029C12.6578 11.8085 13.6454 10.7701 13.1854 10.2949L13.1614 10.2701L11.4371 8.62053C11.3394 8.5265 11.3375 8.37095 11.4315 8.27371C11.5243 8.17606 11.68 8.17285 11.7775 8.26688L13.5018 9.91771C13.5074 9.92217 13.5123 9.92692 13.5179 9.9325C14.0179 10.4312 14.9635 9.40653 14.5894 9.02888L12.1983 6.6533C11.5371 5.99565 10.7422 5.55326 10.0642 6.20323C9.31138 6.92562 8.6162 7.06609 8.0993 6.9108C7.21048 6.64322 6.85333 5.50594 7.52691 4.8324L8.83091 3.52839L6.99733 3.18352C6.9453 3.17794 6.89298 3.15395 6.8521 3.11307L6.31752 2.57855Z" fill="white"></path> </svg>',
            }}
          />
          <div className="nav-indicator"></div>
        </button>

        <button className="nav-item" aria-label="Navigation item 4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d0d1cfb50ac2b7b19411d5602bab255a006f40e?placeholderIfAbsent=true"
            alt="Group 18944"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/027728246e2670e4b13b201a25451952d9e6744a?placeholderIfAbsent=true"
            alt="Group"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Phone">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg"> <path d="M7.69239 5.57595C9.04372 3.26629 11.5675 1.71541 14.4569 1.71541C18.7692 1.71541 22.2651 5.17167 22.2651 9.43501C22.2651 12.2915 20.6965 14.7865 18.3604 16.1226C17.9456 16.3599 17.8038 16.8845 18.0437 17.2945C18.2839 17.7047 18.8144 17.8447 19.2292 17.6075C22.0793 15.9774 24.0002 12.9287 24.0002 9.43484C24.0002 4.22396 19.7276 0 14.4571 0C10.9236 0 7.83958 1.89907 6.19095 4.71693C5.95103 5.12694 6.0928 5.65175 6.50759 5.889C6.92218 6.12605 7.45293 5.986 7.69283 5.576L7.69239 5.57595Z" fill="white"></path> <path d="M2.10458 5.85318C3.07133 4.90323 4.63312 4.91606 5.59585 5.86198L7.69735 7.92694C8.63922 8.8524 8.68957 10.3459 7.79263 11.321L6.87751 12.3158C6.65921 12.553 6.63223 12.8821 6.7828 13.1256C7.94948 15.0113 9.02741 16.0804 10.9778 17.247C11.2307 17.3983 11.5726 17.3698 11.8159 17.1536L12.8282 16.2544C13.8166 15.3762 15.3279 15.425 16.2671 16.348L18.3495 18.3942C19.3257 19.3533 19.3388 20.9139 18.3587 21.877C16.0702 24.1256 12.4136 24.7719 9.67078 22.9176C6.31649 20.6497 3.70366 18.0404 1.17242 14.4624C-0.757116 11.735 -0.206836 8.12398 2.10414 5.85331L2.10458 5.85318Z" fill="white"></path> <path d="M14.7502 3.85974C15.2293 3.85974 15.6177 4.24373 15.6177 4.71746V7.9491C16.1363 8.24566 16.4853 8.80012 16.4853 9.43493C16.4853 10.3826 15.7084 11.1505 14.75 11.1505C13.7919 11.1505 13.015 10.3825 13.015 9.43493C13.015 9.33545 13.0235 9.23768 13.0399 9.14259L11.592 7.9497C11.2239 7.64645 11.1742 7.1056 11.4808 6.74168C11.7877 6.37778 12.3347 6.32861 12.7028 6.63186L13.8825 7.6038V4.71746C13.8825 4.24374 14.2709 3.85974 14.7502 3.85974Z" fill="white"></path> </svg>',
            }}
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 7">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12ccac1b392ca3278c7df4eb9ffdc938355cd4e0?placeholderIfAbsent=true"
            alt="Group"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a2d30356803c4b71ea9030ca13ecef84ac9f392?placeholderIfAbsent=true"
            alt="Group"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Exchange">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg exchange-icon"> <path d="M7.39996 16L6 14.6L4.70007 16L4.70007 2.09998L8 2.09998L8 0.0999756L2.7 0.0999754L2.7 16L1.39993 14.6L-3.8842e-05 16L3.69996 19.8L7.39996 16Z" fill="white"></path> <path d="M14 5.19997L15.2999 3.8L15.2999 17.7L11.9 17.7L11.9 19.7L17.3 19.7L17.3 3.8L18.6 5.19997L20 3.8L16.3 -1.61732e-07L12.6 3.8L14 5.19997Z" fill="white"></path> <path d="M9 11.9L7 11.9C7 13.1999 7.79993 14.1999 9 14.6001L9 15.8001L11 15.8L11 14.5999C12.1 14.2 13 13.0999 13 11.8999C12.9 10.1999 11.6 8.9 10 8.9C9.5 8.9 9 8.50004 9 7.9C9 7.4 9.39996 6.9 10 6.9C10.6 6.9 11 7.29996 11 7.9L13 7.9C13 6.60007 12.2001 5.60007 11 5.19993L11 4L9 4L9 5.20007C7.89996 5.60004 7 6.70007 7 7.90014C7 9.50018 8.29993 10.8001 9.89996 10.8001C10.4 10.8001 10.9 11.2001 10.9 11.8001C10.9 12.4001 10.5 12.8001 9.89996 12.8001C9.29993 12.8 9 12.4 9 11.9L9 11.9Z" fill="white"></path> </svg>',
            }}
          />
        </button>

        <button className="nav-item" aria-label="Users">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon-svg"> <path d="M21.0232 10.3617C20.8045 8.61283 19.3399 7.32312 17.5911 7.32312H15.1864C13.4595 7.32312 11.973 8.6348 11.7762 10.3617L11.4484 13.1598C11.4046 13.5314 11.6233 13.8594 11.9949 13.9467C12.3228 14.0123 12.6508 14.0779 13.0006 14.1216L15.5582 12.1979C15.8642 11.9792 16.214 11.8481 16.6074 11.8481C17.3506 11.8481 18.0065 12.329 18.2688 13.0285L18.6841 14.2746C19.4273 14.1872 20.1488 14.0997 20.8483 13.9467C21.1981 13.8594 21.4386 13.5314 21.3948 13.1598L21.0232 10.3617Z" fill="white"></path> <path d="M19.6464 3.23541C19.6464 5.0222 18.1979 6.47066 16.411 6.47066C14.6242 6.47066 13.1758 5.02224 13.1758 3.23541C13.1758 1.44862 14.6242 0 16.411 0C18.1978 0 19.6464 1.44858 19.6464 3.23541Z" fill="white"></path> <path d="M6.77036 12.7229H4.36567C2.61683 12.7229 1.15224 14.0346 0.933561 15.7615L0.605722 18.5595C0.561959 18.9311 0.802428 19.2591 1.15222 19.3465C2.55127 19.6525 4.01586 19.8056 5.56796 19.8056C7.09813 19.8056 8.58469 19.6525 9.9837 19.3465C10.3335 19.2591 10.574 18.9311 10.5302 18.5595L10.2024 15.7615C9.98354 14.0126 8.51894 12.7229 6.77025 12.7229H6.77036Z" fill="white"></path> <path d="M8.80269 8.6347C8.80269 10.4215 7.35427 11.87 5.56744 11.87C3.78065 11.87 2.33203 10.4215 2.33203 8.6347C2.33203 6.84787 3.78061 5.39929 5.56744 5.39929C7.35423 5.39929 8.80269 6.84787 8.80269 8.6347Z" fill="white"></path> <path d="M17.0008 13.4657C16.9135 13.1814 16.5637 13.0723 16.3232 13.247L13.394 15.4549C13.1098 15.6736 13.1753 16.1326 13.5251 16.2419L14.3559 16.5042C13.8967 17.8159 13.0442 18.8651 11.9512 19.5865C11.82 19.6739 11.8638 19.9143 12.0167 19.9363C14.0496 20.2861 16.0609 19.1711 16.7822 17.2256L17.6348 17.4879C17.9846 17.5972 18.3124 17.2692 18.1813 16.9195L17.0008 13.4657Z" fill="white"></path> </svg>',
            }}
          />
        </button>

        <button
          className="nav-item nav-item-highlighted"
          aria-label="Highlighted navigation item"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea17482931063c467af914033566f8cb8406bf4?placeholderIfAbsent=true"
            alt="Group 19203"
            className="nav-icon"
          />
          <div className="nav-indicator"></div>
        </button>

        <button className="nav-item" aria-label="Navigation item 12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f624b7f14587741f738d47ebcf9e9bd9c88e5856?placeholderIfAbsent=true"
            alt="Group 18512"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 13">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f624b7f14587741f738d47ebcf9e9bd9c88e5856?placeholderIfAbsent=true"
            alt="Group 18758"
            className="nav-icon"
          />
        </button>

        <button className="nav-item" aria-label="Navigation item 14">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e76a8423ef05f5aeea7fe32235f87335a68a6286?placeholderIfAbsent=true"
            alt="Group 18959"
            className="nav-icon"
          />
        </button>
      </nav>

      <style jsx>{`
        .sidebar-container {
          width: 60px;
          height: 802px;
          background: linear-gradient(
            180deg,
            #21998e 0%,
            #06cf4d 25%,
            #66bfc9 50%,
            #acc878 75%,
            #0a2bc0 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
        }
        @media (max-width: 640px) {
          .sidebar-container {
            width: 50px;
            height: auto;
          }
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%;
        }
        @media (max-width: 640px) {
          .sidebar-nav {
            gap: 15px;
          }
        }
        .nav-item {
          width: 32px;
          height: 32px;
          border-radius: 5px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: background-color 0.2s;
        }
        @media (max-width: 640px) {
          .nav-item {
            width: 28px;
            height: 28px;
          }
        }
        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .nav-item-active {
          background-color: #496b8a;
        }
        .nav-item-highlighted {
          background-color: #1262ab;
        }
        .nav-icon {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 640px) {
          .nav-icon {
            width: 18px;
            height: 18px;
          }
        }
        .nav-icon-svg {
          width: 20px;
          height: 20px;
          fill: #fff;
        }
        @media (max-width: 640px) {
          .nav-icon-svg {
            width: 18px;
            height: 18px;
          }
        }
        .exchange-icon {
          transform: rotate(90deg);
        }
        .nav-indicator {
          width: 2px;
          height: 28px;
          border-radius: 0px 5px 5px 0px;
          background: linear-gradient(
            180deg,
            #5a545f 0%,
            #7d196b 25%,
            #15318c 50%,
            #936b09 75%,
            #e5cea4 100%
          );
          position: absolute;
          right: -16px;
        }
        @media (max-width: 640px) {
          .nav-indicator {
            height: 24px;
            right: -11px;
          }
        }
      `}</style>
    </aside>
  );
}
