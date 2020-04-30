import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const splashScreen = ({navigation}) => {
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: false
                }),
            ]),
            {
                iterations: 3,
            }
        ).start( () => {
            navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'Login',
                    },
                ]
            });
        });
    }, [])

    const amin = {
        transform : [
            {
                rotate: animatedValue.interpolate({
                    inputRange: [0,1],
                    outputRange: ['0deg', '360deg'],
                }),
            }
        ],
    };

    return (
       <View style={styles.container}>
            <Image 
                source = {require('./image/cooltext355905380449505.png')}
                style = {{width: 400, height: 120}}
            />
            <Text style={styles.title}>Tin tức sức khoẻ mỗi ngày</Text>
            <Animated.View style={[styles.loading, amin]}>
                <Icon name="loading1" size={30} color="white"/>
            </Animated.View>
        </View>
    )
}

export default splashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(232,133,130)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    loading: {
        marginTop: 70,
        alignItems: 'center',
    }
})
