import React, { useState } from 'react';
import "../styles/Tab.css";
import Tab from "../components/Tab/Tab";
import SharePartook from '../components/SharePartook/SharePartook';

const Donait = () => {
  return (
    <div>
      <SharePartook />
      <Tab />
    </div>
  )
}

export default Donait