import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});
const MessageInputField = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item>
        <Grid item xs={1}>
          <Avatar />
        </Grid>
        <Grid item xs={10}>
          入力
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
