import React from "react";

import { 
    View,
    Text,
    
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    hasCheck?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheck = false,
    ...rest
} : Props) {
    const { secondary40,secondary50, secondary70, secondary85 } = theme.colors;

    return (
        <RectButton 
            {...rest}
        >
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <LinearGradient 
                    style={[ styles.content, { opacity: checked ? 1 : 0.4}]} 
                    colors={[checked ? secondary85 : secondary50, secondary40]}    
                >
                    {hasCheck &&
                        <View style={
                            checked ? styles.checked : styles.check
                        }/>
                    }
                    <Icon 
                            width={48}
                            height={48}
                        />
                    <Text style={styles.title}>
                            {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>

    );
}