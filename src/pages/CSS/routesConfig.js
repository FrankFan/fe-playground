import React from 'react';
import FloatPage from './components/float';
import PositionPage from './components/position/';
import CenterPage from './components/center/';
import BFCPage from './components/BFC/';
import LayoutPage from './components/cssLayout/';
import HolyGrailPage from './components/cssLayout/HolyGrail/';
import SquarePage from './components/square/';
import NoMatch from '../../common/components/Navigator';

export default [
  {
    path: '/',
    title: 'index',
    component: SquarePage,
    exact: true,
  },
  {
    path: '/float',
    title: 'float',
    component: FloatPage,
    exact: true,
  },
  {
    path: '/position',
    title: 'position',
    component: PositionPage,
    exact: true,
  },
  {
    path: '/center',
    title: 'center',
    component: CenterPage,
    exact: true,
  },
  {
    path: '/bfc',
    title: 'bfc',
    component: BFCPage,
    exact: true,
  },
  {
    path: '/layout',
    title: 'layout',
    component: LayoutPage,
    exact: true,
  },
  {
    path: '/layout/holyGrail',
    title: 'layout/holy-grail',
    component: HolyGrailPage,
    exact: true,
  },
  {
    path: '/square',
    title: 'square',
    component: SquarePage,
    exact: true,
  },
  {
    path: '/404',
    title: '404',
    component: NoMatch,
    exact: true,
  },
];
