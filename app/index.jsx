import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
        <IonIcons name="menu" size={24} color="purple" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Seja bem-vindo </Text>
        <Text style={styles.subtitle}>Essa aqui é a home</Text>
      </View>
    </View>
  );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",       
    },
    button: {
        padding: 20,
        borderRadius: 5,
        alignSelf: "flex-start"
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#ffff",
        width: "95%",
        height: "95%",
    },
    title:{
        color: "purple",
        fontWeight: "bold",
        fontSize: 36,
    },
    subtitle: {
        color: "purple",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 10,
    }
 })