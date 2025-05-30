"use client";
import React from "react";

export default function ProductGallery() {
  return (
    <section className="gallery-container" aria-label="Product gallery">
      <div className="gallery-content">
        <div className="gallery-thumbnails">
          <div className="thumbnail-item thumbnail-active">
            <div className="thumbnail-border"></div>
            <div className="thumbnail-background"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc4f216b88c8e856f051ead7bb950474d1cf748c?placeholderIfAbsent=true"
              alt="image 166"
              className="thumbnail-image"
            />
          </div>

          <div className="thumbnail-item">
            <div className="thumbnail-border thumbnail-border-gray"></div>
            <div className="thumbnail-background"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cd90e3a4042ab714cf0b5cfe0f2c5870cc715f6?placeholderIfAbsent=true"
              alt="image 368"
              className="thumbnail-image"
            />
          </div>

          <div className="thumbnail-item">
            <div className="thumbnail-border thumbnail-border-gray"></div>
            <div className="thumbnail-background"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86999280b067df98dd6d9b2a5ea063958328dcf5?placeholderIfAbsent=true"
              alt="image 367"
              className="thumbnail-image"
            />
          </div>

          <div className="thumbnail-item">
            <div className="thumbnail-border thumbnail-border-gray"></div>
            <div className="thumbnail-background"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6570c0ba6e7f2d9bd534a809aa235963e3587683?placeholderIfAbsent=true"
              alt="image 366"
              className="thumbnail-image"
            />
          </div>
        </div>

        <div className="main-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f46901a9583911710d3f96dd1f9be294b69362d?placeholderIfAbsent=true"
            alt="image 166"
            className="main-image"
          />
          <div className="overlay-image-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b3641c5afc1c5c73a52b3f8ed7f86feed72893c?placeholderIfAbsent=true"
              alt="image 143"
              className="overlay-image"
            />
            <p className="image-label">Image 1</p>
          </div>
          <div className="gallery-indicators">
            <div className="indicator"></div>
            <div className="indicator indicator-active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-title">
          Ultrasound Machines
        </h1>
        <p className="deal-id">Deal ID : CUTTINGE327843</p>
        <p className="publisher-info">
          <span>Published by</span>
          <span className="publisher-name">Star Sons Pvt. Ltd.</span>
        </p>
        <div className="price">$2500</div>
      </div>

      <div className="action-buttons">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="95" height="40" viewBox="0 0 95 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icons"> <rect width="40" height="40" fill="#E5E5E5"></rect> <path d="M27.4286 9H12.5714C12.2559 9 12 9.25439 12 9.56805V30.5851C12 31.0284 12.4902 31.3016 12.8708 31.0689L20 26.7079L27.1292 31.0689C27.5055 31.2992 28 31.0324 28 30.5851V9.56805C28 9.25442 27.7441 9 27.4286 9ZM13.143 10.1361H26.857V11.2721H13.143V10.1361ZM20.2994 25.5572C20.1157 25.4449 19.8841 25.4449 19.7004 25.5572L13.1427 29.5687V12.4083H26.8567V13.5443V13.7292C26.8567 14.1447 26.8567 13.831 26.8567 14.1447C26.8567 14.4583 26.8567 14.2226 26.8567 14.4043V14.6804V29.5688L20.2994 25.5572Z" fill="#222222"></path> <rect x="55" width="40" height="40" fill="#E5E5E5"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M75.5402 23.8158V21.1284C75.5402 20.9658 75.4768 20.8095 75.3634 20.6929C75.25 20.5763 75.0956 20.5084 74.9331 20.5037C73.1425 20.454 71.3943 21.0002 69.7377 22.126C68.4411 23.0362 67.3018 24.1517 66.3645 25.4288C66.9423 21.0286 69.7214 18.115 75.1298 16.1325C75.2501 16.0885 75.3539 16.0086 75.4273 15.9037C75.5007 15.7986 75.54 15.6736 75.54 15.5456V12.8345L83.2934 18.3256L75.5402 23.8158ZM84.7362 17.8158L75.2771 11.115C75.1516 11.0262 74.9978 10.9867 74.845 11.004C74.6923 11.0214 74.5514 11.0944 74.449 11.2091C74.3467 11.3239 74.2903 11.4724 74.2904 11.626V15.1117C70.8625 16.4302 68.451 18.1621 66.9264 20.3976C65.5709 22.3858 64.9419 24.7568 65.0042 27.6464C65.0071 27.7815 65.0536 27.9121 65.1371 28.0185C65.2204 28.1249 65.3361 28.2014 65.4665 28.2366C65.5973 28.2712 65.7358 28.2627 65.8612 28.2121C65.9866 28.1615 66.0923 28.0718 66.1625 27.9562C68.513 24.0735 71.3111 21.9451 74.2905 21.7621V25.0246C74.2906 25.1782 74.3473 25.3263 74.4498 25.4407C74.5521 25.5552 74.693 25.628 74.8455 25.6453C74.9982 25.6626 75.1517 25.6233 75.2771 25.5346L84.7362 18.8349C84.9017 18.7178 85 18.5277 85 18.3249C85 18.1222 84.9017 17.932 84.7362 17.815L84.7362 17.8158Z" fill="black"></path> <rect x="55" width="40" height="40" fill="#E5E5E5"></rect> <path d="M83.6965 20.4858C83.4964 18.8848 82.1556 17.7041 80.5545 17.7041H78.3531C76.7722 17.7041 75.4113 18.9049 75.2312 20.4858L74.9311 23.0474C74.891 23.3876 75.0912 23.6879 75.4314 23.7678C75.7315 23.8279 76.0318 23.8879 76.352 23.928L78.6935 22.1668C78.9736 21.9667 79.2939 21.8466 79.654 21.8466C80.3344 21.8466 80.9348 22.2869 81.1749 22.9272L81.5552 24.068C82.2356 23.988 82.896 23.9079 83.5365 23.7678C83.8567 23.6879 84.0768 23.3876 84.0368 23.0474L83.6965 20.4858Z" fill="#222222"></path> <path d="M82.4359 13.9619C82.4359 15.5977 81.1098 16.9237 79.474 16.9237C77.8382 16.9237 76.5122 15.5977 76.5122 13.9619C76.5122 12.3262 77.8382 11 79.474 11C81.1098 11 82.4359 12.3261 82.4359 13.9619Z" fill="#222222"></path> <path d="M70.6483 22.6473H68.4468C66.8458 22.6473 65.505 23.8481 65.3048 25.4291L65.0047 27.9906C64.9646 28.3308 65.1848 28.6311 65.505 28.7111C66.7858 28.9912 68.1266 29.1314 69.5475 29.1314C70.9483 29.1314 72.3092 28.9912 73.59 28.7111C73.9102 28.6311 74.1304 28.3308 74.0903 27.9906L73.7902 25.4291C73.5899 23.828 72.249 22.6473 70.6482 22.6473H70.6483Z" fill="#222222"></path> <path d="M72.5092 18.9048C72.5092 20.5406 71.1832 21.8666 69.5474 21.8666C67.9116 21.8666 66.5854 20.5406 66.5854 18.9048C66.5854 17.269 67.9116 15.9429 69.5474 15.9429C71.1831 15.9429 72.5092 17.269 72.5092 18.9048Z" fill="#222222"></path> <path d="M80.014 23.3276C79.934 23.0674 79.6138 22.9675 79.3936 23.1275L76.712 25.1488C76.4518 25.349 76.5118 25.7691 76.8321 25.8692L77.5926 26.1093C77.1722 27.3101 76.3918 28.2707 75.3911 28.9311C75.2711 29.0111 75.3112 29.2312 75.4512 29.2513C77.3122 29.5716 79.1534 28.5508 79.8139 26.7698L80.5943 27.0099C80.9146 27.11 81.2147 26.8097 81.0946 26.4896L80.014 23.3276Z" fill="#222222"></path> </svg>',
          }}
        />
      </div>

      <style jsx>{`
        .gallery-container {
          width: 100%;
          border-radius: 5px;
          border: 1px solid rgba(34, 34, 34, 0.15);
          background-color: #fafafa;
          padding: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 640px) {
          .gallery-container {
            padding: 16px;
            margin-bottom: 16px;
          }
        }
        .gallery-content {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 991px) {
          .gallery-content {
            gap: 16px;
          }
        }
        @media (max-width: 640px) {
          .gallery-content {
            flex-direction: column;
          }
        }
        .gallery-thumbnails {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        @media (max-width: 640px) {
          .gallery-thumbnails {
            flex-direction: row;
            gap: 12px;
          }
        }
        .thumbnail-item {
          width: 58px;
          height: 58px;
          position: relative;
          cursor: pointer;
        }
        @media (max-width: 640px) {
          .thumbnail-item {
            width: 50px;
            height: 50px;
          }
        }
        .thumbnail-border {
          width: 58px;
          height: 58px;
          background-color: #1262ab;
          position: absolute;
          left: 0px;
          top: 0px;
        }
        @media (max-width: 640px) {
          .thumbnail-border {
            width: 50px;
            height: 50px;
          }
        }
        .thumbnail-border-gray {
          background-color: #c8c8c8;
        }
        .thumbnail-background {
          width: 57px;
          height: 57px;
          background-color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
        }
        @media (max-width: 640px) {
          .thumbnail-background {
            width: 49px;
            height: 49px;
          }
        }
        .thumbnail-image {
          position: absolute;
          left: 4px;
          top: 3px;
        }
        .main-image-container {
          position: relative;
          flex: 1;
        }
        .main-image {
          width: 249px;
          height: 249px;
        }
        @media (max-width: 991px) {
          .main-image {
            width: 200px;
            height: 200px;
          }
        }
        @media (max-width: 640px) {
          .main-image {
            width: 160px;
            height: 160px;
          }
        }
        .overlay-image-container {
          position: absolute;
          top: 14px;
          left: 44px;
        }
        .overlay-image {
          width: 160px;
          height: 239px;
        }
        @media (max-width: 991px) {
          .overlay-image {
            width: 128px;
            height: 191px;
          }
        }
        @media (max-width: 640px) {
          .overlay-image {
            width: 100px;
            height: 150px;
          }
        }
        .image-label {
          color: #0b3963;
          font-family: Gordita;
          font-size: 14px;
          font-weight: 400;
          position: absolute;
          left: 34px;
          top: 103px;
          margin: 0;
        }
        @media (max-width: 640px) {
          .image-label {
            font-size: 12px;
          }
        }
        .gallery-indicators {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 65px;
          height: 14px;
          border-radius: 50px;
          opacity: 0.7;
          background-color: #f5f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }
        @media (max-width: 640px) {
          .gallery-indicators {
            width: 55px;
            height: 12px;
          }
        }
        .indicator {
          width: 6px;
          height: 6px;
          border-radius: 50px;
          background-color: #c4c4c4;
        }
        @media (max-width: 640px) {
          .indicator {
            width: 5px;
            height: 5px;
          }
        }
        .indicator-active {
          background-color: #1262ab;
        }
        .product-info {
          flex: 1;
        }
        .product-title {
          color: #0b3963;
          font-family: Manrope;
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 16px 0;
        }
        @media (max-width: 991px) {
          .product-title {
            font-size: 20px;
          }
        }
        @media (max-width: 640px) {
          .product-title {
            font-size: 18px;
          }
        }
        .deal-id {
          color: #222;
          font-family: Manrope;
          font-size: 12px;
          font-weight: 400;
          margin: 0 0 8px 0;
        }
        .publisher-info {
          color: #222;
          font-family: Manrope;
          font-size: 12px;
          font-weight: 400;
          margin: 0 0 16px 0;
        }
        .publisher-name {
          color: #1262ab;
        }
        .price {
          color: #0d9d00;
          font-family: Manrope;
          font-size: 24px;
          font-weight: 700;
        }
        @media (max-width: 991px) {
          .price {
            font-size: 20px;
          }
        }
        @media (max-width: 640px) {
          .price {
            font-size: 18px;
          }
        }
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (max-width: 640px) {
          .action-buttons {
            display: none;
          }
        }
        .action-icons {
          width: 95px;
          height: 40px;
        }
      `}</style>
    </section>
  );
}
