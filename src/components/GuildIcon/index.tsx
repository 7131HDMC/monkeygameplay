import React from "react";

import { 
    View,
    Image
} from 'react-native';

import { styles } from "./style";

export function GuildIcon() 
{
    const uri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzv6owloLbQtykoqlOvNOzYxRRSMhZR_9J49LOGWfQ_vKWT7B4sGzhH4IQ7K3QcIHSN4&usqp=CAU";
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}