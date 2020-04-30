import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'

const loginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _signIn = () => {
        if(email.length > 0 && password.length > 0){
            if(email === 'admin' && password === '123456'){
                navigation.navigate('Main');
                setEmail('');
                setPassword('');
            }else{
                showToastWithGravityAndOffset();
            }
        }else{
            alert('Vui lòng nhập');
        }
    }

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
          "Tên đăng nhập hoặc mật khẩu không đúng!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      };

    

    return (
        <View style={styles.container}>
            <View style={styles.down}>
            <Image
                    source={require('./image/cooltext355905380449505.png')}
                    style={{width: 300, height: 80}}
                />
            <Text style={styles.title}>ĐĂNG NHẬP</Text>
            <TextInput
                    style={styles.textInput}
                    placeholder="Tên đăng nhập"
                    placeholderTextColor="white"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            <TextInput
                style={styles.textInput}
                placeholder="Mật khẩu"
                placeholderTextColor="white"
                secureTextEntry={true}
                autoCapitalize='none'
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <TouchableOpacity style={styles.loginButton} onPress={() => _signIn()}>
                <Text style={styles.loginButtonTitle}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(232,133,130)',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    up:{
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleLogin:{
        color: 'white',
        marginTop: 10,
        fontSize: 24,
    },
    down:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    
    textInput: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        width: 300,
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    loginButton: {
        marginTop: 20,
        width: 300,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius: 8,
        backgroundColor: 'rgb(221,97,97)',
    },
    loginButtonTitle: {
        fontSize: 18,
        color: 'white',
    },
})
