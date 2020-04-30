import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = ({navigation}) => {
    const logOut = () => {
        Alert.alert(
          'Đăng xuất',
          'Bạn có muốn đăng xuất không?',
          [
            {
              text: 'Không',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Có', onPress: () => navigation.navigate('Login')},
          ],
          {cancelable: false},
        );
      }
    return (
        <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <Image
            style ={{height: 200, width: 360}}
            source ={{uri: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/p720x720/83954360_1380320318814527_7819283580672016384_o.jpg?_nc_cat=103&_nc_oc=AQkmHH7Ijpcbgls_a5aEnHMFAVSWBmUGazm11Ip6Mf6AI81MtUuEJ974EIXGDM4mvqScjiCgCGvoJp6PqSJanLKE&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=97d0efaaa6f5bf53e46dbc20c5645c1c&oe=5EBE776B'}}
          />
        </View>
        <Image
          style={styles.avatar}
          source = {{uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/p960x960/83394816_1368467429999816_6466441063652392960_o.jpg?_nc_cat=102&_nc_oc=AQnr19cmeipr8heUg4mLKBWKnsFpYd94wDCki3tR_zx37fFBdT_XOWewqPKIjgQWjM0Ee8uB7fEQGftVKiHKvfWA&_nc_ht=scontent.fdad3-1.fna&_nc_tp=6&oh=0efe31b0e0507548a19853821c752202&oe=5EFAD46A'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Đường Đức Linh</Text>
            <Text style={styles.info}>Mobile developer</Text>
            <Text style={styles.info}>Email: linhddpd02725@fpt.edu.vn</Text>
            <TouchableOpacity style={styles.buttonLogout} onPress={() => logOut()}>
                <Text style={styles.textLogout}>ĐĂNG XUẤT</Text>  
              </TouchableOpacity>      
          </View>
        </View>
        </ScrollView>
      </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        height: 200,
        backgroundColor: 'rgb(232,133,130)',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 24,
        color: "black",
        fontWeight: 'bold',
    },
    info: {
        fontSize: 16,
        color: "black",
        marginTop: 10
    },
    buttonLogout: {
        marginTop: 50,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 15,
        backgroundColor: 'rgb(232,133,130)',
    },
    textLogout: {
        color: 'white',
        fontSize: 18,
    }
})
