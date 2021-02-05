import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Toolbar } from '@material-ui/core';
import ThemeService from './services/theme/ThemeService';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import useAppStyles from './AppStyles';
import LoadingPage from './components/LoadingPage';
import Home from './pages/Home';

const App = () => {
  const styles = useAppStyles(ThemeService.currentUserTheme);

  return (
    <ThemeProvider theme={ThemeService.currentUserTheme()}>
      <Suspense fallback={<LoadingPage />}>
        <CssBaseline />
        <Header />
        <div className={styles.content}>
          <Toolbar />
          <Home />
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
