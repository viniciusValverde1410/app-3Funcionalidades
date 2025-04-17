import { View, Text, StyleSheet } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <IonIcons name="add-circle-outline" size={74} color="purple" />
                <Text style={styles.title}>Seja bem-vindo </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
    title: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 36,
    },
});