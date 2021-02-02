import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

export default class Navbar extends Component {
  state={
    isOpen: false
  }

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <h1>jumi&dash</h1>
            </Link>
            <Link to='/signin'>
              <span className='signInLink'>hello, sign in</span>
            </Link>
            <button 
              type='button' 
              className='nav-btn' 
              onClick={this.handleToggle}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/myrecipes'>create recipe</Link></li>
            <li><Link to='/recipes'>recipes</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


