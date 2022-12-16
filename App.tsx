import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";

import Home from "./src/Pages/Home";

const { width } = Dimensions.get("window");

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 8800);
    }, []);

    return (
        <AnimatedSplash
            translucent
            isLoaded={isLoaded}
            logoImage={require("./assets/splashAnimated.gif")}
            backgroundColor="#ffffff"
            logoHeight={width}
            logoWidth={width}
        >
            <Home />
        </AnimatedSplash>
    );
};

export default App;
