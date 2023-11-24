import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Task from '../components/Task';
import Projects from '../components/Projects';


interface TaskInfo {
    id: number;
    info: string;
    color: string;
    extraInfo: string;
}

const arrayDeOpciones: TaskInfo[] = [
    { id: 1, info: 'Opción 1', color: '#ffb6b9', extraInfo: 'Información adicional 1' }, // Color pastel - rosa claro
    { id: 2, info: 'Opción 2', color: '#a9cce3', extraInfo: 'Información adicional 2' }, // Color pastel - azul claro
    { id: 3, info: 'Opción 3', color: '#a3e4d7', extraInfo: 'Información adicional 3' }, // Color pastel - verde menta
    { id: 4, info: 'Opción 4', color: '#f9dcc4', extraInfo: 'Información adicional 4' }, // Color pastel - naranja claro
    { id: 5, info: 'Opción 5', color: '#d7a9e3', extraInfo: 'Información adicional 5' }, // Color pastel - lila claro
    { id: 6, info: 'Opción 6', color: '#f3c178', extraInfo: 'Información adicional 6' }, // Color pastel - amarillo claro
    { id: 7, info: 'Opción 7', color: '#f5b7b1', extraInfo: 'Información adicional 7' }, // Color pastel - rosa suave
    { id: 8, info: 'Opción 8', color: '#d2b4a9', extraInfo: 'Información adicional 8' }, // Color pastel - marrón claro
    { id: 9, info: 'Opción 9', color: '#d9d9d9', extraInfo: 'Información adicional 9' }, // Color pastel - gris claro
    { id: 10, info: 'Opción 10', color: '#a3a3a3', extraInfo: 'Información adicional 10' }, // Color pastel - gris medio
];



const Screen2 = () => {

    const renderTask = (tasks: TaskInfo[]) => {
        return (
            tasks.map(({ color, extraInfo, id, info }) => <Task color={color}
                extraInfo={extraInfo}
                key={id} info={info}
            />
            )

        )
    }

    const renderProjectos = (tasks: TaskInfo[]) => {
        return (
            tasks.map(({ color, extraInfo, id, info }) => <Projects color={color}
                extraInfo={extraInfo}
                key={id} info={info}
            />
            )

        )
    }


    return (


        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#F9BC7B'}
            />
            {/*  Contenedor Imagen perfil*/}
            <View style={styles.containerProfile}>
                <View style={{ ...styles.profileContainer, backgroundColor: '#6288E8' }}>
                    <Ionicons name='person' color='white' size={65} />
                </View>

                <View style={styles.infoTaskConatiner}>
                    <Text style={styles.infoTask}>Guillermo Gasca</Text>
                    <Text style={styles.extraInfoTask} >Ejemplo</Text>
                </View>
            </View>



            <ScrollView>

                <View style={styles.containerContenido}>
                    {/* Contenedor Titulo Task */}
                    <View style={styles.containerTask}>
                        <Text style={styles.titleTask} >My Task</Text>

                        <TouchableOpacity>
                            <View style={styles.btnCalendar} >
                                <Ionicons name='calendar-outline' size={25} color={'white'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <ScrollView style={{ height: 195 }}>

                            {renderTask(arrayDeOpciones)}

                        </ScrollView>
                    </View>




                    <View>
                        <Text
                            style={{ ...styles.titleTask, marginVertical: 10 }}
                        >Activity Projects
                        </Text>
                    </View>


                    <View style={styles.projectsContainer}>
                        {renderProjectos(arrayDeOpciones)}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    containerContenido: {
        paddingHorizontal: 25,

    },

    containerProfile: {
        backgroundColor: '#F9BC7B',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    containerTask: {
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    titleTask: {
        fontWeight: '700',
        fontSize: 26,
        color: '#182E49',

    },

    btnCalendar: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: '#339297',
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 80,
        width: 80,
    },
    infoTaskConatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        right: 15

    },

    infoTask: {
        fontWeight: '900',
        fontSize: 24,
        color: '#182E49',
        marginBottom: 3
    },
    extraInfoTask: {
        fontSize: 20,
        color: '#A09990'
    }



})