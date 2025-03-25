import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const DetailsCard = ({ cardtitle, cardprice }) => {
  return (
    <View style={styles.card}>
          <Text style={styles.cardtitle}>{cardtitle}</Text>
          <View style={styles.divider} />
          <Text style={styles.cardprice}>{cardprice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card:{
        width: '90%',
        height: 64,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        borderColor: '#C7C7C71A',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        //Android shadow
        elevation:2,
  
        // IOS shadow
        // shadowColor: '#C7C7C71A',
        // shadowOffset: { width: 5, height: 5 },
        // shadowOpacity: 1,
        // shadowRadius: 1,
      },
      cardtitle:{
        color: '#393939',
        fontSize: 14,
        fontFamily:'Poppins',
        fontWeight: '400',
        justifyContent:'center',
        flexWrap: 'wrap',
        width:'65%',
        height:50,
        left:15,
        alignItems:'center',
        textAlignVertical:'center',
      },
      divider: {
        width: 1,
        height: 50, 
        position: 'relative',
        justifyContent:'center',
        backgroundColor: '#E4E4E4', 
        marginHorizontal: 10,
      },
      cardprice:{
        color: '#1A9E75',
        fontSize: 14,
        width:"30%",
        fontFamily:'Poppins-Semibold',
        position:'static',
        fontWeight: '500',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        flexShrink:1,
      },
});

export default DetailsCard;
