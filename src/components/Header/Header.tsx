import { AppBar, ThemeProvider, Toolbar } from '@material-ui/core';
import React from 'react';
import ThemeService from '../../services/theme/ThemeService';
import useHeaderStyles from './HeaderStyles';
import { ReactComponent as GKathLogo } from '../../assets/gkath-logo.svg';

const Header = () => {
  const styles = useHeaderStyles(ThemeService.currentUserTheme());

  return (
    <ThemeProvider theme={ThemeService.currentHeaderTheme}>
      <AppBar
        position="fixed"
        className={styles.appBar}
      >
        <Toolbar>
          <GKathLogo className={styles.gkathLogo} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
