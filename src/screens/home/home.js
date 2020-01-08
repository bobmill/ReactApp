import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

export class home extends React.Component {
  render () {
    return (
      <View>
          <Text>首页</Text>
          <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login',{
            type:"测试"
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
