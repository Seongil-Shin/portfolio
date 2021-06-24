import React from "react";
import { Snackbar, makeStyles, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import palette from "../../lib/styles/palette";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../modules/snackBar";

const useStyles = makeStyles((theme) => ({
   close: {
      padding: theme.spacing(0.5),
      "& :hover": {
         cursor: "pointer",
      },
   },
   bar: {
      "& .MuiSnackbarContent-root": {
         backgroundColor: palette.thatch,
      },
   },
}));

function SnackBar() {
   const { open, message } = useSelector(({ snackBar }) => snackBar);
   const dispatch = useDispatch();

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }
      dispatch(close());
   };

   const classes = useStyles();
   return (
      <Snackbar
         key={message ? "snackbar" : undefined}
         anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
         }}
         open={open}
         autoHideDuration={5000}
         onClose={handleClose}
         message={message ? message : undefined}
         className={classes.bar}
         action={
            <>
               <IconButton
                  aria-label="close"
                  color="inherit"
                  className={classes.close}
                  onClick={handleClose}>
                  <CloseIcon />
               </IconButton>
            </>
         }
      />
   );
}
export default SnackBar;
