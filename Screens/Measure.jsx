import { View } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import { Feather } from '@expo/vector-icons';

const Measure = () => {
    return (
        <View style={{ padding: 10 }}>

            <Card
                subtitle2="inspection date"

                icon={<Feather name="plus" size={24} color="#F58220" />}
            />
        </View>
    )
}

export default Measure

