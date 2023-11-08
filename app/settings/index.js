import { Link } from "expo-router";
import { Text } from "react-native";

export default function Settings() {
    return (
        <>
            <Text style={{ fontSize: 48 }}>Settings</Text>
            <Link href="/">Home</Link>
        </>
    )
}