import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import { Feather, FontAwesome } from '@expo/vector-icons';

const Playground = () => {
    return (
        <View style={{ flex: 1, padding: 10, gap: 15 }}>

            <Card
                title="player equipment not applied"

                icon={<FontAwesome name="pencil-square-o" size={24} color="#F58220" />}
            />
            <Card
                subtitle2="union player equipment"

                icon={<Feather name="plus" size={24} color="#F58220" />}
            />
            <Card
                subtitle2="standalone device"

                icon={<Feather name="plus" size={24} color="#F58220" />}
            />
        </View>
    )
}

export default Playground

const styles = StyleSheet.create({})