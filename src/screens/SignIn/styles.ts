import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        marginTop: -12,
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 44,
    },
});