import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from 'react-native'

const Screen2 = ({ navigation }) => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [interv, setInterv] = useState()
    const [timeron, settimeron] = useState(0)
    const [stopped, setStopped] = useState(0)

    const Showpage = (page) => {
        navigation.navigate(page)
    }

    const starttimer = () => {
        settimeron(1)
        setStopped(0)
        // console.log('start timer')
        updatetimer()
        setInterv(setInterval(updatetimer, 1000))

    }

    let currsecond = second
    let currminute = minute
    let currhour = hour

    const updatetimer = () => {
        // console.log('update timer')
        if (currsecond == 60) {
            currsecond = 0
            currminute++
        }
        if (currminute == 60) {
            currminute = 0
            currhour++
        }
        currsecond++

        setSecond(currsecond)
        setMinute(currminute)
        setHour(currhour)
    }
    const stoptimer = () => {
        console.log('stop timer')
        clearInterval(interv)
        setStopped(1)
    }

    const resettimer = () => {
        console.log('reset timer')
        setSecond(0)
        setMinute(0)
        setHour(0)
        settimeron(0)
        clearInterval(interv)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{hour > 9 ? hour : "0" + hour}
                <Text style={styles.small}>HR</Text>
            </Text>
            <Text style={styles.number}>{minute > 9 ? minute : "0" + minute}
                <Text style={styles.small}>MIN</Text>
            </Text>
            <Text style={styles.number}>{second > 9 ? second : "0" + second}
                <Text style={styles.small}>SEC</Text>
            </Text>

            {timeron == 0 ?
                <View style={styles.startstop}>
                    <TouchableOpacity onPress={starttimer}>
                        <Text style={styles.start}>Start</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                        <Text style={styles.stop} onPress={stoptimer}>Stop</Text>
                    </TouchableOpacity> */}
                </View>
                :
                <View style={styles.startstop}>
                    <TouchableOpacity onPress={resettimer}>
                        <Text style={styles.reset}>Reset</Text>
                    </TouchableOpacity>

                    {stopped == 0 ? <TouchableOpacity>
                        <Text style={styles.stop} onPress={stoptimer}>Stop</Text>
                    </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={starttimer}>
                            <Text style={styles.stop}>Continue</Text>
                        </TouchableOpacity>
                    }
                </View>
            }
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
        borderRadius: 20,
    },
    reset: {
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