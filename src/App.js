
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary';
import ScrollToTop from './components/scroll-to-top';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import { Helmet } from 'react-helmet';

const AboutPage = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/not-found'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const JoinPage = lazy(() => import('./pages/sign-in-and-sign-up/join.component'));
const SignInPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {

    let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));

        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }

    });

    return () => {
      unsubscribeFromAuth();
    };

  }, [dispatch]);



  return (
    <>
      <Header />
      <Helmet>
        <title>Red Pace. | Clothing shop concept web-site</title>
        <meta name="description" content="This is a concept of an e-commerce clothing web-site created as a part of a porfolio of a web developer." />
      </Helmet>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <HomePage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='shop/*' element={
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <ShopPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='checkout' element={
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <CheckoutPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='signin' element={currentUser ? <Navigate replace to='/' /> :
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <SignInPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='join' element={currentUser ? <Navigate replace to='/' /> :
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <JoinPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='about' element={
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <AboutPage />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path='*' element={
            <ErrorBoundary>
              <Suspense fallback={<></>}>
                <NotFound />
              </Suspense>
            </ErrorBoundary>
          } />
        </Routes>
      </AnimatePresence>
      <GlobalStyle />
    </>
  );

}


export default App;
