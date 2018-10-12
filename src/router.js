import React, {Component} from 'react';
import {Image, Text} from 'react-native';

import Icons from './TabbarIcons'
import Color from './Colors'

import Homepage from './screens/Homepage';
import { Router, Scene } from 'react-native-router-flux';



export default class AppRouter extends Component {

    tabIcon(imageURI){
     return (
       <Image style={{width:40, height:40, resizeMode:'center', tintColor:Color.lightText}} source={{uri:imageURI}} />
     );
   }
       render() {
           return (
               <Router>
                   <Scene key="root"> 
                       <Scene key="tabbar" tabs={true}  default="homepage" tabBarStyle={{backgroundColor: Color.lightBackground, borderTopColor:Color.extraLightBackground, borderTopWidth:1}}>
                           {/*Tab and it's scenes */}
                           <Scene key = "homepage_tab" icon={() => this.tabIcon(Icons.homeIcon)} >
                                <Scene key="homepage" component={ Homepage } title="Homepage" hideNavBar={true}/>
                           </Scene>
                           
                       </Scene>        
                   </Scene>
               </Router>
           );
       }    
   }