import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Gauge from './Gauge';
import AppHeader from './AppHeader'
import Graph from './Graph'
import { Table, Row, Rows } from 'react-native-table-component';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import DecoratorExample from './test';
import XAxisScaleTimeExample from './TimeGraph';

// 08153651676e4ffda835ba303f377fe5
// "https://dapi.kakao.com/v2/local/geo/transcoord.json?x=160710.37729270622&y=-4388.879299157299&input_coord=WTM&output_coord=WGS84"
// Authorization: KakaoAK {app_key}

//bXR+lNkyPeP+YtPbaArtmkJnVVrpc0Gpl90r7gETRXCDe8xUp6q61Jz9U2wwoTgCHiPLZX25mheBU7G6TjI4oA==
//http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=244148.546388&tmY=412423.75772&ServiceKey=bXR+lNkyPeP+YtPbaArtmkJnVVrpc0Gpl90r7gETRXCDe8xUp6q61Jz9U2wwoTgCHiPLZX25mheBU7G6TjI4oA== //측정소

export default class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      // location: null,
      // errorMessage: null,
      isReady: false,
    }; 

    // this.findCurrentLocation = this.findCurrentLocation.bind(this);
  }

  async componentDidMount() {
    // this.findCurrentLocation()
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  // findCurrentLocation = async() => {
  //   let {status} = await Location.requestPermissionsAsync();
  //   if(status !== 'granted'){
  //     this.setState({errorMessage: 'Permission Denied'});
  //   }
  //   let location = await Location.getCurrentPositionAsync({});
  //   let jsonstr = JSON.stringify(location);
  //   let json = JSON.parse(jsonstr);
  //   let long = json.coords.longitude;
  //   let lati =json.coords.latitude;
  //   console.log(long);
  //   console.log(lati);
  //   const reqOption = {
  //     method:'GET',
  //     withCredentials: true,
  //     credentials: 'include',
  //     headers:{'Authorization':'KakaoAK 08153651676e4ffda835ba303f377fe5'}
  //   }
  //   fetch('https://dapi.kakao.com/v2/local/geo/transcoord.json?x='+long+'&y='+lati+'&input_coord=WGS84&output_coord=TM', reqOption)
  //     .then(response => response.json())
  //     .then(data =>{
  //       const str = JSON.stringify(data);
  //       const finaljson = JSON.parse(str);
  //       const finlong = finaljson.documents[0].x;
  //       const finlati = finaljson.documents[0].y;
  //       console.log(finlong);
  //       console.log(finlati);
  //     })
  //   this.setState({location:long});

  // }

  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    // let text = '';
    // if(this.state.errorMessage){
    //   text = this.state.errorMessage;
    // }
    // else if(this.state.location){
    //   text = JSON.stringify(this.state.location);
    // }
  return (
    <View style={styles.container}>
      <AppHeader style={{margin:0, padding:0}}/>
      <View>
        <Text style={styles.subTitle}>(Date goes here){"\n"}(Location goes here)</Text>
      </View>
       <Gauge/>

      <View style={{marginTop:20, flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>미세먼지 PM10</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}>µg/m3</Text>
        </View>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>초미세먼지 PM2.5</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}>µg/m3</Text>
        </View>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>오존 O3</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}>ppm</Text>
        </View>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>이산화질소 NO2</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}>ppm</Text>
        </View>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>황사</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}>µg/m3</Text>
        </View>
        <View style={{width: '50%', height: 70,  backgroundColor: '#202020', borderColor:'gray', borderWidth:0.5}}>
          <Text style={styles.subHeader}>통합대기지수 CAI</Text>
          <Text style={styles.subText}>999</Text>
          <Text style={styles.subUnit}></Text>
        </View>
      </View>
      <View>
        <Graph></Graph>
        {/* <XAxisScaleTimeExample/> */}
        {/* <DecoratorExample/> */}
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    height:'100%',
    width:'100%'
  },
  table:{
    width:'100%',
    marginTop:'5vh'
  },
  head: { height: '40', backgroundColor: '#f1f8ff' },
  subHeader:{
    margin:3,
    color:'white',
    fontSize:12
  },
  subText:{
    textAlign:"center",
    color:'purple',
    fontSize:20
  },
  subUnit:{
    textAlign:"right",
    position:"absolute",
    bottom:5,
    right:5,
    color:'white',
    fontSize:10
  },
  subTitle:{
    textAlign:"right",
    position:"absolute",
    color:'white',
    fontSize:12,
    right:15,
    top:10
  }
});
