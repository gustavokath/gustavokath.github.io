import { makeStyles, createStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';

const useHomeStyles = makeStyles(() => createStyles({
  container: {
    background: 'url("assets/home_bg.jpg") center center',
    backgroundSize: 'cover',
    height: '80vh',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  arrowDownButton: {
    width: '100%',
    color: colors.white,
  },
  nextSessionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useHomeStyles;
