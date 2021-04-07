import React from 'react'
import { Redirect } from 'react-router-dom'

import ClassPage from './class_page'

import HooksPage from './hooks_page'

import BindThisPage from './bind_this_page'

import PruePage from './pure'

import Card from './card'

import Ladder from './ladder'

import Home from './index'

import Timer from './timer'

import Ref from './ref'

import RefHooks  from './ref/ref-hooks'

import RefTs from './ref/ref-ts.tsx'

// import RefHoc from './ref/hoc'

import Error from './error'

import UseCallback from './usecallback'

import Hoc from './hoc'

import ClassModal from './modal/class'

import HooksModal from './modal/hooks'

import LifeCycle from './life_cycle'

// h5分享截图
import ShareComponent from './share'

// lottie web
import Lottie from './lottie'


const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/home' />
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/class',
    exact: true,
    component: () => <ClassPage />
  },
  {
    path: '/hooks',
    exact: true,
    component: () => <HooksPage />
  },
  {
    path: '/bindThis',
    exact: true,
    component: () => <BindThisPage />
  },
  {
    path: '/pure',
    exact: true,
    component: () => <PruePage />
  },
  {
    path: '/card',
    exact: true,
    component: () => <Card />
  },
  {
    path: '/ladder',
    exact: true,
    component: () => <Ladder />
  },
  {
    path: '/timer',
    exact: true,
    component: () => <Timer />
  },
  {
    path: '/ref',
    exact: true,
    component: () => <Ref />
  },
  {
    path: '/refhooks',
    exact: true,
    component: () => <RefHooks />
  },
  {
    path: '/refts',
    exact: true,
    component: () => <RefTs />
  },
  {
    path: '/error',
    exact: true,
    component: () => <Error />
  },
  {
    path: '/usecallback',
    exact: true,
    component: () => <UseCallback />
  },
  {
    path: '/hoc',
    exact: true,
    component: () => <Hoc />
  },
  {
    path: '/classmodal',
    exact: true,
    component: () => <ClassModal />
  },
  {
    path: '/hooksmodal',
    exact: true,
    component: () => <HooksModal />
  },
  {
    path: '/lifecycle',
    exact: true,
    component: () => <LifeCycle />
  },
  {
    path: '/share',
    exact: true,
    component: () => <ShareComponent />
  },
  {
    path: '/lottie',
    exact: true,
    component: () => <Lottie />
  }
]

export default routes
