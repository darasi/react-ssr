import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions  from '../store/actions/home';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link as ScrollLink, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Header from '../components/Header';
import SectionHero from '../components/SectionHero';
import SectionServices from '../components/SectionServices';
import '../assets/css/my.scss'
import '../assets/css/index.scss'

class HomePage extends Component {

  state = {
    headerMenu: [
        { title: 'მთავარი',section: 'SectionHero' },
        { title: 'სერვისები', section: 'SectionServices' },
        { title: 'კონტაქტი', section: 'SectionContact' }
    ]
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
    });

    Events.scrollEvent.register('end', function(to, element) {
    });
    scrollSpy.update();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });
      scroller.scrollTo('scroll-container', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });
    goToContainer.then(() =>  
        scroller.scrollTo('scroll-container-second-element', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return [
      <Header key="Header" headerMenu={this.state.headerMenu}/>,
      <Element key="SectionHero" name="SectionHero" id="SectionHero">
        <SectionHero  />
      </Element>,
      <Element key="SectionServices" name="SectionServices" id="SectionServices">
        <SectionServices />
      </Element>
    ];
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  homeInfo: state.homeInfo,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: actions.add,
  getHomeInfo: actions.getHomeInfo,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)
