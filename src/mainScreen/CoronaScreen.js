import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl, BackHandler, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';

const CoronaScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(true);
    const [arrayholder, setArrayholder] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getData();
      }, [getData]);

    const getData = () =>{
        return fetch('https://ncovi.huynhhieu.com/api.php?code=external&fbclid=IwAR3xfBEMzEe_o1kHU5ueF6Wox_IZWrguSPr2rii07ksAt6u08HJ81tYqhlc')
        .then(response => response.json())
        .then(responseJson => {
            setData(responseJson.data),
            setIsLoading(false),
            setIsRefreshing(false)
            setArrayholder(responseJson.data);
        })
        .catch(error => {
            console.error(error);
            
        });
    }

    const SearchFilterFunction = text => {
        const newData = arrayholder.filter(function(item) {
          const itemData = item.country ? item.country.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setData(newData), setText(text);
    };

    const onRefresh = () =>{
        setData(data),
        getData()
    }
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="rgb(232,133,130)" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source = {require('../image/cooltext355905380449505.png')}
                    style={{width: 150, height: 50}}
                />
            </View>
            <View style={styles.containSearch}>
                <TextInput
                    style = {styles.inputSearch}
                    placeholder = "Tìm kiếm..."
                    placeholderTextColor = 'white'
                    onChangeText={text => SearchFilterFunction(text)}
                    value={text}
                    underlineColorAndroid="transparent"
                />
                <TouchableOpacity style={styles.btnSearch}>
                    <Icon name="search" size={20} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
            <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <View style={styles.listItem}>
                            <Text style={styles.txtNameNation}>Quốc gia: {item.country}</Text>
                            <View style={styles.data}>
                                <View style={styles.boxCase}>
                                    <View style={styles.numCase}>
                                        <Text style={{fontSize: 20, color: '#FFD700', fontWeight: 'bold' }}>{item.cases}</Text>
                                    </View>
                                    <View style={styles.txtCase}>
                                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Nhiễm bệnh</Text>
                                    </View>
                                </View>
                                <View style={styles.boxDeath}>
                                    <View style={styles.numDeath}>
                                        <Text style={{fontSize: 20, color: '#F08080', fontWeight: 'bold' }}>{item.deaths}</Text>
                                    </View>
                                    <View style={styles.txtDeath}>
                                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Tử vong</Text>
                                    </View>
                                </View>
                                <View style={styles.boxRecovered}>
                                    <View style={styles.numRecovered}>
                                        <Text style={{fontSize: 20, color: '#2E8B57', fontWeight: 'bold' }}>{item.recovered}</Text>
                                    </View>
                                    <View style={styles.txtRecovered}>
                                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Bình phục</Text>
                                    </View>
                                    </View>
                            </View>
                        </View>
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing = {isRefreshing}
                            onRefresh = {onRefresh.bind(this)}
                            
                        />
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    )
}

export default CoronaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    header: {
        flex: 0.8,
        backgroundColor: 'rgb(232,133,130)',
        alignItems: 'center',
        elevation: 10,
        justifyContent: 'center'
    },
    containSearch: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: 10,
    },
    inputSearch: {
        height: 50,
        width: 350,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'rgb(232,133,130)',
        color: 'white',
        fontSize: 16,
    },
    btnSearch: {
        position: 'absolute',
        top: 15,
        right: 45,
    },
    main: {
        flex: 8.5,
        marginTop: 40,
    },
    listItem:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
    },
    txtNameNation: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    data: {
        flex: 9,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    boxCase: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#F5F5DC',
        alignItems: 'center'
    },
    boxDeath: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#FFF0F5',
        marginLeft: 15,
        alignItems: 'center'
    },
    boxRecovered: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#F0FFF0',
        marginLeft: 15,
        alignItems: 'center',
    },
    numCase: {
        flex: 6,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtCase: {
        flex: 4,
        backgroundColor: '#FFD700',
        borderRadius: 8,
        elevation: 4,
        width: '100%',
        alignItems: 'center',
    },
    numDeath: {
        flex: 6,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtDeath: {
        flex: 4,
        backgroundColor: '#F08080',
        elevation: 4,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    numRecovered: {
        flex: 6,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtRecovered: {
        flex: 4,
        backgroundColor: '#2E8B57',
        elevation: 4,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
})
