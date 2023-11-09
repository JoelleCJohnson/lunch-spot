import { useContext, useEffect, useState } from "react"
import { ScrollView, View } from "react-native"
import { Fab, FabLabel } from "@gluestack-ui/themed"
import { router } from "expo-router"
import RestaurantCard from "./RestaurantCard"
import { RestaurantContext } from "../app/_layout"


export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState()
    
    useEffect(() => {
        fetch('https://api.bocacode.com/api/restaurants')
        .then(res => res.json())
        .then(setRestaurants)
        .catch(alert)
    }, [])

    const { setThisRest } = useContext(RestaurantContext)

    const chooseRandom = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length)
        setThisRest(restaurants[randomIndex])
        router.push("/details")
    }

    return (
        <View>
            <ScrollView>
                {restaurants && restaurants.map(rest => (
                    <RestaurantCard key={rest._id} restaurant={rest} />
                ))}
            </ScrollView>
            <Fab 
                size="lg"
                bgColor="$blue700"
                onPress={chooseRandom}
            >
               <FabLabel>🎲</FabLabel>
            </Fab>
        </View>
    )
}