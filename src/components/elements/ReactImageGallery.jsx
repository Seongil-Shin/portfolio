/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

const imageInnerContainer = `
   background-color:#222222;
`;
const imgStyle = (isFullScreen) => `
   max-width:100%;
   height:${isFullScreen ? "100vh" : "50vh"};
   object-fit:contain;
`;
const mobileImgStyle = (isFullScreen) => `
   height: auto;
   width: 100%;
   border-radius:10px;
   height:${isFullScreen ? "100vh" : "50vh"};
   object-fit: contain;
`;

function CustomReactImageGallery({ images, isMobile }) {
   const [imageList, setImageList] = useState([]);
   const [isFullScreen, setIsFullScreen] = useState(false);
   useEffect(() => {
      const imageList = [];
      if (typeof images === "object" && Array.isArray(images)) {
         for (let i = 0; i < images.length; i++) {
            imageList.push({
               original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${images[i]}`,
               thumbnail: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${images[i]}`,
            });
         }
      }
      setImageList(imageList);
   }, [images]);

   const renderItem = (item) => {
      return (
         <div
            css={css`
               ${imageInnerContainer}
            `}>
            <img
               src={item.original}
               alt="error"
               css={css`
                  ${isMobile
                     ? mobileImgStyle(isFullScreen)
                     : imgStyle(isFullScreen)}
               `}
            />
         </div>
      );
   };

   return (
      <ImageGallery
         items={imageList}
         renderItem={renderItem}
         onScreenChange={() => setIsFullScreen((prev) => !prev)}
      />
   );
}

export default CustomReactImageGallery;
