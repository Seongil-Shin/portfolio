/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import {
   Typography,
   Grid,
   TextField,
   Button,
   makeStyles,
} from "@material-ui/core";
import { css } from "@emotion/react";
import palette from "../lib/styles/palette";

const container = `
   position:relative;
   top:10vh;
   width:90%;
   margin:0px auto;
`;
const errMsg = `
   margin: 0rem 0.75rem;
   font-size:0.75rem;
   color:${palette.err};
`;
const useStyles = makeStyles((theme) => ({
   button: {
      margin: "30px 0px",
      backgroundColor: palette.thatch,
   },
   textField: {
      "& label": {
         color: palette.gunmetal,
      },
      "& label.focused": {
         color: palette.thatch,
      },
      "& .MuiFormLabel-root.Mui-focused": {
         color: palette.thatch,
      },
      "& .MuiInput-underline:before": {
         borderBottom: `1px solid ${palette.thatch}`,
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
         borderBottom: `2px solid ${palette.thatch}`,
      },
      "& .MuiInput-underline:after": {
         borderBottom: `2px solid ${palette.thatch}`,
      },
   },
}));

function Contact({ sendEmail, data, onFormChange, errEmail, errName }) {
   const classes = useStyles();
   useEffect(() => window.scrollTo(0, 0), []);
   return (
      <div
         css={css`
            ${container}
         `}>
         <Typography variant="h6" gutterBottom>
            Contact
         </Typography>
         <Grid container spacing={3} direction="column">
            <Grid item xs={12} md={3}>
               <TextField
                  required
                  id="user_name"
                  name="name"
                  label="Name"
                  value={data.name}
                  fullWidth
                  onChange={onFormChange}
                  className={classes.textField}
               />
            </Grid>
            {errName && (
               <div
                  css={css`
                     ${errMsg}
                  `}>
                  {errName}
               </div>
            )}
            <Grid item xs={12} md={6}>
               <TextField
                  required
                  id="user_email"
                  name="email"
                  label="Email For Replying"
                  fullWidth
                  value={data.email}
                  onChange={onFormChange}
                  className={classes.textField}
               />
            </Grid>
            {errEmail && (
               <div
                  css={css`
                     ${errMsg}
                  `}>
                  {errEmail}
               </div>
            )}
            <Grid item xs={12} md={10}>
               <TextField
                  required
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  value={data.message}
                  rows={10}
                  onChange={onFormChange}
                  fullWidth
                  className={classes.textField}
               />
            </Grid>
         </Grid>
         <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={sendEmail}>
            Send
         </Button>
      </div>
   );
}
export default Contact;
