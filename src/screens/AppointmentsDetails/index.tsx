import React, { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { 
    ImageBackground,
    Text,
    View,
    FlatList
} from "react-native";


import { styles } from "./style";
import BannerImg from "../../assets/banner.png";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { ListHeader } from "../../components/ListHeader";
import { Member }  from '../../components/Member';
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon"

export function AppointmentsDetails() {

    const members =[ 
        {
            id: '1',
            username: 'Hari Dasa',
            avatar_url: 'https://avatars.githubusercontent.com/u/32579384?s=400&u=df86f804a3473474f14776410041eec7a4800dcc&v=4',
            status: 'online',
        }
    ];

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
             > 
                <View style={styles.bannerContent}>
                    <Text 
                        style={styles.title}
                    >
                        Title
                    </Text>
                    <Text 
                        style={styles.subtitle}
                    >
                        Subtitle
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 6"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={( { item } ) => (
                    <Member data={item} />
                )}
                style={styles.members}
                ItemSeparatorComponent={() => <ListDivider/>}
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    );
}