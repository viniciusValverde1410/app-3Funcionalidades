import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Layout({ }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
            <Drawer.Screen name="index" options={
                {
                    title: "Home",
                    drawerLabel: "Home",
                    headerShown: false,
                    headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="calculator" options={
                {
                    title: "Calculadora",
                    drawerLabel: "Calculadora",
                    headerBackgroundColor: "purple",
                    // headerShown: false,
                    // headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="calculator-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="counter" options={
                {
                    title: "Contador",
                    drawerLabel: "Contador",
                    headerBackgroundColor: "purple",
                    // headerShown: false,
                    // headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen name="passwordGenerator" options={
                {
                    title: "Gerador de senha",
                    drawerLabel: "Gerador de senha",
                    headerBackgroundColor: "purple",
                    // headerShown: false,
                    // headerLeft: true,
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name="key-outline" size={size} color={color} />
                    ),
                }}
            />

        </Drawer>
        </GestureHandlerRootView>
    )
}