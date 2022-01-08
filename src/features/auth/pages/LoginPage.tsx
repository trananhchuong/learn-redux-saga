import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { authActions } from '../../auth/authSlice';
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        userName: '',
        password: '',
      })
    );
  };
  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Button fullWidth variant="contained" color="primary" onClick={handleLogoutClick}>
        Logout
      </Button>

      <div className={classes.root}>
        <Paper elevation={1} className={classes.box}>
          <Typography variant="h5" component="h1">
            Student Management
          </Typography>
          <Box mt={4}>
            <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
              Fake Login
            </Button>
          </Box>
        </Paper>
      </div>
    </>
  );
}
