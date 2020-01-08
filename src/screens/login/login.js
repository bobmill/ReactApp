import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     c_name:"",
    };
  }
  componentDidMount () {
    const {c_name} = this.state;
    this.setState({
      c_name:this.props.navigation.state.params.type
    })
    // console.log(this.props.navigation.state.params.type)
  };
  render () {
    const {c_name} = this.state;
    return (
      <View>
          <Text>登录</Text>
          <Text>传递的参数：{c_name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})
