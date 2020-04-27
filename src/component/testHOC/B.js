import React,{Component} from 'react'
import myHOC from './myHOC.js'

class B extends Component{
	render(){
		return(
			<div>
				请输入内容：<input {...this.props}/>
				<br/>
				<div>我的名字：{this.props.name}</div>
				<div>我的年龄：{this.props.age}</div>
				<div>我的属性：{this.props.type}</div>
				<div>这是内容BBBBBB</div>
				<div>这是输入的内容：{this.props.value}</div>
			</div>
		)
	}
}
export default myHOC(B)