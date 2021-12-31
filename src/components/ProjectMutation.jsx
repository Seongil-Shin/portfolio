/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import palette from "../lib/styles/palette";
import ImageGallery from "react-image-gallery";

const container = `
    display: flex;
    flex-basis:35%;
`;
const galleryContainer = `
    flex-basis:40%;
    height:80vh;
`;
const detailContainer = `
    flex-basis:65%;
    height:90vh;
    padding:50px;
    box-sizing: border-box;
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
    margin : 50px 30px;
`;

const goBackContainer = `
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

const imageControllButtonsContainer = `
   text-align:center;
`;

const useStyles = makeStyles(() => ({
   button: {
      margin: "0px auto",
   },
}));

function ProjectMutation({
   data,
   mutate,
   onChangeData,
   onGoBack,
   onAddImage,
   onDeleteImage,
   onChangeImage,
}) {
   const galleryRef = useRef();
   const classes = useStyles();
   const [images, setImages] = useState([]);

   useEffect(() => {
      const imageList = [];
      if (
         data.images &&
         typeof data.images === "object" &&
         Array.isArray(data.images)
      ) {
         for (let i = 0; i < data.images.length; i++) {
            if (typeof data.images[i] === "object") {
               imageList.push({
                  original: URL.createObjectURL(data.images[i]),
               });
            } else {
               imageList.push({
                  original: `${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.images[i]}`,
               });
            }
         }
      }
      setImages(imageList);
   }, [data.images]);

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
         <div
            css={css`
               ${galleryContainer}
            `}>
            {data?.images?.length > 0 && (
               <ImageGallery
                  ref={galleryRef}
                  items={images}
                  renderItem={renderItem}
                  showThumbnails={false}
               />
            )}
            <div
               css={css`
                  ${imageControllButtonsContainer}
               `}>
               <label key="image_upload">
                  <input
                     type="file"
                     accept="image/*"
                     style={{ display: "none" }}
                     onChange={(e) => onAddImage(e)}
                  />
                  <Button
                     variant="contained"
                     color="primary"
                     className={classes.button}
                     component="span">
                     추가
                  </Button>
               </label>

               {data?.images?.length > 0 && (
                  <label key="image_change">
                     <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) =>
                           onChangeImage(
                              e,
                              galleryRef.current?.getCurrentIndex()
                           )
                        }
                     />
                     <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        component="span">
                        변경
                     </Button>
                  </label>
               )}
               {data?.images?.length > 0 && (
                  <Button
                     variant="contained"
                     color="secondary"
                     className={classes.button}
                     onClick={() => {
                        if (window.confirm("삭제하시겠습니까?")) {
                           onDeleteImage(galleryRef.current?.getCurrentIndex());
                        }
                     }}>
                     삭제
                  </Button>
               )}
            </div>
         </div>
         <div
            css={css`
               ${detailContainer}
            `}>
            <h2>내용</h2>

            <div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>제목</div>
                  <TextField
                     className={classes.textField}
                     onChange={onChangeData}
                     value={data.title}
                     name="title"
                     fullWidth
                  />
               </div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>요약</div>
                  <TextField
                     className={classes.textField}
                     onChange={onChangeData}
                     name="summary"
                     value={data.summary}
                     fullWidth
                  />
               </div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>내용</div>
                  <TextField
                     name="detail"
                     className={classes.textField}
                     onChange={onChangeData}
                     fullWidth
                     value={data.detail}
                     multiline
                  />
               </div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>깃허브 링크</div>
                  <TextField
                     name="github"
                     className={classes.textField}
                     onChange={onChangeData}
                     value={data.github}
                     fullWidth
                     multiline
                  />
               </div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <Button variant="outlined" color="primary" onClick={mutate}>
                     추가/수정
                  </Button>
                  <span
                     css={css`
                        ${goBackContainer}
                     `}>
                     <Button onClick={onGoBack}>뒤로가기</Button>
                  </span>
               </div>
               <div
                  css={css`
                     ${containerText}
                  `}>
                  <div>태그</div>
                  <br />
                  {'<a href="" target="_blank" ref="noreferrer"></a>'}
                  <br />
                  {"<br/><br/>"}
               </div>
            </div>
         </div>
      </div>
   );
}
export default ProjectMutation;
