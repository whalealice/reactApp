import React,{Component} from 'react'
import TabbarHOC from './Tabbar'

// class Child extends React.PureComponent {
//     render(){
//         console.log('I am rendering');
//         return (
//             <div>I am update every {this.props.seconds} seconds</div>
//         )
//     }
// }
function Child({seconds}){
    console.log('我是子组件11');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};
const ChildApp = React.memo(Child)
class Category extends Component{
	constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
	render(){
		return(
			<div>
                <ChildApp seconds={1}/>
                <div>{this.state.date.toString()}</div>
            </div>
		)
	}
}
export default TabbarHOC(Category)