import React,{Component} from 'react'
import TabbarHOC from './Tabbar'

class Car extends Component{
	render(){
		return(
			<div>
				Car
			</div>
		)
	}
}
export default TabbarHOC(Car)