import React,{Component} from 'react'
import { NavLink} from 'react-router-dom'
import './index.css';

const TabbarHOC = (WrappenComponent)=> class Tabbar extends Component{
	constructor(props){
		super(props)
		this.state={
			index: 0,
		}
		this.tabbarArr = [
			{
				id: 1,
				text: '主页',
				path:'/home',
			},
			{
				id: 2,
				text: '分类',
				path:'/category',
			},
			{
				id: 3,
				text: '购物车',
				path:'/car',
			},
			{
				id: 4,
				text: '我的',
				path:'/user',
			}
		]
	}
	onItemChange=(id)=>{
		this.setState({
			index: id
		})
	}
	render(){
		const { index} = this.state
		return(
			<div>
				<WrappenComponent/>
				<div className="tabbarWrap">
				<div className="tabbar-cont">
					{this.tabbarArr.map((item,i)=>{
						return <NavLink to={item.path} onClick={()=>{this.onItemChange(i)}} className='tabbar-item'  activeClassName='tabbar-active'>
							{item.text}
						</NavLink>
					})}
				</div>
			</div>
			</div>
			
		)
	}
}
export default TabbarHOC