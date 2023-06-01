import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import im1 from "../assets/Maskgroup.png"
import im12 from "../assets/mask.png"
const Setting = () => {

    const { width } = useWindowDimensions()

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
            <View>
                <Card
                    title="inspection date"
                    subtitle="2023/03/12"
                    icon={<FontAwesome name="pencil-square-o" size={24} color="#F58220" />}
                />
            </View>

            <View style={{ backgroundColor: "#fff", marginVertical: 15 }}>
                <Card
                    title="Home photo"
                    subtitle="photo x1"
                    icon={<Entypo name="camera" size={24} color="#F58220" />}
                />
                <View style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: "gainsboro" }} />

                <Image source={im1} style={[styles.img, { width: width / 2 }]} />
            </View>


            <View>
                <Card
                    title="Inspection site"
                    subtitle="photo x3"
                    icon={<Entypo name="camera" size={24} color="#A1A1A1" />}
                />

                <View style={styles.imgsContainer}>
                    <Image source={im12} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                    <Image source={im12} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                    <Image source={im12} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                </View>
            </View>


            <View>
                <Card
                    title="Play ground"
                    subtitle="photo x3"
                    icon={<Entypo name="camera" size={24} color="#A1A1A1" />}
                />

                <View style={styles.imgsContainer}>
                    <Image source={im1} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                    <Image source={im1} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                    <Image source={im1} style={[styles.img, { width: width / 5, borderRadius: 5 }]} />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    img: {
        height: 200,
        resizeMode: "cover"
        // aspectRatio: 1
    },
    imgsContainer: {
        flexDirection: "row",
        gap: 10,
        padding: 10
    }
})
export default Setting
