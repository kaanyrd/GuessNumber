import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameScreen = () => {
    return (
        <View style={styles.container}>
            <Text>GameScreen</Text>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})