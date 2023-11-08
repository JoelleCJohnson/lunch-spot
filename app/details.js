import { Text } from "@gluestack-ui/themed";
import { useContext } from "react";
import { RestaurantContext } from "./_layout";

export default function Details(){
    const thisRest = useContext(RestaurantContext)
    return(
        <Text>Details</Text>
    )
}