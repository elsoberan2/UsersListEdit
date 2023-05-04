import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { users } from '../resources/usuariosData';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PantallaUsuarios({navigation}) {

return (
    <View style={styles.container}>
        {
            users.map(({ id, name, role, address, salary }) => 
                (
                    <ListItem
                        key={id}
                        title={name}
                        trailing={<Ionicons name="color-wand-outline" size={30} color="#cc0066" />}
                        onPress = {() => navigation.navigate("Editar", {id, name, role, address, salary})}
                    />
                )
            )
        }
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});