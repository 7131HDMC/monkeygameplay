import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 50,
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 36,
        paddingTop: 26,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 28
    },
    subtitle: {
        marginTop: -32,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 24,
        fontFamily: theme.fonts.title500,
        lineHeight: 18

    },
});