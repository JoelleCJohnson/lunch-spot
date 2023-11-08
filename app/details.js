import { Box, Heading, Link, Pressable, Text, Image } from "@gluestack-ui/themed";
import { useContext } from "react";
import { RestaurantContext } from "./_layout";
import { SafeAreaView } from "react-native";

export default function Details() {
    const { thisRest } = useContext(RestaurantContext)
    return (
        <Box px={8} py={60} bgColor="$blue100" flex={1} alignItems="center">
            <Heading size="4xl" color="$blue800">{thisRest.name}'s Menu</Heading>
            <Text color="$blue800">{thisRest.address}</Text>
            <Text>{thisRest?.rating && '⭐️'.repeat(thisRest.rating)}</Text>
            <Image w="$full" h={250} alt={thisRest.name} source={{ uri: thisRest.photo_url }} rounded="$lg" />
            <Link href={thisRest.menu_url}>
                    <Text p={20} fontWeight="600" color="$blue800">Press here for Menu</Text>
            </Link>
        </Box>
    )
}