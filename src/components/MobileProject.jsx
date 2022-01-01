/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";
import ImageGallery from "react-image-gallery";
import ReactMarkdown from "react-markdown";

const container = `
   position:relative;
`;
const title = `
   text-align:center;
`;
const innerContainer = `
    width:100%;
`;
const imageContainer = `
    padding:10px;
`;
const imageInnerContainer = `
   background-color:#222222;
`;
const ImgStyle = `
   height: auto;
   width: 100%;
   border-radius:10px;
   max-height:50vh;
   object-fit: contain;
`;
const detailContainer = `
    height:500px;
    overflow-y: scroll;
`;
const containerText = `
    margin : 10px 10px;
`;
const goBackContainer = `
   padding:10px;
   button {
      background-color:${palette.thatch};
      color:white;
   }
   
   button:hover {
      background-color:${palette.thatch};
      opacity:0.5;
      color:white;
   }
`;

function MobileProject({ data }) {
   const [images, setImages] = useState([]);
   const history = useHistory();

   useEffect(() => window.scrollTo(0, 0), []);
   useEffect(() => {
      const imageList = [];
      if (typeof data.images === "object" && Array.isArray(data.images)) {
         for (let i = 0; i < data.images.length; i++) {
            imageList.push({
               original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.images[i]}`,
               thumbnail: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.images[i]}`,
            });
         }
      } else {
         imageList.push({
            original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.images}`,
            thumbnail: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.images}`,
         });
      }
      setImages(imageList);
   }, [data]);

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
                  ${ImgStyle}
               `}
            />
         </div>
      );
   };

   return (
      <div
         css={css`
            ${container}
         `}>
         <h1
            css={css`
               ${title}
            `}>
            {data.title}
         </h1>

         <div
            css={css`
               ${goBackContainer}
            `}>
            <Button onClick={() => history.goBack()}>뒤로가기</Button>
         </div>
         <div
            css={css`
               ${innerContainer}
            `}>
            <div
               css={css`
                  ${imageContainer}
               `}>
               <ImageGallery
                  items={images}
                  renderItem={renderItem}
                  showThumbnails={true}
               />
            </div>
            <div
               css={css`
                  ${detailContainer}
               `}>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <ReactMarkdown children={data.detail} />
               </div>
               <Divider />
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>
                     깃허브 :{" "}
                     <a href={data.github} target="_blank" rel="noreferrer">
                        {data.github}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default MobileProject;
