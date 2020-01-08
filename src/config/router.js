import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createStackNavigator,
    StackViewStyleInterpolator,
} from 'react-navigation-stack';
import * as Screens from "../screens";

const HomeTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen:Screens.home,
            navigationOptions: {
                tabBarLabel: "首页",
                // tabBarIcon: ({ focused, tintColor }) => (
                //   <Icon
                //     name="home"
                //     size={pTd(30)}
                //     style={{ color: focused ? APPSTYLECOLOR() : TEXTCOLOR }}
                //   />
                // )
              }
        },
        Setting: {
            screen:Screens.setting,
            navigationOptions:{
                tabBarLabel: "设置",
            }
        },
    },
    {
        // 设置header默认样式
        defaultNavigationOptions: {
            gesturenabled: true,
            headerStyle: {
                backgroundColor: '#00a2ed',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 16,
            },
        },
    },
);
const MainNavigator = createStackNavigator(
    {
        HomeTabNavigator: {
            screen: HomeTabNavigator,
            navigationOptions: {
                headerShown:false
            }
        },
        Login: Screens.login,
    }
);


const AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator;
