import React from 'react';
import "../styles/Tab.css";
import Tab from "../components/Tab/Tab";
import SharePartook from '../components/SharePartook/SharePartook';
import book from "../assets/images/book.jpg";

const Donait = () => {
  return (
    <div>
      <SharePartook imgProfile={book}/>
      <Tab />
    </div>
  )
}

export default Donait