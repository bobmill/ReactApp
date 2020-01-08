import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createStackNavigator,
    StackViewStyleInterpolator,
} from 'react-navigation-stack';
import * as Screens from "../screens";


const MainScreen = createBottomTabNavigator(
    {
        Home: Screens.home,
        Setting:Screens.setting,
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


const AppNavigator = createAppContainer(MainScreen);

export default AppNavigator;
