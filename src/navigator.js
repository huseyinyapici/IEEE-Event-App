import { StackNavigator, NavigationActions } from 'react-navigation';
import TabNavScreen from './tabNavigator';

const routes = {
    TabNav: {
        screen: TabNavScreen,
        navigationOptions: {
            header: null,
        },
    },
};



export const AppNavigator = StackNavigator(routes,
    {
        initialRouteName: 'TabNav',
        headerMode: 'none',
    },
);

