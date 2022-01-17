
import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary';
// import Square from './components/square';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import JoinPage from './pages/sign-in-and-sign-up/join.component';
// import SignInPage from './pages/sign-in-and-sign-up/sign-in.component';
// import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const JoinPage = lazy(() => import('./pages/sign-in-and-sign-up/join.component'));
const SignInPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();


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
      <Routes>
        <Route path='/' element={
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <HomePage />
            </Suspense>
          </ErrorBoundary>
        } />
        <Route path='/shop/*' element={
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <ShopPage />
            </Suspense>
          </ErrorBoundary>
        } />
        <Route path='/checkout' element={
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <CheckoutPage />
            </Suspense>
          </ErrorBoundary>
        } />
        <Route path='/signin' element={currentUser ? <Navigate replace to='/' /> :
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <SignInPage />
            </Suspense>
          </ErrorBoundary>
        } />
        <Route path='/join' element={currentUser ? <Navigate replace to='/' /> :
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <JoinPage />
            </Suspense>
          </ErrorBoundary>
        } />
      </Routes>
      <GlobalStyle />
    </>
  );

}


export default App;
