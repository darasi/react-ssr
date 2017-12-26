import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link as ScrollLink } from 'react-scroll';

const Header = (props) =>

  <header className="header" id="header">
    <Container>
      <Menu secondary stackable floated="right" className="header-menu">
        {props.headerMenu.map((item, index) => (
          <Menu.Item key={index} name={item.title}>
            <ScrollLink 
              activeClass="active"
              to={item.section}
              spy={true} 
              smooth={true} 
              hashSpy={true} 
              duration={500}>{item.title}
            </ScrollLink>
          </Menu.Item>
        ))}
      </Menu>
    </Container>
  </header>
  {
    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").classList.add("fixed");
        } else {
            document.getElementById("header").classList.remove('fixed');
        }
    }
  }

export default Header;
