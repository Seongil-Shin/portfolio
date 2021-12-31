/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";
import ImageGallery from "react-image-gallery";

const title = `
   text-align:center;
`;
const container = `
    display: flex;
    position :relative;
`;
const galleryContainer = `
    flex-basis:40%;
    height:80vh;
`;
const detailContainer = `
    flex-basis:60%;
    height:40vh;
    padding:20px;
    display: flex;
    align-items: center;
`;
const imageInnerContainer = `
   background-color:#222222;
`;
const ImgStyle = `
   max-width:100%;
   height:50vh;
   object-fit:contain;
`;
const containerText = `
    margin : 10px 10px;
`;
const goBackContainer = `
   position:absolute;
   top:10px;
   left:10px;
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

function Project({ data }) {
   const [images, setImages] = useState([]);
   const history = useHistory();

   useEffect(() => {
      const imageList = [];
      if (typeof data.image === "object" && Array.isArray(data.image)) {
         for (let i = 0; i < data.image.length; i++) {
            imageList.push({
               original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image[i]}`,
               thumbnail: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image[i]}`,
            });
         }
      } else {
         imageList.push({
            original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`,
            thumbnail: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`,
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
            ${`position:relative;`}
         `}>
         <h1
            css={css`
               ${title}
            `}>
            {data.title}
         </h1>
         <div
            css={css`
               ${container}
            `}>
            <div
               css={css`
                  ${galleryContainer}
               `}>
               <ImageGallery
                  items={images}
                  renderItem={renderItem}
                  showThumbnails={false}
               />
            </div>
            <div
               css={css`
                  ${detailContainer}
               `}>
               <div>
                  <div
                     css={css`
                        ${containerText}
                     `}
                     dangerouslySetInnerHTML={{ __html: data.detail }}></div>
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
         <div
            css={css`
               ${goBackContainer}
            `}>
            <Button onClick={() => history.goBack()}>뒤로가기</Button>
         </div>
      </div>
   );
}
export default Project;
