import React from "react";
import {View, Text, StyleSheet, sa, SafeAreaView, StatusBar} from 'react-native';
const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'lightsteelblue'}/>
                <View>
                    <Text style={style.text}>Hello World</Text>
                </View>    
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: 'lightsteelblue',
        flex: 1, // Expandir para a tela inteira

    },

    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'darkslategrey ',
    },
});
