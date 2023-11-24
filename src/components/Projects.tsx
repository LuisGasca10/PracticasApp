import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface Props {
    color: string;
    info: string;
    extraInfo: string;
}


const Projects = ({ color, extraInfo, info }: Props) => {
    return (
        <TouchableOpacity>
            <View style={{ ...styles.constainer, backgroundColor: color }}>


                <View style={{ ...styles.iconContainer }}>
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

export default Projects

const styles = StyleSheet.create({

    constainer: {
        flexDirection: 'column',
        marginBottom: 20,
        backgroundColor: 'red',
        paddingLeft: 25,
        paddingTop: 20,
        height: 200,
        borderRadius: 50,
        width: 150,
        justifyContent: 'space-around'
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 70,
        width: 70,
        borderWidth: 4,
        borderColor: 'white'
    },
    infoTaskConatiner: {
        alignItems: 'flex-start',

        right: 5,

    },

    infoTask: {
        fontWeight: '900',
        fontSize: 14,
        color: 'white',
        marginBottom: 3
    },
    extraInfoTask: {
        fontSize: 10,
        color: 'white'
    },

})