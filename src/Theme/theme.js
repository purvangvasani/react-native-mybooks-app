import {StyleSheet, Dimensions} from 'react-native'

import {variable} from './variable'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const theme = StyleSheet.create({


    container:{
        flex: 1, 
        alignItems: variable.alignCenter,
    },

    loaderContainer:{
        flex: 1, 
        alignItems: variable.alignCenter, 
        justifyContent: variable.alignCenter,
    },
    
    loaderText:{
        color: '#0000ff', 
        fontSize: variable.h6, 
        fontFamily: variable.DefaultFontFamily,
    },

    loginContent:{
        alignItems: variable.alignCenter, 
        marginTop: variable.marginTop_10,
    },

    text:{
        marginTop: variable.marginTop_10+7, 
        color: variable.cPrimary, 
        fontSize: variable.fontMedium+1, 
        fontFamily: variable.DefaultFontFamily,
    },

    titleText:{
        marginTop: variable.marginTop_10-6, 
        fontFamily: variable.DefaultFontFamily, 
        fontSize: variable.h2, 
        fontWeight: variable.fontWeightBold, 
        color: variable.cPrimary,        
    },

    categoryStyle:{
        marginTop: variable.marginTop_10-2, 
        fontFamily: variable.DefaultFontFamily, 
        fontSize: variable.h6, 
        borderRadius: 10, 
        color: variable.cPrimary, 
        textAlign : variable.alignCenter, 
        borderColor: variable.cPrimary, 
        borderWidth: variable.borderWidth_1,
    
    },
    
    dividerLine:{
        borderBottomColor: 'lightgrey', 
        borderBottomWidth: variable.borderBottomWidth_1, 
        marginTop: variable.marginTop_10-5,
    },

    downloadButtonStyle:{
        width: 40,
        height: 40,
        margin: variable.margin_10
    },

    notificationIcon:{
        height: 50, width: 40
    },

    textInput:{
        borderBottomWidth: variable.borderBottomWidth_1, 
        borderBottomColor: variable.cPrimary, 
        color: variable.cPrimary, 
        fontFamily: variable.DefaultFontFamily,
    },

    errorText:{
        color: variable.cDanger, 
        fontFamily: variable.DefaultFontFamily, 
        fontSize: variable.h6
    },
    
    loginView:{
        width: width-50, 
        paddingLeft: variable.paddingLeft_15, 
        paddingRight: variable.paddingRight_15
    },

    textInput:{
        color: variable.cPrimary, 
        borderBottomWidth: variable.borderBottomWidth_1, 
        borderBottomColor: variable.cPrimary, 
        fontFamily: variable.DefaultFontFamily,
    },

    buttonText:{
        color: variable.cWhite, 
        fontFamily: variable.DefaultFontFamily
    },

    linkButtonText:{
        fontSize: variable.h6, 
        textAlign: variable.alignRight, 
        color: variable.cPrimary, 
        fontFamily: variable.DefaultFontFamily
    },

    buttonRoundRadius:{
        borderRadius: 30
    },

    iconButtonIconStyle:{
        color: variable.cPrimary, 
        marginLeft: 5,
    },

    iconButtonText:{
        color: variable.cPrimary, 
        fontFamily: variable.DefaultFontFamily
    },

    profileBackground:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: variable.cPrimary,
        height: 120,
        zIndex: 0,
        alignItems: variable.alignItems_center,
    },

    profileUserPhoto:{
        height: 150,  //150
        width: 150,  //150
        borderRadius: 75,  //75
        borderColor: variable.cWhite,
        borderWidth: 3,
        overflow: 'hidden',
        marginTop: 45,
        marginLeft: 130
    },

    profileDetailText:{
        fontWeight: variable.fontWeightBold, 
        color: variable.cPrimary, 
        fontFamily: variable.DefaultFontFamily, 
        fontSize: 18, 
        marginLeft: 40
    },

    profileButtonView:{
        flex: 1, 
        alignItems: variable.alignItems_center, 
        marginTop: variable.marginTop_10,
    },

    profileButton:{
        margin: 30, 
        borderRadius: 25
    },

    dashboardBookImage:{
        width: 120, 
        height: 180
    },

    dashboardTitle:{
        fontFamily: variable.DefaultFontFamily, 
        fontSize: variable.h6
    },

    newBadge:{
        fontFamily: variable.DefaultFontFamily, 
        fontSize: variable.h6, 
        color: variable.green, 
        marginLeft: variable.marginLeft_10
    },

    collectionImage:{
        width: 80, height: 120
    },

    collectionImageView:{
        flex: 1, 
        height: 120, 
        alignItems: variable.alignCenter, 
        justifyContent: 'space-around',
    },

    categoryBookView:{
        justifyContent: 'flex-end', 
        alignItems: variable.alignCenter, 
        borderRadius: 5, 
        padding: variable.padding_15-5, 
        marginTop: variable.margin_10, 
        height: 250
    },

    categoryBookImage:{
        width: 180, height: 250
    },




    //   Button Style
    btnPrimary: { backgroundColor: variable.btnPrimary, },
    btnSuccess: { backgroundColor: variable.btnSuccess, },
    btnWarning: { backgroundColor: variable.btnWarning, },
    btnDanger: { backgroundColor: variable.btnDanger, },
    btnDark: { backgroundColor: variable.btnDark, },
    btnInfo: { backgroundColor: variable.btnInfo, },
    btnLight: { backgroundColor: variable.btnLight, },


    // Icon Style
    iconPrimary: { color: variable.btnPrimary },
    iconSuccess: { color: variable.btnSuccess },
    iconWarning: { color: variable.btnWarning },
    iconDanger: { color: variable.btnDanger },
    iconDark: { color: variable.btnDark },
    iconInfo: { color: variable.btnInfo },
    iconLight: { color: variable.btnLight },


    // Button Style
    button: { 
        backgroundColor: 'blue',
        padding:15,
        borderRadius: 110
    }, 
    buttonText: {
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold,
        color: 'white',
        textAlign: variable.alignCenter
    },


    // Thumbnail Style
    thumbnail:{
        backgroundColor: 'lightgrey',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 30,
    },
    thumbnailText: {
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold,
        textAlign: variable.alignCenter,
        marginTop: 6
    },


    // List Item Style 
    listItems:{
        margin: variable.margin_10,        
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold
    },

    successText: {
        flex: 1,
        color: variable.successText,
        textAlign: variable.alignRight,
    },


    // textInputStyle: {
    //     fontSize:variable.fontMedium,
    // },
    labelText:{
        fontSize: variable.h4,
        fontWeight: 'bold',
    },


    // Heading Text Style
    headerText: {
        fontSize: variable.fontLarge,
        textAlign: variable.alignCenter,
        margin: 10,
        color: variable.titleFontColor,
        fontWeight: 'bold',
    },
    subHeadText: {
        fontSize: variable.subtitleFontSize,
        paddingBottom: 35,
        textAlign: variable.alignCenter,
        color: variable.subtitleFontColor,
        marginBottom: 5,
    },

    
    // Notification Component Style
    notificationGrid: {
        padding: 10, 
        borderBottomColor: variable.cWhite, 
        borderBottomWidth: 1,
        height: 60
    },
    notificationText:{
        fontSize: 15, 
        fontWeight: 'normal',
    },
    notificationMoreIcon:{
        fontSize: variable.h1
    },


    // Tiles View
    tileDashboard: {
        flex: 1,
        height: 120,
        paddingVertical: 20,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: variable.alignCenter,
        justifyContent: 'space-around',
        marginHorizontal: 5,
        borderColor: variable.cPrimary
    },

    dashboardViewWidth:{
        width: 131
    },

    // Tiles View
    tileText: {
        color: '#555CC4', 
        fontFamily: 'monospace', 
        fontSize: variable.fontSmall, 
        fontWeight: 'bold'
    },


    //Container style
    container:{
        flex: 1,
        backgroundColor: variable.cWhite,
        paddingTop: 10,
    },
})

export default theme;