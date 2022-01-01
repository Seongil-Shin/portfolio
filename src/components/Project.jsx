/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";
import ImageGallery from "react-image-gallery";
import ReactMarkdown from "react-markdown";

const title = `
   text-align:center;
`;
const container = `
    height: 65vh;
    display: flex;
    position :relative;
    align-items: center;
`;
const galleryContainer = `
    flex-basis:50%;
    max-width: 50%;
    height:50vh;
`;
const detailContainer = `
    flex-basis:50%;
    height:50vh;
    padding:20px;

    overflow-y: scroll;
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
   top:0px;
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
               <ImageGallery items={images} renderItem={renderItem} />
            </div>
            <div
               css={css`
                  ${detailContainer}
               `}>
               <div>
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
