import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const corDeFundo = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/dhionathan01';
const imagemProfileGithub = 'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/290209625_4720268214746130_3519532189470720939_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEt5PqjwMrUndr9cKunnBObOo0KoxCud5k6jQqjEK53meDe5agZjpSi8nAxIbO3ZLb8dVVqxNUwMvzqGl2SZR0E&_nc_ohc=5YRGcO70-gIAX-0FItB&_nc_ht=scontent-gig2-1.xx&oh=00_AT-lJ9H-AhxPLzAI2_T5KviluHd_V72_Yq-eT00KgRY48Q&oe=62C14B33';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('LinkParovado');
            console.log('Abrindo Link');
            await Linking.openURL(urlToMyGithub);  
        };
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={corDeFundo} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel="Dhionathan Foto" style={style.avatar} source={{uri: imagemProfileGithub}}/>
                <Text
                    accessibilityLabel="Nome: Dhionathan Jobim"
                    style={[style.defaultText, style.name]}>Dhionathan Lanzoni Jobim</Text>
                <Text
                    accessibilityLabel="Nickname: Dhionathan Jobim"
                    style={[style.defaultText, style.nickname]}>dhionathan01</Text>
                <Text
                    accessibilityLabel="Descrição: tudande de Desenvolvimento. |
                    Graduando em Análise e Desenvolvimento de Sistemas."
                    style={[style.defaultText, style.discription]}>
                    Estudande de Desenvolvimento. |
                    Graduando em Análise e Desenvolvimento de Sistemas.
                </Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textbutton]}> Open in Github </Text>
            </View>
            </Pressable>
        </View>
        </SafeAreaView>

        
        
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column
        backgroundColor: corDeFundo,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row',

    },

    content: {
        alignItems: 'center',
        padding: 20,  
    },

    avatar: {
        height: 300,
        width: 300,
        borderColor: 'white',
        borderRadius: 150,
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,  
    },

    name: {
        marginTop:20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 24,
        color: colorDarkkFontGithub,
    },

    discription: {
        fontWeight:'bold',
        fontSize: 15,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkkFontGithub,
        borderRadius: 10,
        padding: 20,
    },

    textbutton: {
        fontWeight:'bold',
        fontSize: 16,
    },

});
