import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    content: {
        flex: 1,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
    },
    category: {
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        marginRight: 12,
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 9,
        marginLeft: 7,
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    player: {
        fontFamily: theme.fonts.text500,
        fontSize: 10,
        marginLeft: 7,
        marginRight: 24
    }
});