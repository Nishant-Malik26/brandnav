import './Header.css';
import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component{
    render() {
      return <div>
             {/* <img src={logo} alt="Brand nav logo" /> */}

    
    <nav>

        <div className='logo'>                   <img src={logo} alt="Brand nav logo" />
</div>
        

            {/* <li className='navText'>About</li>
            <li className='navText'>Features</li>
            <li className='navText'>Pricing</li>
            <li className='navText'>Testimonials</li>
            <li className='navText'>Help</li> */}
            <li id='signIn'>Sign in</li>
            <li id='signUp'>Sign up</li>
    <div className='navText'>
    <div id='spaceNav'>About</div>
            <div id='spaceNav'>Features</div>
            <div id='spaceNav'>Pricing</div>
            <div id='spaceNav'>Testimonials</div>
            <div id='spaceNav'>Help</div>

    </div>
            

    
    
    </nav>
      </div> 
    }
  }

  export default Header;

