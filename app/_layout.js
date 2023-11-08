import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View, Stack } from "expo-router";

export default function RootLayout() {
    return (
        <GluestackUIProvider>
            <Stack screenOptions={{ header: () => null }} />
        </GluestackUIProvider>
    )
}