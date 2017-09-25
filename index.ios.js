/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import MainVC from './MainVC';
import FindVC from './FindVC';
import ReleaseVC from './ReleaseVC';
import NewsVC from './NewsVC';
import MineVC from './MineVC';
import DetailVC from './DetailVC';
import Icon from 'react-native-vector-icons/Ionicons';
// 通过TabNavigator做路由映射
const MainScreentNavigator=TabNavigator({
    MainVC:{
      screen:MainVC,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => (
                <Icon
                    name='md-home' // 图标
                    size={30}
                    color={tintColor}/>
            ),
      },
    },
    FindVC:{
      screen:FindVC,
      navigationOptions:{
        tabBarIcon: ({tintColor}) => (
                <Icon
                    name='md-home' // 图标
                    size={30}
                    color={tintColor}/>
            ),
      },
    },
    ReleaseVC:{
      screen:ReleaseVC,
      navigationOptions:{
          tabBarIcon: ({tintColor}) => (
                <Icon
                    name='md-home' // 图标
                    size={30}
                    color={tintColor}/>
            ),
      },
    },
    NewsVC:{
      screen:NewsVC,
      navigationOptions:{
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name='md-home' // 图标
                    size={30}
                    color={tintColor}/>
            ),
      },
    },
    MineVC:{
      screen:MineVC,
      navigationOptions:{
      tabBarIcon: ({tintColor}) => (
                <Icon
                    name='md-home' // 图标
                    size={30}
                    color={tintColor}/>
            ),
      },
    },
},
{
      tabBarOptions:{
           activeTintColor: '#C8795A', // 文字和图片选中颜色
           inactiveTintColor: '#ADADAD', // 文字和图片默认颜色
           showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
           indicatorStyle: {height: 0},
      style: {
              // height: 60,
              backgroundColor: '#fff',
          },
},
    //设置安卓tabBar是靠上靠下bottom top
  tabBarPosition:'bottom',

});
//引入要用到的跳转页面
const  MyNavigatior = StackNavigator({
    Main:{screen:MainScreentNavigator},
    DetailVC:{screen:DetailVC},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MyNavigatior', () => MyNavigatior);
