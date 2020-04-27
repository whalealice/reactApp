import React from 'react'
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './component/myApp/Home'
import Category from './component/myApp/Category'
import Car from './component/myApp/Car'
import User from './component/myApp/User'

export default ()=> (
	<BrowserRouter>
		<Switch>
			<Route path="/home" component={Home}></Route>
			<Route path="/category" component={Category}></Route>
			<Route path="/car" component={Car}></Route>
			<Route path="/user" component={User}></Route>
		</Switch>
	</BrowserRouter>
)