import React from "react";

import {
    Text,
    Image,
    View,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscodImg from '../../assets/discord.png';
import { styles } from './style';

type Props = RectButtonProps & {
    title: String;
}
export function ButtonIcon({ title, ...rest } : Props) {
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscodImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    );
}