import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = (operation) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let res;

        // Validação = isNan( is not a number)
        // Se o valor não for um número, exibe um alerta
        if (isNaN(number1) || isNaN(number2)) {
            alert("Por favor, insira números válidos.");
            return;
        } switch (operation) { //switch = como se fosse um else com varios case dentro, caso o valor não seja válido, ele não faz nada
            case 'add':
                res = number1 + number2;
                break;
            case 'subtract':
                res = number1 - number2;
                break;
            case 'multiply':
                res = number1 * number2;
                break;
            case 'divide':
                if (number2 !== 0) {
                    res = number1 / number2;
                } else {
                    alert("Divisão por zero não é permitida.");
                    return;
                }
                break;

            default:
                return;
        }

        setResult(res);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Seja bem-vindo</Text>
                <Text style={styles.title}>A calculadora</Text>
                <IonIcons name="calculator-outline" size={54} color="purple" />
            </View>

            <View style={styles.content}>

                <TextInput
                    style={styles.input}
                    placeholder="Número 1"
                    keyboardType="numeric"
                    value={num1}
                    onChangeText={setNum1}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Número 2"
                    keyboardType="numeric"
                    value={num2}
                    onChangeText={setNum2}
                />
            </View>

            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => calculate('add')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate('subtract')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate('multiply')}>
                        <Text style={styles.buttonText}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => calculate('divide')}>
                        <Text style={styles.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultContainer}>
                {result !== null && (
                    <Text style={styles.result}>Resultado: {result}</Text>
                )}
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    contentTitle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffff",
        width: "95%",
        height: "20%",
        margin: 20,
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffff",
        width: "90%",
        height: "20%",
        margin: 20,
    },
    title: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 36,
    },
    input: {
        textAlign: 'center',
        height: 40,
        borderColor: 'purple',
        borderWidth: 0.111,
        marginVertical: 10,
        width: '15%',
        paddingHorizontal: 10,
    },
    input:{
        textAlign: 'center',
        height: 40,
        borderColor: 'purple',
        borderWidth: 0.111,
        marginVertical: 10,
        width: '15%',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
        height: '10%',
        gap: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    resultContainer: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '10%',
        fontSize: 24,
        borderRadius: 5,
        color: 'white',
    },
    result: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});