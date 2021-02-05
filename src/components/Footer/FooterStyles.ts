import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const useFooterStyles = makeStyles((theme: Theme) => createStyles({
  footer: {
    backgroundColor: colors.red,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    color: colors.white,
  },
  socialMediaContainer: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  socialMediaIcons: {
    display: 'flex',
    '& > *': {
      marginRight: theme.spacing(1),
    },
    '& > *:hover': {
      cursor: 'pointer',
      color: colors.black,
    },
  },
  footerEndLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  gkathLogo: {
    height: '30px',
  },
  gkathLogoBy: {
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    footer: {
      padding: theme.spacing(2),
    },
    gkathLogo: {
      height: '20px',
    },
  },
}));

export default useFooterStyles;
