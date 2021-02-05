import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const useHeaderStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: colors.white,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    cursor: 'pointer',
  },
  gkathLogo: {
    height: '3rem',
  },
}));

export default useHeaderStyles;
