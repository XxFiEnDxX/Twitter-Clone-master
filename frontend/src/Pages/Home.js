import React from 'react';
import { Link } from 'react-router-dom';
import './homePageCss.css';

function Home() {
  const userJSON = localStorage.getItem('jwtToken');
  const user = userJSON ? userJSON : null;
  return (
    <div className="bg-gray-100">
      <header className="text-center py-16 pb-[220px]">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Twitter!</h1>
        <p className="text-gray-600">Connect with friends and family, share your moments, and join the conversation.</p>
      {!user&&<Link to="/register"><button className="btn bg-sky-500 btn-primary mt-4">Sign Up</button></Link>}
      </header>
      <footer className="text-center py-8 bg-gray-300">
        <p className="text-gray-600">&copy; 2024 Twitter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;