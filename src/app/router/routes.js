import React from 'react';
import Loadable from 'react-loadable';
import { homeThunk } from '../../store/actions/thunk';

const Loading = (props) => {
  console.log(props)
  return <div>LOADING...</div>
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




