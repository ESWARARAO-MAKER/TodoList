import {Component} from 'react'
import './index.css'

class TodoContainer extends Component{

    onDelete = () => {
        deleting(uniqueId)
    }
    render(){
        const {each} = this.props
        const {uniqueId, text} = each
        return(
            <li className='todoELe'>
                <div>
                    <input type = "checkbox" id = "labelEle"/>
                </div>
                <div className='label-container'>
                    <lable htmlFor = "labelEle">{text}</lable>
                    <button className='btn' onClick={this.onDelete}>Delete</button>
                </div>
            </li>
        )
    }
}
export default TodoContainer
