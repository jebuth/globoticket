import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const Home = (props) => {
    return(
        <View style={styles.container}>
            <Image 
                style = {styles.globologo}
                source={require('./images/logo.png')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image
                style={styles.heroimage}
                source={require('./images/boxing.jpg')}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
            <View style={styles.menu}>
                <Menu/>
            </View>
        </View>
    );
};

const introText = `Are you redy for the best events? Whether you are into 
sports, music, or the most amazing seminars we have got you convered. Get 
ready to purchase great tickets at the best prices. Events are in-person and virtual`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
        padding: 20
    },
    globologo: {
        height: 150,
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
        fontWeight: '300',
    },
    heroimage:{
        height: 170,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 30
    }

});

export default Home;