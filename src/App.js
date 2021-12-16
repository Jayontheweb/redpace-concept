
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in.component';
import JoinPage from './pages/sign-in-and-sign-up/join.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }

    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/join' element={<JoinPage />} />
        </Routes>
      </div >
    );
  }
}

export default App;
