import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null); // value of result is null because it is a null object but after the request it will become an object

    const id = navigation.getParam("id"); // Give me the id parameter
    

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                scrollEnabled={false}
                data={result.photos}
                keyExtractor={(photo) => photo} // the image url itself can be used as a key
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10
    },
    nameStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 20,
        marginVertical: 10,
        textDecorationLine: "underline"
    }
});

export default ResultsShowScreen;