import React,{Component} from 'react'
import modifyPropsHOC from './modifyPropsHOC.js'

class D extends Component{
	render(){
		return(
			<div>
				<div>这是内容DDDD</div>
			</div>
		)
	}
}
export default modifyPropsHOC(D)