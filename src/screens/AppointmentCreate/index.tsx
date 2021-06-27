import React, { ReactNode, useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { 
    Text,
    View,
} from "react-native";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";


export function AppointmentCreate() {

    const [category,setCategory] = useState('');

    function handleCategorySelect(categoryId: string)
    {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    return (
        <Background>
            <Header
                title="Agendar Partida"
            />

           <Text style={styles.label}>
               Categoria
           </Text>

           <CategorySelect 
                hasCheck
                categorySelected={category}
                setCategory={handleCategorySelect}
           />

           <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image}/>
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                        <Feather 
                            name="chevron-right"
                            color={theme.colors.heading}
                            size={18}
                        />
                    </View>
                </RectButton>
           </View>
        </Background>
    );
}