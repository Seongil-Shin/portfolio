/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import palette from "../lib/styles/palette";

const container = `
    display: flex;
    flex-basis:35%;
`;
const imageContainer = `
    flex-basis:35%;
    padding:10px;
    height:90vh;
`;
const image = ` 
    border-radius:10px;
    height:70%;
`;
const detailContainer = `
    flex-basis:65%;
    height:90vh;
    padding:50px;
    box-sizing: border-box;
`;

const ImgStyle = `
   --height: auto;
   --width: 100%;
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
const useStyles = makeStyles(() => ({
   button: {
      margin: "0px auto",
   },
}));

function ProjectMutation({ data, mutate, onChangeData, onGoBack }) {
   const classes = useStyles();
   return (
      <div
         css={css`
            ${container}
         `}>
         <div
            css={css`
               ${imageContainer}
            `}>
            <div
               css={css`
                  ${image}
               `}>
               {data?.image &&
                  (typeof data.image === "object" ? (
                     <img
                        id="project-image"
                        src={URL.createObjectURL(data.image)}
                        width="100%"
                        height="auto"
                        alt="error"
                     />
                  ) : (
                     <AmplifyS3Image
                        imgKey={data.image}
                        css={css`
                           ${ImgStyle}
                        `}
                     />
                  ))}
            </div>
            <label key="image_upload">
               <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => onChangeData(e, "image")}
               />
               <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  component="span">
                  추가/수정
               </Button>
            </label>

            {data?.image && (
               <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  onClick={() => onChangeData(null, "image")}>
                  삭제
               </Button>
            )}
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
