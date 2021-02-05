import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeService from '../../services/theme/ThemeService';
import useFooterStyles from './FooterStyles';
import { ReactComponent as GKathLogo } from '../../assets/gkath-logo.svg';

const Footer = () => {
  const [t] = useTranslation();
  const styles = useFooterStyles(ThemeService.currentUserTheme());

  return (
    <footer className={styles.footer}>
      <Grid container>
        <Grid item xs={6} md={3}>
          <div className={styles.socialMediaContainer}>
            <Typography variant="overline">
              {t('footer.social_media')}
            </Typography>
            <div className={styles.socialMediaIcons}>
              <ButtonBase href="https://www.facebook.com/bikacorretoradeseguros">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </ButtonBase>

              <ButtonBase href="https://www.instagram.com/bikacorretoradeseguros/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </ButtonBase>

              <ButtonBase href="mailto:bikaseguros@bika.com.br">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </ButtonBase>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.footerEndLine}>
        <Typography variant="caption" gutterBottom>
          {t('footer.rights')}
        </Typography>
        <ButtonBase href="http://gkath.com">
          <Typography variant="caption" className={styles.gkathLogoBy}>
            by:
          </Typography>
          <GKathLogo className={styles.gkathLogo} />
        </ButtonBase>
      </div>
    </footer>
  );
};

export default Footer;
