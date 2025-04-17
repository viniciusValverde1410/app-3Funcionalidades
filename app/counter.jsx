import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>

            <Text style={styles.counter}>{counter}</Text>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => setCounter(counter + 1)}>
                    <Text style={styles.buttonText}>+1</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.decrement]} onPress={() => setCounter(counter - 1)}>
                    <Text style={styles.buttonText}>-1</Text>
                </Pressable>

                <Pressable style={[styles.button, styles.resetButton]} onPress={() => setCounter(0)}>
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffff",
        width: "98%",
        height: "96%",
        margin: 20,
    },
    counter: {
        fontSize: 50,
        fontWeight: "bold",
        color: "purple",
        marginBottom: 20,
    },
    title: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 36,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#FF00FF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonContainer: {
        gap: 10,
    },
    decrementButton: {
        backgroundColor: "#FF00FF",

    },
    resetButton: {
        backgroundColor: "#FF69B4",

    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },


});