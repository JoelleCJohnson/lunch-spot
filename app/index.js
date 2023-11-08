import { Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <>
            <Text style={{ fontSize: 48 }}>Home</Text>
            <Link href={"/settings"}>Settings</Link>
        </>
    )
}