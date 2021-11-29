/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button, Divider } from "@material-ui/core";
import { useHistory } from "react-router";
import palette from "../lib/styles/palette";

const title = `
   text-align:center;
`;
const container = `
    display: flex;
`;
const imageContainer = `
    flex-basis:40%;
    padding:10px;
    height:80vh;
    text-align:center;
`;
const image = ` 
   position:relative;
    border-radius:10px;
    height:70%;
`;
const detailContainer = `
    flex-basis:60%;
    height:80vh;
    padding:50px;
    box-sizing: border-box;
`;

const ImgStyle = `
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);

   max-height: 100%;
   max-width:100%;
   object-fit: cover;
`;
const containerText = `
    margin : 50px 30px;
`;
const goBackContainer = `
   position:absolute;
   bottom:10px;
   right:10px;
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
   const history = useHistory();
   return (
      <>
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
                  ${imageContainer}
               `}>
               <div
                  css={css`
                     ${image}
                  `}>
                  <img
                     src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                     alt="error"
                     css={css`
                        ${ImgStyle}
                     `}
                  />
               </div>
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

                  <div
                     css={css`
                        ${goBackContainer}
                     `}>
                     <Button onClick={() => history.goBack()}>뒤로가기</Button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Project;
