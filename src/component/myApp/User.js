import React,{Component} from 'react'
import TabbarHOC from './Tabbar'

class User extends Component{
	render(){
		return(
			<div>
				User
			</div>
		)
	}
}
export default TabbarHOC(User)