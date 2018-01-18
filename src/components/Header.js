import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Responsive, Icon, Image } from 'semantic-ui-react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/img/ucomp_logo.png';

class Header extends Component {

  componentDidMount() {
    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").classList.add("fixed");
        } else {
            document.getElementById("header").classList.remove('fixed');
        }
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <header className="header" id="header">
            <Container>
              <Menu secondary className="header-menu">
                <Menu.Item className="header-logo">
                  <Link to='/'><Image src={logo} centered /></Link> 
                </Menu.Item>
                <Menu.Menu position='right'>
                  {this.props.headerMenu.map((item, index) => (
                    <Responsive as={Menu.Item} minWidth={768} key={index} name={item.title}>
                      <ScrollLink 
                        activeClass="active"
                        to={item.section}
                        spy={true} 
                        smooth={true} 
                        hashSpy={true} 
                        duration={500}>{item.title}
                      </ScrollLink>
                    </Responsive>
                  ))}
                </Menu.Menu>
              </Menu>
            </Container>
          </header>
  }

}

export default Header;
