import {createStackNavigator}from 'react-navigation-stack';
import {createAppContainer}from 'react-navigation';
import Negeri from './components/Negeri';
import Detail from './components/Detail';
import Category from './components/Category';

const screens ={
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);