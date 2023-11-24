import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface Props {
    color: string;
    info: string;
    extraInfo: string;
}


const Task = ({ color, extraInfo, info }: Props) => {
    return (
        <TouchableOpacity>
            <View style={styles.constainer}>


                <View style={{ ...styles.iconContainer, backgroundColor: color }}>
                    <Ionicons name='paper-plane' color='white' size={20} />
                </View>

                <View style={styles.infoTaskConatiner}>
                    <Text style={styles.infoTask}>{info.toUpperCase()}</Text>
                    <Text style={styles.extraInfoTask} > {extraInfo.toUpperCase()}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

}

export default Task

const styles = StyleSheet.create({

    constainer: {
        flexDirection: 'row',
        marginBottom: 20
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 50,
        width: 50,
    },
    infoTaskConatiner: {
        justifyContent: 'center',
        left: 10,

    },

    infoTask: {
        fontWeight: '900',
        fontSize: 17,
        color: '#182E49',
        marginBottom: 3
    },
    extraInfoTask: {
        fontSize: 12,
        color: '#A09990'
    }
})