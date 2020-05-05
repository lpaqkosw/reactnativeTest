import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class AppHeader extends Component {
    render() {
        return (
            
            <Header style={{backgroundColor:'green', marginBottom:0,paddingBottom:0}}>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>TestTestTest</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='pin' />
                </Button>
              </Right>
            </Header>
          
        )
    }
}
