import React from 'react';
import './index.css';


export default function Logo() {
  return (
    <div clasName="Container">
      <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" alt="" />
      <span className="tag">&quotconocer más&quot</span>
    </div>
  );
}
