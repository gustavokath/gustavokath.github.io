import { makeStyles, createStyles } from '@material-ui/core/styles';

const useLoadingPageStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default useLoadingPageStyles;
