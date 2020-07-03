import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Nav from './Nav.js';
import Intro from './Intro.js';
import About from './About.js';
import Footer from './Footer.js';
import Follow from './Follow.js';
import Todayssongrecommend from './Todayssongrecommend.js'


class App extends Component {
  render() {
    return(
      <div>
        <Nav/>
        <Intro/>
        <About/>
        <Todayssongrecommend/>
        <Follow/>
        <Footer/>
      </div>
      );
  }
}

export default App;