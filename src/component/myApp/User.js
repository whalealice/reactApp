import React,{Component, useCallback, useState, useRef, useEffect, memo} from 'react'
import './index.css'
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