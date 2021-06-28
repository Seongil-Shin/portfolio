/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import CustomGridList from "./elements/CustomGridList";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { useEffect } from "react";

const ShortProfile = `
   flex-basis:35%;
   height:80vh;
   display:flex;
   flex-direction:column;
`;
const container = `
   display:flex
`;
const Stacks = `
   flex-basis:65%;
   height:80vh;
   text-align:center;
`;
const ImgStyle = `
   flex-basis:40%;
   display:flex;
   text-align:center;
   align-items: center;
   flex-direction:column;
   justify-content: center;
   img {
      border-radius:10px;
      width:70%;
      height:auto;
   }
`;
const ShortIntroduction = `
   flex-basis:60%;
   padding-top:30px;
   text-align:center;
`;
const StackFlex = `
   display:flex;
`;
const StackFrontEnd = `
   flex-basis:33%;
`;
const StackBackEnd = `
   flex-basis:33%;
`;
const StackEtc = `
   flex-basis:33%;
`;
const AddStack = `
text-align:left;
display:flex;
& > div {
   flex-basis:30%;
   padding:0px 10px;
   border-right : 1px solid;
}
`;

function ProfileMutation({
   data,
   update,
   photoUpdate,
   init,
   changeText,
   deleteAboutme,
   addAboutme,
   addStack,
   changeStackType,
   deleteStack,
   updateApply,
}) {
   const [gridList, setGridList] = useState();

   useEffect(() => {
      setGridList({ front: [], back: [], etc: [] });
      for (let key in data.stack) {
         data.stack[key].forEach((item) => {
            let check = true;
            for (let s of update.deletedStack) {
               if (item.id === s.id) {
                  check = false;
               }
            }
            if (check) {
               setGridList((prev) => ({
                  ...prev,
                  [key]: [...prev[key], item],
               }));
            }
         });
      }
      update.stack.forEach((item) => {
         setGridList((prev) => ({
            ...prev,
            [item.type]: [...prev[item.type], item],
         }));
      });
   }, [update.stack, data, update.deletedStack]);
   return (
      <>
         {" "}
         <h2>프로필</h2>
         <div
            css={css`
               ${container}
            `}>
            <div
               css={css`
                  ${ShortProfile}
               `}>
               <div
                  css={css`
                     ${ImgStyle}
                  `}>
                  {" "}
                  {update?.image ? (
                     <img src={URL.createObjectURL(update.image)} alt="error" />
                  ) : (
                     <img
                        src={`${process.env.REACT_APP_PUBLIC_BUCKET_ADDRESS}${data.image}`}
                        alt="error"
                     />
                  )}
                  <label key="image_upload">
                     <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => photoUpdate(e, "profile")}
                     />
                     <Button color="primary" component="span">
                        수정
                     </Button>
                  </label>
               </div>
               <div
                  css={css`
                     ${ShortIntroduction}
                  `}>
                  <TextField
                     value={update?.name || data.name}
                     onChange={(e) => changeText(e, "name")}
                  />
                  <div style={{ textAlign: "left", paddingLeft: "30px" }}>
                     <ul>
                        {data.aboutme?.map((item) => {
                           let deleted = false;

                           for (let id of update.deletedAboutme) {
                              if (item.id === id) {
                                 deleted = true;
                              }
                           }
                           return deleted ? (
                              <></>
                           ) : (
                              <>
                                 <li>
                                    {item?.line}{" "}
                                    <Button
                                       color="secondary"
                                       size="small"
                                       onClick={() =>
                                          deleteAboutme(item.id, "data")
                                       }>
                                       삭제{" "}
                                    </Button>
                                 </li>
                              </>
                           );
                        })}
                        {update.newAboutme.slice(0, -1).map((item, idx) => (
                           <li>
                              {item}
                              <Button
                                 color="secondary"
                                 size="small"
                                 onClick={() => deleteAboutme(idx, "new")}>
                                 삭제
                              </Button>
                           </li>
                        ))}
                        <li>
                           깃허브 :{" "}
                           <a
                              href="https://github.com/Seongil-Shin"
                              target="_blank"
                              rel="noreferrer">
                              https://github.com/Seongil-Shin
                           </a>
                        </li>
                        <br />
                        <TextField
                           value={
                              update.newAboutme[update.newAboutme.length - 1]
                           }
                           onChange={(e) => changeText(e, "newAboutme")}
                        />
                        <Button
                           color="primary"
                           size="small"
                           onClick={addAboutme}>
                           추가
                        </Button>
                     </ul>
                  </div>
               </div>
            </div>
            <div
               css={css`
                  ${Stacks}
               `}>
               <h2>Stacks</h2>
               <div
                  css={css`
                     ${StackFlex}
                  `}>
                  <div
                     css={css`
                        ${StackFrontEnd}
                     `}>
                     <h3>Front end</h3>
                     <CustomGridList
                        tileData={gridList?.front}
                        deleteStack={deleteStack}
                     />
                  </div>

                  <div
                     css={css`
                        ${StackBackEnd}
                     `}>
                     <h3>Back end</h3>
                     <CustomGridList
                        tileData={gridList?.back}
                        deleteStack={deleteStack}
                     />
                  </div>

                  <div
                     css={css`
                        ${StackEtc}
                     `}>
                     <h3>Etc</h3>
                     <CustomGridList
                        tileData={gridList?.etc}
                        deleteStack={deleteStack}
                     />
                  </div>
               </div>
               <div
                  css={css`
                     ${AddStack}
                  `}>
                  <div>
                     {update.newStack.image && (
                        <img
                           src={URL.createObjectURL(update.newStack.image)}
                           alt="error"
                           width="100px"
                           height="auto"
                        />
                     )}

                     <label key="image_upload">
                        <input
                           type="file"
                           accept="image/*"
                           style={{ display: "none" }}
                           onChange={(e) => photoUpdate(e, "stack")}
                        />
                        <Button color="primary" component="span">
                           추가/수정
                        </Button>
                     </label>
                  </div>

                  <div>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={update.newStack.type}
                        onChange={changeStackType}
                        style={{ marginRight: "10px" }}>
                        <MenuItem value="front">Front end</MenuItem>
                        <MenuItem value="back">Back end</MenuItem>
                        <MenuItem value="etc">Etc</MenuItem>
                     </Select>
                     <TextField
                        value={update.newStack.title}
                        onChange={(e) => changeText(e, "stack")}
                     />
                  </div>
                  <br />
                  <br />

                  <div>
                     <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        onClick={addStack}>
                        추가
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <Button color="secondary" variant="outlined" onClick={init}>
            초기화
         </Button>
         <Button color="primary" variant="outlined" onClick={updateApply}>
            적용
         </Button>
      </>
   );
}
export default ProfileMutation;
