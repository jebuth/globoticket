import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Home = (props) => {
    return(
        <View style={styles.container}>
            <Image 
                style = {styles.globologo}
                source={require('./images/_Export_globoticket-bug-black.png')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.userName}</Text>
            <View style={styles.container}>
                <Text style={styles.content}>{props.introText}</Text>
            </View>
        </View>
    );
};

const introText = 'some text';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    textContainer: {
        textAlign: 'center',
        paddingTop: 10
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: 'Ubuntu-Regular'
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Regular'
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: 300,
    }

});

export default Home;