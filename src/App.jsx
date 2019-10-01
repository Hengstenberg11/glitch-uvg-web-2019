import React, { Component } from 'react';

import './App.css';
import ScrollButton from './ScrollButton';
import Background from './Background';
import Input from './input';
import Slide from './Slide.js';
import Logo from './Logo.js';
import Cuadro from './cuadro';

class App extends Component {
  constructor(props) {
    super(props);


    this.slideList = [{
      imgPath: 'https://i.imgur.com/wDbcM7Q.png', bgColor: '58b792', title: 'We don’t store your personal information. Ever.', description: 'Our privacy policy is simple: we don’t collector share any of your personal information.', txtColor: 'fff', shadow: true,
    },
    {
      imgPath: 'https://i.imgur.com/oULQirP.png', bgColor: 'f5a339', title: 'We don’t follow you around with ads.', description: 'We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the Internet.', txtColor: 'fff', shadow: true,
    },
    {
      imgPath: 'https://i.imgur.com/8lVvOKS.png', bgColor: '5f63bd', title: 'We don’t track you in or out of private browsing mode.', description: 'Other search engines track your searches even when you’re in private browsing mode. We don’t track you — period.', txtColor: 'fff', shadow: true,
    },
    {
      imgPath: 'https://i.imgur.com/aM7We67.png', bgColor: '87cef5', title: 'Switch to DuckDuckGo and take back your privacy!', description: 'No tracking, no ad targeting, just searching.', txtColor: '365374', shadow: false,
    }];
  }


  render() {
    return (
      <div className="App">
        <Background>
          <Logo />
          <Cuadro />
          <Input />
          <br />
          <br />
          <br />
          {
            this.slideList.map(({
              imgPath, bgColor, title, description, txtColor, shadow,
            }) => (
              <Slide
                imgPath={imgPath}
                bgColor={bgColor}
                title={title}
                description={description}
                txtColor={txtColor}
                shadow={shadow}
              />
            ))
          }
        </Background>
        <ScrollButton />
        <Cuadro />
      </div>
    );
  }
}

export default App;
