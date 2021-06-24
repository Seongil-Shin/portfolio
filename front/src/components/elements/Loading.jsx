import React from "react";
import { CircularProgress, Modal, makeStyles } from "@material-ui/core";
import palette from "../../lib/styles/palette";

const useStyles = makeStyles(() => ({
   loading: {
      position: "absolute",
      top: "47%",
      left: "47%",
      color: palette.thatch,
   },
}));

function Loading({ loading }) {
   const classes = useStyles();
   return (
      <Modal open={loading}>
         <CircularProgress className={classes.loading} />
      </Modal>
   );
}
export default Loading;
