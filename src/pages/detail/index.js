import  Taro,{Component} from '@tarojs/taro'
import  {View,Text,Image} from  '@tarojs/components'
import {connect} from '@tarojs/redux'
import {getTopicInfo} from '../../store/action/topic'
import TopicInfo from '../../components/TopicInfo'
import Replies from '../../components/Replies'

@connect(function(store){
   return {...store.topic}
},function(dispatch) {
   return {
      getTopicInfo(params) {
         dispatch(getTopicInfo(params))
      }
   }
})
class  Detail  extends   Component{
   config={
      navigationBarTitleText: '话题详情'
   }

   componentDidMount() {
      this.getDetail()
   }

   getDetail() {
      let params={id:this.$router.params.topicid,mdrender:true,}
      this.props.getTopicInfo&& this.props.getTopicInfo(params)
   }

   render(){
      let {topicinfo,replies} = this.props
      return (
         <View className='detail'>
            <TopicInfo topicinfo={topicinfo} />
            <Replies replies={replies}  />
         </View>
      )
   }
}
export default  Detail;