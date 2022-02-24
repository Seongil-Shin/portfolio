/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { Grid, makeStyles } from "@material-ui/core";
import palette from "../lib/styles/palette";
import SingleCard from "./elements/SingleCard";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

const Container = (isMobile) => `
   display:flex;
   flex-direction :column;
   
   position:absolute;
   top:50%;
   transform:translateY(-50%);

   width:100%;
   max-height:calc(100% - 40px);
   padding-bottom:40px;
   overflow-y:auto;
   text-align:center;
   gap:1rem;

   ${
      isMobile &&
      `
      position:relative;
      top:0;
      transform:none;
      `
   }
`;

const HeaderStyle = () => `
    margin:0;
    padding-top:5vh;
    padding-bottom:5vh;
`;

const ListContainer = () => `
    width:80%;
    margin:0px auto;
    flex: 1 1 auto;
`;

const AddButton = () => `
   text-align:left;
   padding-left:100px;
   margin:30px;
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

const AlignPage = (length) => `
   width:${(length + 2) * 38}px; 
   margin : 0px auto; 
   z-index:100;
`;

const useStyles = makeStyles((theme) => ({
   pagination: {
      color: palette.thatch,
      zIndex: 100,
      "& button": {
         color: palette.thatch,
      },
   },
}));

function Works({ list, setOnMod, isAdmin }) {
   const classes = useStyles();
   const [page, setPage] = useState(0);
   const isMobile = useSelector(
      ({ isMobileReducer }) => isMobileReducer.isMobile
   );

   const handleChange = (e, n) => {
      setPage(n - 1);
   };
   return (
      <div
         css={css`
            ${Container(isMobile)}
         `}>
         <h2
            css={css`
               ${HeaderStyle()}
            `}>
            Projects
         </h2>
         {isAdmin && (
            <div
               css={css`
                  ${AddButton()}
               `}>
               <Button onClick={() => setOnMod(["add", null])}>추가</Button>
            </div>
         )}
         <div
            css={css`
               ${ListContainer()}
            `}>
            <Grid container spacing={3}>
               {list?.slice(page * 4, page * 4 + 4).map((item, idx) => {
                  return (
                     <Grid item xs={12} sm={6} md={3} key={idx}>
                        <SingleCard
                           item={item}
                           setOnMod={setOnMod}
                           isAdmin={isAdmin}
                        />
                     </Grid>
                  );
               })}
            </Grid>
         </div>
         <div
            css={css`
               ${AlignPage(Math.ceil(list.length / 4))}
            `}>
            <Pagination
               count={Math.ceil(list.length / 4)}
               className={classes.pagination}
               onChange={handleChange}
               disabled={false}
            />
         </div>
      </div>
   );
}
export default Works;
