import React from 'react';
import Loadable from 'react-loadable';
import { homeThunk } from '../../store/actions/thunk';
import '../../assets/css/loader.scss'

const Loading = (props) => {
  console.log(props)
    return <div className="sk-cube-container">
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          </div>
}

const LoadableHomePage = Loadable({
  loader: () => import(/* webpackChunkName: 'HomePage' */'../../containers/HomePage'),
  loading: Loading,
  delay: 10
});
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../containers/Home'),
  loading: Loading,
  delay: 10
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */'../../containers/User'),
  loading: Loading,
  delay: 10
});

const routesConfig = [{
  path: '/',
  exact: true,
  component: LoadableHomePage,
  thunk: () => {},
}, {
  path: '/thunk',
  component: LoadableHome,
  thunk: homeThunk,
}, {
  path: '/user',
  component: LoadableUser,
  thunk: () => {},
}];

export default routesConfig;




