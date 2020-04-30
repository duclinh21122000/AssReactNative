import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    BackHandler, Alert
} from 'react-native';

const HomeScreen = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const backAction = () => {
        Alert.alert("Hold on!", "Bạn có muốn thoát khỏi ứng dụng không?", [
          {
            text: "Không",
            onPress: () => null,
            style: "cancel"
          },
          { text: "Có", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };

    useEffect(() => {
        getNew()
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [getNew]);

    const getNew = () => {
        return fetch(
            'https://gist.githubusercontent.com/duclinh21122000/66e63de212ae94f65f0cb76ca134dd09/raw/b8f27eff2177c71587c4941a75f534dbe8a68f49/new.json',
        )
            .then(response => response.json())
            .then(json => {
                setNews(json.new_array);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="rgb(232,133,130)" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source = {require('../image/cooltext355905380449505.png')}
                    style={{width: 150, height: 50}}
                />
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={news}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={()=> {navigation.navigate('Detail', item)}}>
                            <View
                            style={styles.containerFlat}>
                            <View style={styles.rightNew}>
                                <Text style={styles.titleNew}>{item.title}</Text>
                                <Text style={styles.pubDate}>{item.pubDate}</Text>
                            </View>
                            <View style={styles.leftNew}>
                                <Image style={{ width: 100, height: 90, borderRadius: 6 }}
                                    source={{ uri: item.image }}
                                    resizeMode="contain" />
                            </View>
                        </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default HomeScreen;

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
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    },
    flatList: {
        flex: 9,
    },
    containerFlat: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#CCC',
        margin: 5
    },
    rightNew: {
        flex: 6,
        flexDirection: "column",
        paddingLeft: 5,
        justifyContent: 'center',
    },
    titleNew: {
        fontSize: 16,
        fontWeight: 'bold',
        // textAlign: 'justify',
        justifyContent: 'center',
    },
    pubDate: {
        fontSize: 11,
    },
    leftNew: {
        flex: 4,
        alignItems: 'center',
    }
});
