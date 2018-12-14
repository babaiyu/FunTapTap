import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home'
import Intro from './screens/Intro'
import Test from './screens/Test'
import Awok from './screens/Awok'
import LeadBoards from './screens/LeadBoards'
import Audio from './screens/Audio'

// import FbRender forom './screens/FbRender'
// import FbLog from './screens/FbLog'

import TestAja from './screens/TestAja'
import PostApi from './screens/PostApi'
import ButtonClick from './screens/ButtonClick'
import RandomColor from './screens/RandomColor'

import AddModal from './screens/AddModal'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Intro: Intro,
    Test: Test,
    Awok: Awok,
    LeadBoards: LeadBoards,
    Audio: Audio,

    // FbRender: FbRender,
    // FbLog: FbLog,
    TestAja: TestAja,
    PostApi: PostApi,
    ButtonClick: ButtonClick,
    RandomColor: RandomColor,

    AddModal: AddModal,
  },
  {
    initialRouteName: 'AddModal',
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
