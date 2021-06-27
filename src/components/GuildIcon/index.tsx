import React from "react";

import { 
    View,
    Image
} from 'react-native';

import { styles } from "./style";

export function GuildIcon() 
{
    const uri = "https://img2.gratispng.com/20180427/wvq/kisspng-discord-logo-computer-icons-reddit-zongzi-14-0-1-5ae3de249d00b2.2332496115248829806431.jpg";
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}