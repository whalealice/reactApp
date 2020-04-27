import React,{Component} from 'react'
import TabbarHOC from './Tabbar'

class Home extends Component{
	render(){
		return(
			<div>
				Home
			</div>
		)
	}
}
export default TabbarHOC(Home)