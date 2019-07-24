import  Taro,{Component} from '@tarojs/taro'
import  {View,Text,Image,RichText} from  '@tarojs/components'
import {connect} from '@tarojs/redux'
import './index.scss'

class  Replies  extends Taro.PureComponent{
   render(){
      let {replies}=this.props;
      return (
        <View className='topicinfo-replies'>
          {
            replies&&replies.map((item,index) => {
              return (
                <View key={item.id} className='topicinfo-repliy'>
                  <Image className='topicinfo-repliy-image'  src={item.author?item.author.avatar_url:''} />
                  <View className='topicinfo-repliy-right'>
                    <View  className='topicinfo-repliy-right-body'>
                      <View className='topicinfo-repliy-right-pie'>
                        <Text className='loginname'>{item.author?item.author.loginname:''}</Text>
                        <Text className='floor'>{(index+1)+'楼'}</Text>
                        <Text className='time'>{item.create_at}</Text>
                      </View>
                      <View className='topicinfo-repliy-right-content'>
                        {
                          <RichText nodes={item.content} />
                        }
                      </View>
                    </View>
                    <View className='topicinfo-repliy-right-zan'>
                      <Image  className='topicinfo-repliy-image'  src={item.is_uped?require('../../assets/img/myzan.png'):require('../../assets/img/zan.png')} />
                      <Text>{item.ups.length}</Text>
                      <Image  className='topicinfo-repliy-image' src={require('../../assets/img/zhuan.png')} />
                    </View>
                  </View>
                </View>
              )
            })
          }
        </View>
      )
   }
}
export default  Replies;