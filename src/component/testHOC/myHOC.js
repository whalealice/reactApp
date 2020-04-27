import React,{Component} from 'react'
import './style.css'
// export default class A extends Component{
// 	render(){
// 		return(
// 			<div className='a-content'>
// 				<div className="header">
// 					<div>提示</div>
// 					<div>x</div>	
// 				</div>
// 				<div>
// 					这是内容
// 				</div>
// 			</div>
// 		)
// 	}
// }
// 属性代理
const myHOC = (WrappenComponent) => class newComponent extends Component{
	constructor(props) {
		super(props);
		this.state = {
			type: '美少女',
			value: '',
		};
    }
    refc(instances){
    	console.log(instances)
    	// instances指WrappenComponent的实例，WrappenComponent所有属性和方法都可以获取
    }
    onInputChange = (e)=>{
    	this.setState({
    		value: e.target.value
    	})
    }
	render(){
		const newProps = {
			value: this.state.value,
			onInput: this.onInputChange
		}
		return(
			<div className='a-content'>
				<div className="header">
					<div>提示</div>
					<div>x</div>	
				</div>
				<div>
					<WrappenComponent 
						{...this.state} 
						{...this.props}
						{...newProps}
						ref={this.refc.bind(this)}
					/>
				</div>
			</div>
		)
	}
}
export default myHOC