import React, {useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import WebView from 'react-native-webview';
import Icon  from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = ({ route, navigation }) => {
    const { link } = route.params;

    const backAction = () => {
        navigation.goBack();
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack} onPress={() => { navigation.goBack() }}>
                    <Icon name="arrow-back" size={30} color='white' />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: link }} />
            </View>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
      header: {
        flex: 0.8,
        backgroundColor: 'rgb(232,133,130)',
        justifyContent: 'center',
        elevation: 8,
      },
      section: {
         flex: 9.2, 
      },
      btnBack: {
        marginLeft: 15,
      }
})
