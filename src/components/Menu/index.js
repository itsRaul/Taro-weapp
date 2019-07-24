import  Taro,{Component} from '@tarojs/taro'
import  {View,Text,Image} from  '@tarojs/components'
import {connect} from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'
import './index.scss'
import {showDrawer,hideDrawer,changeCata} from '../../store/action/menu'

@connect(function(store){
   return {...store.menu}
},function(dispatch){
   return {
      showMenu() {
         dispatch(showDrawer())
      },
      hideDrawer(){
         dispatch(hideDrawer())
      },
      changeCata(cata) {
         dispatch(changeCata(cata))
      }
   }
})
class  Menu  extends   Component{
   //显示抽屉
   showDrawer(){
      this.props.showMenu&&this.props.showMenu()
   }
   //关闭抽屉时触发
   closeDrawer(){
     this.props.hideDrawer&&this.props.hideDrawer();
   }
   //菜单栏数据
   getItem(cataData) {
      return cataData.map(item=>item.value)
   }
   //点击分类触发
   clickCata(index) {
      let { cataData } = this.props;
      let clickCata = cataData[index]
      if(clickCata.key!==this.props.currentCata.key){       
         this.props.changeCata&&this.props.changeCata(clickCata);//点击分类 触发切换分类方法
      }
   }
   
   render(){
      let {currentCata,showDrawer,cataData} = this.props
      let items = this.getItem(cataData)
      return (
         <View className='topiclist-menu'>
            <AtDrawer onClose={this.closeDrawer.bind(this)} onItemClick={this.clickCata.bind(this)} show={showDrawer} items={items} mask/>
            <Image onClick={this.showDrawer.bind(this)} className='image  left' src={require('../../assets/img/cata.png')} />
            <Text>{currentCata?currentCata.value:''}</Text>
            <Image className='image right' src={require('../../assets/img/login.png')} />
         </View>
      )
   }
}
export default  Menu;