
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import JoinPage from './pages/sign-in-and-sign-up/join.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { useSelector, useDispatch } from 'react-redux';



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
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/signin' element={currentUser ? <Navigate replace to='/' /> : <SignInPage />} />
        <Route path='/join' element={currentUser ? <Navigate replace to='/' /> : <JoinPage />} />
      </Routes>
    </div >
  );

}


export default App;
