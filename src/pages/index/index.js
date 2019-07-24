import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { CnodeModel } from '../../api/api'
import Menu from '../../components/Menu'
import Topiclist from '../../components/Topiclist'

const cnondeModel = new CnodeModel()

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: 'Taro'
  }

  componentWillMount () { }

  componentDidMount () { 
   
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getTopics = async () => {
    let res = await cnondeModel.getTopics({tab:'job',page:1,limit:20})
  }
  
  render () {
    return (
      <View className='index'>
        <Menu />
        <Topiclist />
      </View>
    )
  }
}
