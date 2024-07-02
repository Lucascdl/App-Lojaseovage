import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={StyleSheet.container}>
        
        <View style={styles.containerLogo}>
            <Image
            source={require('../SignIn../assets/logo.png')}
            style={{ width: '100%'}}
            resizeMode="contain"
            />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>Bem Vindo(a) a Seovage!</Text>
            <Text style={styles.text}>Faça seu Login</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Signin')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000000',
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: "5%",
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#alalal',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }



    }
})