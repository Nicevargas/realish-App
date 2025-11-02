
import React, { useState, useCallback } from 'react';
import { Screen, NavigateFunc } from './types';
import LoginScreen from './screens/LoginScreen';
import CreationScreen from './screens/CreationScreen';
import AlbumScreen from './screens/AlbumScreen';
import PlansScreen from './screens/PlansScreen';
import ProfileScreen from './screens/ProfileScreen';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Creation);

    const navigate = useCallback((screen: Screen) => {
        setActiveScreen(screen);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setActiveScreen(Screen.Creation);
    };

    if (!isLoggedIn) {
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }

    const screens: { [key in Screen]: React.ComponentType<{ navigate: NavigateFunc }> } = {
        [Screen.Creation]: CreationScreen,
        [Screen.Album]: AlbumScreen,
        [Screen.Plans]: PlansScreen,
        [Screen.Profile]: ProfileScreen,
    };

    const ActiveScreenComponent = screens[activeScreen];

    return <ActiveScreenComponent navigate={navigate} />;
};

export default App;
