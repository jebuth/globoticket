import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = () => {
    const ticketItem = ({item}) => {
        return (
            <View style={styles.Tickets}>
                <View>
                    <Image 
                        style={styles.img}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {item.event}
                    </Text>
                    <Text 
                        style={styles.ticketshortdescription}>
                    </Text>
                    <Text 
                        style={styles.ticketdescription}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        >
                        {item.description}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        Price: {item.price}
                    </Text>
                    <Text style={styles.ticketbutton}>
                        GET TICKETS
                    </Text>
                </View>
            </View>
        );
    };
}