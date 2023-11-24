import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTab } from './BottomTab';
import AjustesScreen from '../screens/AjustesScreen';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerPersonalizado {...props} />}
        >
            <Drawer.Screen name="Home" component={BottomTab} />
            <Drawer.Screen name="Ajustes" component={AjustesScreen} />
        </Drawer.Navigator>
    );
}

const DrawerPersonalizado = ({ navigation }: DrawerContentComponentProps) => {
    return (

        <>

            <DrawerContentScrollView style={{}}>

                <View style={styles.circle3}></View>
                <View style={styles.circle2}></View>
                <View style={styles.circle}></View>



                {/* Contenedor de info Perfil */}
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://i.pinimg.com/564x/bb/04/a5/bb04a51959c16f09de4ef21b1cfcb2e0.jpg'
                        }}
                    />
                    <Text style={styles.textProfile} >Guillermo Gasca</Text>
                </View>
                {/* Contenedor De botones del drawer */}
                <View style={styles.btnContainer}>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home'); }}
                    >
                        <View style={styles.btn}>
                            <Ionicons name='home' size={25} />
                            <Text style={styles.txtBtn} >Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Ajustes'); }}

                    >
                        <View style={styles.btn}>
                            <Ionicons name='settings' size={25} />
                            <Text style={styles.txtBtn}>Ajustes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home'); }}
                    >
                        <View style={styles.btn}>
                            <Ionicons name='home' size={25} />
                            <Text style={styles.txtBtn} >Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Ajustes'); }}

                    >
                        <View style={styles.btn}>
                            <Ionicons name='settings' size={25} />
                            <Text style={styles.txtBtn}>Ajustes</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home'); }}
                    >
                        <View style={styles.btn}>
                            <Ionicons name='home' size={25} />
                            <Text style={styles.txtBtn} >Home</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Ajustes'); }}

                    >
                        <View style={styles.btn}>
                            <Ionicons name='settings' size={25} />
                            <Text style={styles.txtBtn}>Ajustes</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </DrawerContentScrollView>
        </>


    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 10,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 100
    },

    textProfile: {
        fontSize: 20,
        color: '#4CA896',
        fontWeight: '600'
    },
    btnContainer: {
        marginTop: 40,
        marginLeft: 30,
    },

    btn: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center'
    },
    txtBtn: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: '600'
    },
    circle: {
        borderRadius: 100,
        backgroundColor: '#B5F0E3',
        position: 'absolute',
        height: 220,
        width: 220,
        left: -50,
        top: -40
    },
    circle2: {
        borderRadius: 350,
        backgroundColor: '#CAF3EA',
        position: 'absolute',
        height: 310,
        width: 310,
        left: -100,
        top: -80
    },
    circle3: {
        borderRadius: 350,
        backgroundColor: '#E1F5F3',
        position: 'absolute',
        height: 390,
        width: 390,
        left: -130,
        top: -120
    }

});