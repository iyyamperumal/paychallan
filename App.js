import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('./assets/arrow_back.png')} style={{width: 24, height: 24, top: 49, left: 13}} />
        <Text style={styles.headtitle}>Traffic Fines</Text>
      </View>

      {/* Main Content */}
      <ScrollView>
      <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
      <View style={{alignItems:'center', justifyContent:'center', marginTop: 20}}>
      <TouchableOpacity style={styles.searchbar}>
        <Text style={styles.text}>Select Your State</Text>
        <Image source={require('./assets/arrow_drop_down.png')} style={{width: 24, height: 24, alignItems:'center',right:'10'}} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.state}>
      <Image source={require('./assets/Vector.png')} style={{width: 29, height: 33,}} />
      <View style={{justifyContent:'center', marginLeft: 10}}>
      <Text style={{color: '#393939',fontFamily:'Poppins-Semibold', fontSize: 16, fontWeight:'500',}}>Traffic fines in Karnataka</Text>
      <Text style={{color: '#393939',fontFamily:'Poppins', fontSize: 10, fontWeight:'400',}}>List of traffic fines as per Motor Vehicle (Amendment) Act</Text>
      </View>
      </View>

      <View style={{justifyContent:'center', alignItems:'center', gap:10, marginBottom:10}}>
      {/* Card List for traffic fine details */}
      <View style={styles.card}>
      <Text style={styles.cardtitle}>Riding without wearing a helmet (rider/pillion rider)</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving without wearing a seatbelt</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Overloading of two-wheeler (triple riding)</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Traffic signal jumping</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Lane discipline offences</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>One way offence</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving/Riding Without Number Plate </Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Honking in silence zones</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹500 - ₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Using Mobile Phone While Driving/Riding</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Offence Related to Air/Noise Pollution</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Parking in No-parking Zone</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving/Riding When Physically/Mentally Unfit</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving Rashly or Dangerously</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Not Obeying the Instructions of the Traffic Fines</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Blocking The Way for or Negligent of Emergency Vehicles Including Ambulances, Police Cars, etc.</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Violating Speed Regulations</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000 - ₹2000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving/Riding Without Valid Insurance</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000 - ₹4000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Riding/Driving Without a Valid Driving Licence</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹1000 - ₹5000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Misbehaviour Towards Traffic Authorities</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹2000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Racing on Public Roads</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹5000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving During Disqualification</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}>₹10,000</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.cardtitle}>Driving in a Drunken State</Text>
      <View style={styles.divider} />
      <Text style={styles.cardprice}><Text color={'black'}>Upto</Text> ₹10,000</Text>
      </View>
      
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop:24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#1A9E75',
    width: '100%',
    height: 80,
    position: 'static',
    flexDirection: 'row',
  },
  headtitle:{
    color: '#FFFBFB',
    fontFamily:'Poppins-Bold', 
    fontSize: 16,
    fontWeight:'600', 
    width:103, 
    height:17, 
    top:50, 
    left:15,
  },
  searchbar: {  
    width: '90%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //Android shadow
    elevation:1,

    //IOS shadow
    // shadowColor: '#C1C1C11A',
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 1,
    // shadowRadius: 1,
  },
  text: {
    width: 150,
    color: '#AFAFAF',
    fontSize: 14,
    fontFamily:'Poppins',
    fontWeight: '400',
    marginLeft: 15, 
    alignItems: 'center',
    },
    state:{
      width: '90%',
      height: 55,
      marginVertical: 11,
      backgroundColor: '#F0FFFA',
      borderRadius: 15,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      //Android shadow
      elevation:1,

      // IOS shadow
      // shadowColor: '#C7C7C71A',
      // shadowOffset: { width: 5, height: 5 },
      // shadowOpacity: 1,
      // shadowRadius: 1,
    },
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
