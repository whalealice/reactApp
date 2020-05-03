import React,{Component, createContext, createRef, } from 'react'
import TabbarHOC from './Tabbar'

const BatteryContext = createContext()

class Leaf extends Component{
	// static contextType = BatteryContext
	render(){
		// const battery = this.context
		// console.log('aaa', this.context)
		return(
			// <div>{battery}</div>
			<BatteryContext.Consumer>
				{
					value => <div>这里是值：{value.battery}, online:{String(value.online)}</div>
				}
			</BatteryContext.Consumer>
		)
	}
}

class Middle extends Component{
	render(){
		return(
			<Leaf/>
		)
	}
}
const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className="FancyButton">
	  {props.children}
	</button>
));
class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			battery: 1,
			online: false,
		}
		this.myRef=createRef();//创建ref对象
	}
	
	componentDidMount(){
		console.log('myRef', this.myRef.current);//通过current拿到ref元素input标签
	}
	render(){
		const  {battery, online} = this.state
		return(
			<div>
				Home
				<BatteryContext.Provider value={this.state}>
						<button onClick={() => { this.setState({ battery: battery + 1 }) }}>按钮</button>
						<button onClick={() => { this.setState({ online: !online }) }}>切换</button>
						<Middle/>
				</BatteryContext.Provider>
				<br/>
				<FancyButton ref={this.myRef}>Click me!</FancyButton>
			</div>
		)
	}
}
export default TabbarHOC(Home)