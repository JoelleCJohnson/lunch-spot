import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const RestaurantContext = createContext(null)

export default function RootLayout() {
    const [thisRest, setThisRest] = useState()

    return (
        <GluestackUIProvider config={config}>
            <RestaurantContext.Provider value={{ thisRest, setThisRest }}>
                <Stack screenOptions={{ header: () => null }} />
            </RestaurantContext.Provider>
        </GluestackUIProvider>
    )
}
