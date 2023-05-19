import React from 'react';
import Header from '../components/Header';
import { outlet } from "react-router-dom";

function Home() {
  return (
    <main>
      <Header />
      <outlet />
    </main>
  )
}

export default Home