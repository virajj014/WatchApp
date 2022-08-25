import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

const Screen2 = ({ navigation }) => {



    const Showpage = (page) => {
        navigation.navigate(page)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.number}>00
                <Text style={styles.small}>HR</Text>
            </Text>
            <Text style={styles.number}>00
                <Text style={styles.small}>MIN</Text>
            </Text>
            <Text style={styles.number}>00
                <Text style={styles.small}>SEC</Text>
            </Text>

            <View style={styles.startstop}>
                <TouchableOpacity>
                    <Text style={styles.start}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.stop}>Stop</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomnav}>
                <TouchableOpacity style={styles.bottomnaviconout} onPress={() => Showpage('s1')}>
                    <Image source={require('../assets/clockicon.png')} style={styles.bottomnavicon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomnaviconoutactive} onPress={() => Showpage('s2')}>
                    <Image source={require('../assets/timericon.png')} style={styles.bottomnavicon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    number: {
        color: 'white',
        fontSize: 180,
        fontWeight: 'bold',
        height: 180,
        lineHeight: 180,
        // backgroundColor: 'red'
    },
    bottomnav: {
        backgroundColor: 'black',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomnavicon: {
        width: 40,
        height: 40,
    },
    bottomnaviconoutactive: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomnaviconout: {
        width: 100,
        height: 50,
        backgroundColor: 'grey',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    small: {
        fontSize: 20,
    },
    startstop: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
    }
    ,
    start: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 2,
    },
    stop: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 2,
    }
})
export default Screen2