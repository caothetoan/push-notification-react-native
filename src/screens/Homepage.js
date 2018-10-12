import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {lightBackground} from '../Colors';
import { Actions } from 'react-native-router-flux';
import Card from '../components/Card'
import Header from '../components/RecentHeader'
import NavBar from '../components/NavBar'

class Homepage extends Component {

    constructor(props){
        super(props)
        this.state = {
            raw:'',
        }
    }
    render() {
        // var dummy = this.getHomePageData
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical:20}}>

                    <NavBar  type={'bag'}/>
                     <Text>
                    
                    </Text>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBackground,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridView:{
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-around',
    },
    recentView:{
        flexDirection:'row', 
        flexWrap:'nowrap',
        alignItems: 'flex-start',
        justifyContent:'space-between',

    }
});

export default Homepage;