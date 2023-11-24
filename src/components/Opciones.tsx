import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface Props {
    texto: string;
    color: string;
}

const Opciones = ({ color, texto }: Props) => {
    return (
        <View style={{ ...styles.containeer, backgroundColor: color }}>
            <Text style={styles.text} >{texto}</Text>
        </View>
    )
}

export default Opciones

const styles = StyleSheet.create({
    containeer: {
        height: 80,
        marginVertical: 10,
        borderRadius: 16,
        justifyContent: 'center',
        paddingLeft: 32
    },

    text: {
        fontSize: 18,
        fontWeight: '800',

    }
})