import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import DetailsCard from './components/DetailsCard';

const details = [
  { title: 'Riding without wearing a helmet (rider/pillion rider)', price: '₹500'},
  { title: 'Driving without wearing a seatbelt', price: '₹500'},
  { title: 'Overloading of two-wheeler (triple riding)', price: '₹500'},
  { title: 'Traffic signal jumping', price: '₹500'},
  { title: 'Lane discipline offences', price: '₹500'},
  { title: 'One way offence', price: '₹500'},
  { title: 'Driving/Riding Without Number Plate ', price: '₹500'},
  { title: 'Honking in silence zones', price: '₹500 - ₹1000'},
  { title: 'Using Mobile Phone While Driving/Riding', price: '₹1000'},
  { title: 'Offence Related to Air/Noise Pollution', price: '₹1000'},
  { title: 'Parking in No-parking Zone', price: '₹1000'},
  { title: 'Driving/Riding When Physically/Mentally Unfit', price: '₹1000'},
  { title: 'Driving Rashly or Dangerously', price: '₹1000'},
  { title: 'Not Obeying the Instructions of the Traffic Fines', price: '₹1000'},
  { title: 'Blocking The Way for or Negligent of Emergency Vehicles Including Ambulances, Police Cars, etc.', price: '₹1000'},
  { title: 'Violating Speed Regulations', price: '₹1000 - ₹2000'},
  { title: 'Driving/Riding Without Valid Insurance', price: '₹1000 - ₹4000'},
  { title: 'Riding/Driving Without a Valid Driving Licence', price: '₹1000 - ₹5000'},
  { title: 'Misbehaviour Towards Traffic Authorities', price: '₹2000'},
  { title: 'Racing on Public Roads', price: '₹5000'},
  { title: 'Driving During Disqualification', price: '₹10,000'},
  { title: 'Driving in a Drunken State', price: 'Upto ₹10,000'},
];
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

{/* Card List for traffic fine details */}
      <View style={{justifyContent:'center', alignItems:'center', gap:10, marginBottom:10}}>

      {details.map((detail, index) => (
            <DetailsCard key={index} cardtitle={detail.title} cardprice={detail.price} />
          ))}

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
});
