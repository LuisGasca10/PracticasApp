import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import BoxOpcions from '../components/BoxOpcions';
import Opciones from '../components/Opciones';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

interface Boxes {
    texto: string;
    id: number;
}

interface Opciones {
    id: number;
    texto: string;
    color: string;
}

const cajas: Boxes[] = [
    { texto: 'sleep', id: 1 },
    { texto: 'walk', id: 2 },
    { texto: 'relax', id: 3 },
    { texto: 'morning', id: 4 },
];

const arrayDeOpciones: Opciones[] = [
    { id: 1, texto: 'Opción 1', color: '#ffb6b9' }, // Color pastel - rosa claro
    { id: 2, texto: 'Opción 2', color: '#a9cce3' }, // Color pastel - azul claro
    { id: 3, texto: 'Opción 3', color: '#a3e4d7' }, // Color pastel - verde menta
    { id: 4, texto: 'Opción 4', color: '#f9dcc4' }, // Color pastel - naranja claro
    { id: 5, texto: 'Opción 5', color: '#d7a9e3' }, // Color pastel - lila claro
    { id: 6, texto: 'Opción 6', color: '#f3c178' }, // Color pastel - amarillo claro
    { id: 7, texto: 'Opción 7', color: '#f5b7b1' }, // Color pastel - rosa suave
    { id: 8, texto: 'Opción 8', color: '#d2b4a9' }, // Color pastel - marrón claro
    { id: 9, texto: 'Opción 9', color: '#d9d9d9' }, // Color pastel - gris claro
    { id: 10, texto: 'Opción 10', color: '#a3a3a3' }, // Color pastel - gris medio
];

const Screen1 = ({ }) => {

    const renderBoxes = (data: Boxes[]) => {
        return data.map((item) =>
            (<BoxOpcions key={item.id} text={item.texto} />))
    }

    const renderBoxes2 = (data: Opciones[]) => {
        return data.map(({ color, texto, id }) => (<Opciones color={color} key={id} texto={texto} />))
    }

    return (

        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'white', }}>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
            />
            <View style={styles.container} >
                {/* Caja buscador */}
                <View style={styles.buscador} >
                    <View style={{ height: 30, top: 7, marginRight: 10 }}><Ionicons name='search' size={30} color="grey" /></View>

                    <TextInput
                        placeholder='Search Headspace'
                        style={styles.textBuscador}
                    />
                </View>
                {/* Botones  */}
                <View style={styles.conatinerBoxes}>
                    {renderBoxes(cajas)}
                </View>

                <ScrollView style={{ marginTop: 15 }}>

                    {renderBoxes2(arrayDeOpciones)}
                </ScrollView>

            </View>
        </SafeAreaView>



    )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    buscador: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 80,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        flexDirection: 'row',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        alignContent: 'center',
        paddingLeft: 23,
        borderWidth: 1,
        borderColor: 'grey'

    },
    textBuscador: {
        fontSize: 16,
        fontWeight: '600',
        color: 'grey'
    },
    conatinerBoxes: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20

    }
})