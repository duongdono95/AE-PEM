import React from 'react';
import './App.css';
import Stem from './views/stem/Stem';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { theme } from 'style/theme';

const useStyles = makeStyles(() => ({
  main: { display: 'flex' },
  content: { height: 'auto', width: '100%', display: 'flex', padding: 16 },
}));
function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.content}>
        <Stem />
      </div>
    </ThemeProvider>
  );
}

export default App;
