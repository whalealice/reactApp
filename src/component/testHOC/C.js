import React,{Component} from 'react'
import myHOC from './myHOC.js'

class C extends Component{
	getName(){
		console.log('这是C组件的ref内容')
	}
	render(){
		return(
			<div>
				请输入内容：<input {...this.props}/>
				<br/>
				<div>这是内容CCCCC</div>
				<div>这是输入的内容：{this.props.value}</div>
			</div>
		)
	}
}
export default myHOC(C)