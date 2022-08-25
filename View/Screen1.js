import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Screen1 = ({ navigation }) => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [ampm, setAmpm] = useState('AM')
    useEffect(() => {
        setHour(getHour)
        setMinute(getMinute)
        setAmpm(new Date().getHours() > 12 ? 'PM' : 'AM')
    }, [])
    const getHour = () => {
        const date = new Date()
        // return date.getHours()
        // console.log(date.getHours())
        setHour(date.getHours())
    }
    const getMinute = () => {
        const date = new Date()
        date.getMinutes() < 10 ? setMinute(`0${date.getMinutes()}`) : setMinute(date.getMinutes())
    }
    const getAMPM = () => {
        const date = new Date()
        setAmpm(date.getHours() > 12 ? 'PM' : 'AM')
    }
    setInterval(() => {
        getHour()
        getMinute()
        getAMPM()
    }, 1000);


    const Showpage = (page) => {
        navigation.navigate(page)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.hour}>{hour}</Text>
            <Text style={styles.minute}>{minute}</Text>
            <Text style={styles.ampm}>{ampm}</Text>

            <View style={styles.bottomnav}>
                <TouchableOpacity style={styles.bottomnaviconoutactive} onPress={() => Showpage('s1')}>
                    <Image source={require('../assets/clockicon.png')} style={styles.bottomnavicon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomnaviconout} onPress={() => Showpage('s2')}>
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
    hour: {
        color: 'white',
        fontSize: 250,
        fontWeight: 'bold',
        height: 250,
        lineHeight: 250,
        // backgroundColor: 'red'

    },
    minute: {
        color: 'grey',
        fontSize: 250,
        fontWeight: 'bold',
        height: 250,
        lineHeight: 250,
        // backgroundColor: 'red'
    },
    ampm: {
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
    }
})
export default Screen1