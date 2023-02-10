import React from "react";

import {View,Text,StyleSheet,useColorScheme} from "react-native"

// JSX.Element specifies that we are returning JSX element
function AppPro():JSX.Element{
    // useColorScheme provides the value about the mode from the user preference means it helps us to know whether phone is in dark mode or in light mode
    const isDarkMode = useColorScheme() === 'dark'
    return(
        // style is a prop
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText:styles.darkText}>Hello World !</Text>
        </View>
    )  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    whiteText:{
        color:"red",
    },
    darkText:{
        color:"blue"
    }
})

export default AppPro;