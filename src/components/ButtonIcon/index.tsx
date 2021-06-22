import React from "react";

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscodImg from '../../assets/discord.png';
import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: String;
}
export function ButtonIcon({ title, ...rest } : Props) {
    return(
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscodImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}