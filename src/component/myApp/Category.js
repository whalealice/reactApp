import React,{Component} from 'react'
import TabbarHOC from './Tabbar'

class Category extends Component{
	render(){
		return(
			<div>
				Category
			</div>
		)
	}
}
export default TabbarHOC(Category)