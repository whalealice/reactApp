import React,{Component} from 'react'
import modifyPropsHOC from './modifyPropsHOC.js'

class E extends Component{
	render(){
		return(
			<p>
				<p>这是内容EEEEE</p>
			</p>
		)
	}
}
export default modifyPropsHOC(E)