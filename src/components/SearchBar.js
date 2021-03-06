import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.iconStyle}/>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1, // takes up entire space
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
});

export default SearchBar;