import React from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useHomeStyles from './HomeStyles';
import ThemeService from '../../services/theme/ThemeService';

const Home = () => {
  const styles = useHomeStyles(ThemeService.currentUserTheme);

  return (
    <div className={styles.container}>
      <div className={styles.nextSessionContainer}>
        <IconButton className={styles.arrowDownButton}>
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
