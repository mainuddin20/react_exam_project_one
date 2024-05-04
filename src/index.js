import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import NavBar from './compones/NavBar/NavBar';
import TopHeader from './compones/TopHeader/TopHeader';
import InnerHeader from './compones/InnerHeader/InnerHeader.jsx';
import Metting from './compones/Metting/Metting.jsx';
import NaverMiss from './compones/NaverMiss/NaverMiss.jsx';
import DirectOrder from './compones/DirectOrder/DirectOrder.jsx';
import CustomarReview from './compones/CustomarReview/CustomarReview.jsx';
import Footer from './compones/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <TopHeader />
    <InnerHeader />
    <Metting />
    <NaverMiss />
    <DirectOrder />
    <CustomarReview />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
