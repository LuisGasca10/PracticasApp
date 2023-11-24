import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
    text: string;
}

const BoxOpcions = ({ text }: Props) => {
    return (

        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View></TouchableOpacity>

    )
}

export default BoxOpcions

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 16



    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600',

    }
})