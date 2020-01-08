import { createAppContainer } from 'react-navigation';
import {
    createStackNavigator,
    StackViewStyleInterpolator,
} from 'react-navigation-stack';
import * as Screens from "../screens";

/*
 *   构建导航
 *
 *   导航结构 ：
 *      >Home   (首页)
 *          >>Details (详情页)
 *          >>Comment (评论页)
 *          >>....
 *
 */
// 二级导航
const MainScreen = createStackNavigator(
    {
        Home: Screens.home,
    },
    {
        // 设置header默认样式
        defaultNavigationOptions: {
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: '#00a2ed',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 16,
            },
        },
        // 设置转场动画效果（安卓实现类似iOS的push动画)    来源： https://www.jianshu.com/p/dc9df5826651
        // transitionConfig: () => ({
        //     screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        //     transitionSpec: {
        //         duration: 280, //动画时间
        //     },
        // }),
    },
);


const AppNavigator = createAppContainer(MainScreen);

export default AppNavigator;
