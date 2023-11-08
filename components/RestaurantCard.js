import { Box, Image, Heading, Text, Pressable } from "@gluestack-ui/themed"
import { Link } from "expo-router"


export default function RestaurantCard({ restaurant }) {
    return (
        <Link href="/details" asChild>
            <Pressable>
                <Box
                    backgroundColor='$backgroundLight50' p={12} mb={16} rounded="$xl">
                    <Image alt={restaurant.name} source={{ uri: restaurant.photo_url }} w="full" h={160} rounded="$lg" />
                    <Heading>{restaurant.name}</Heading>
                    <Text>{restaurant.address}</Text>
                </Box>
            </Pressable>
        </Link>
    )
}