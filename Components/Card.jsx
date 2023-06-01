import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ icon, title, subtitle, subtitle2 }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{subtitle2}</Text>
            <View style={styles.iconContainer}>
                <Text style={styles.subtitle}>{subtitle}</Text>
                {icon}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 5
    },
    title: {
        // fontFamily: 'ABeeZee',
        fontWeight: 400,
        fontSize: 20
    },
    subtitle: {
        // fontFamily: 'ABeeZee',
        fontWeight: 400,
        fontSize: 17
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    }
})