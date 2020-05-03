import React,{Component, lazy, Suspense} from 'react'
import TabbarHOC from './Tabbar'
const LazyTest = lazy(()=> import(/* webpackChunkName: "LazyTest" */'./LazyTest'))

class ErrorBoundary extends Component{
	constructor(props){
	  super(props);
	  this.state={hasError:false};
	}
	componentDidCatch(err,info){
	  //如果调用了这个函数就说明子组件抛出错误了，改变状态，渲染备用的组件
	  this.setState({hasError:true});//修改状态，通知出错了
	  console.log(err,info);//打印错误信息
	}
	render(){
	  if(this.state.hasError){
		return <div>throw error</div>
	  }
	  return this.props.children
	}
  }
class Car extends Component{
	constructor(props){
		super(props)
		this.state={
			hasError: false,
		}
	}
	fallback = () =>{
		return (
		  <div>Loading...</div>
		);
	}
	// static getDerivedStateFromError(error){
	// 	return {
	// 		hasError: true
	// 	}
	// }
	// componentDidCatch(){
	// 	this.setState({
	// 		hasError: true,
	// 	})
	// }
	render(){
		// if(this.state.hasError){
		// 	return <div>error</div>
		// }
		return(
			<div>
				Car
				<ErrorBoundary>
					<Suspense fallback={this.fallback()}>
						<LazyTest/>
					</Suspense>
				</ErrorBoundary>
				
				
			</div>
		)
	}
}
export default TabbarHOC(Car)