import React from "react";

import { 
    View,
     Text 
} from 'react-native';

import { styles } from "./style";
import { Avatar } from "../Avatar";
export function Profile() 
{

    return (

        <View
            style={styles.container}
        >
            <Avatar
                urlImage="https://version.aplicativodeentrega.com.br/uploads/16081547511039099488.png"
            />
            <View>
                <View
                    style={styles.user}
                >
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Hari Dasa
                    </Text>
                </View>

                <Text style={styles.message}>
                        Hoje é dia de vitória
                    </Text>
            </View>
        </View>
    );
}