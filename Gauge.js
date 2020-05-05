import Svg, { Circle, Rect,Path,G, TextPath,Text } from 'react-native-svg';
import React, {Component} from 'react';
import { StyleSheet,  View,TouchableOpacity } from 'react-native';


export default class App extends Component {
    render(){
        // let text = '';
        // if(this.state.errorMessage){
        //   text = this.state.errorMessage;
        // }
        // else if(this.state.location){
        //   text = JSON.stringify(this.state.location);
        // }
      return (
       <Svg height="35%" width="100%" style={{marginTop:0,paddingTop:0}}>
         <G translateX="5">
        {/* <Path
          d="M310 200 A100 100 0 0 0 100 200"
          stroke="black"
        /> */}
        <Path
          d="M310 200 A100 100 0 0 0 250 105"
          stroke="purple"
          strokeWidth="5"
          fill="none"
          id="purple"
        />

        <Path
          d="M106.332 164.088  A100 100 0 0 0 100 200"
          stroke="blue"
          strokeWidth="5"
          fill="none"
          id="blue"
        />

        <Path
          d="M119.989 138.774  A100 100 0 0 0 106.332 164.088"
          stroke="green"
          strokeWidth="5"
          fill="none"
          id="green"
        />

        <Path
          d="M130.989 125.774  A100 100 0 0 0 119.989 138.774"
          stroke="yellow"
          strokeWidth="5"
          fill="none"
          id="yellow"
        />

        <Path
          d="M182.824 97.5  A100 100 0 0 0 130.989 125.774"
          stroke="orange"
          strokeWidth="5"
          fill="none"
          id="orange"
        />

        <Path
          d="M250 105  A100 100 0 0 0 182.824 97.5"
          stroke="red"
          strokeWidth="5"
          fill="none"
          id="red"
        />

        <Path
            d="M120 198 H104"
            stroke="white"
            strokeWidth="3"
            id="indi"
            transform="rotate(125,205 198)"
        />
        
        <Text fill="white" transform="rotate(180,103.332 167.088)" fontSize="8">
          <TextPath href="#blue" >
            40
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(180, 116.989 139.774)" fontSize="8">
          <TextPath href="#green">
            70
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(185, 127.989 125.774)" fontSize="8">
          <TextPath href="#yellow">
            90
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(185, 179.824 96.5)" fontSize="8">
          <TextPath href="#orange">
            150
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(185, 247 101)" fontSize="8">
          <TextPath href="#red">
            250
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(185, 312 193)" fontSize="8">
          <TextPath href="#purple">
            
          </TextPath>
        </Text>
        <Text fill="white" transform="rotate(170, 99.332 180.088)" fontSize="8">
          <TextPath href="#blue">
           
          </TextPath>
        </Text>
        <Text x="51%" y="64%" fontSize="20" textAnchor="middle" fill="purple">260</Text>
        <Text x="51%" y="73%" fontSize="20" textAnchor="middle" fill="purple">매우 높음</Text>
        
        {/* //119.989 138.774 */}
        {/* <Path
          d="M123.989 139.774‬ A100 100 0 0 0 106.332 164.088"
          stroke="green"
        /> */}
        </G>
        
        </Svg>
        
      );
    }
    }
    const styles = StyleSheet.create({
      container: {
        
        backgroundColor: 'black',
        height:'100%',
        width:'100%'
        
      },
    });


