/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { TextField, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
   textField: {
      margin: "10px 20px",
      width: "500px",
      "& input": {
         paddingBotton: "2px",
      },
   },
}));

const containerTexts = `
    margin : 100px 0px;
`;
const containerText = `
    margin : 50px 30px;
`;
const successMsg = `
    color: #3f51b5
`;

function LandingModification({ onChange, strings, success, modify }) {
   const classes = useStyles();

   return (
      <div>
         <h2>랜딩 페이지</h2>
         <div
            css={css`
               ${containerTexts}
            `}>
            <div
               css={css`
                  ${containerText}
               `}>
               <div>첫번째 줄 </div>
               <TextField
                  className={classes.textField}
                  value={strings[0]}
                  onChange={(e) => onChange(e.target.value, 0)}
                  fullWidth
               />
            </div>
            <div
               css={css`
                  ${containerText}
               `}>
               <div>두번째 줄 </div>
               <TextField
                  className={classes.textField}
                  value={strings[1]}
                  onChange={(e) => onChange(e.target.value, 1)}
                  fullWidth
               />
            </div>
            <div
               css={css`
                  ${containerText}
               `}>
               <Button variant="outlined" color="primary" onClick={modify}>
                  수정
               </Button>
            </div>
            {success && (
               <div
                  css={css`
                     ${containerText}
                     ${successMsg}
                  `}>
                  성공했습니다.
               </div>
            )}
         </div>
      </div>
   );
}
export default LandingModification;
