import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppNavigation from './config/router';

const prefix = 'daily://'; //react-navigation 深连接的URI前缀

class App extends React.Component {
    componentDidMount () {

    }

    render () {
        return (
            <MenuProvider>
                <AppNavigation
                //uriPrefix={prefix}

                />

            </MenuProvider>

        );
    }
}

export default App;
