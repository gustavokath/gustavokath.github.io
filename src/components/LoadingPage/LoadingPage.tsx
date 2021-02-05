import { CircularProgress } from '@material-ui/core';
import React from 'react';
import ThemeService from '../../services/theme/ThemeService';
import useLoadingPageStyles from './LoadingPageStyles';

const LoadingPage = () => {
  const styles = useLoadingPageStyles(ThemeService.currentUserTheme());

  return (
    <div className={styles.container}>
      <CircularProgress size={200} />
    </div>
  );
};

export default LoadingPage;
