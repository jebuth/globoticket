import React from 'react';
import {View, Image, Text} from 'react-native';

const Home = (props) => {
    return(
        <View style={{flexDirection:'column'}}>
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

export default Home;