import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < 8; i++) {
            newPassword += chars[Math.floor(Math.random() * chars.length)];
        }
        setPassword(newPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerador de Senhas</Text>
            <Button title="Gerar Senha" onPress={generatePassword} />
            {password && <Text style={styles.password}>{password}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "purple",
        marginBottom: 20,
    },
    password: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
        color: "purple",
        backgroundColor: "#fff",
        width: "40%",
        height: "3%",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5,
    },
});