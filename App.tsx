import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import Routes from "./src/Routes";

const { width } = Dimensions.get("window");

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 8800);
    }, []);

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <AnimatedSplash
                    translucent
                    isLoaded={isLoaded}
                    logoImage={require("./assets/splashAnimated.gif")}
                    backgroundColor="#ffffff"
                    logoHeight={width}
                    logoWidth={width}
                >
                    <>
                        <Routes />
                        <StatusBar style="light" />
                    </>
                </AnimatedSplash>
            </NativeBaseProvider>
        </NavigationContainer>
    );
};

export default App;
