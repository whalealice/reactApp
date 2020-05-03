import React, { Component, useCallback, useState, useRef, useEffect, memo } from 'react'
import './index.css'
import { createSet, createAdd, createRemove, createToggle } from './action'

let idSeq = Date.now()
const LOC_KEY = '_$todo_'


function bindActionCreators(actionCreators, dispatch) {
    // const addTodo = (payload) => dispatch(createAdd(payload))
    // {
    //     addTodo: createAdd,
    // }
    const ret = {}
    for (let key in actionCreators) {
        ret[key] = function (...args) {
            const actionCreator = actionCreators[key]
            const action = actionCreator(...args)
            dispatch(action)
        }
    }
    return ret;
}


const Control = memo(function Control(props) {
    const { addTodo } = props
    const inputRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault();
        const newText = inputRef.current.value.trim()
        if (newText.length === 0) {
            return
        }
        addTodo({
            id: ++idSeq,
            text: newText,
            complete: false,
        })
        // dispatch({
        // 	type: 'add',
        // 	payload: {
        // 		id: ++idSeq,
        // 		text: newText,
        // 		complete: false,
        // 	}
        // })
        // addTodo({
        // 	id: ++idSeq,
        // 	text: newText,
        // 	complete: false,
        // })
        inputRef.current.value = ''
    }
    return <div className='todo-control'>
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="new-todo"
                placeholder="what needs to be done?"
                ref={inputRef}
            />
        </form>
    </div>
})
const TodoItem = memo(function TodoItem(props) {
    const {
        todo: {
            id,
            text,
            complete
        },
        // dispatch,
        removeTodo,
        toggleTodo,
    } = props
    const onRemove = () => {
        // dispatch({
        // 	type: 'remove',
        // 	payload: id
        // })
        removeTodo(id)
    }
    const onChange = () => {
        // dispatch({
        // 	type: 'toggle',
        // 	payload: id
        // })
        toggleTodo(id)
    }
    return (
        <li key={id} className="todo-item">
            <input type="checkbox" onChange={onChange} checked={complete} />
            <p className={complete ? 'complete' : ''}> {text}</p>
            <a href="javascript:;" onClick={onRemove}>&#xd7;</a>
        </li>
    )
})
const Todos = memo(function Todos(props) {
    const { todos, removeTodo, toggleTodo } = props
    return (<ul className="todos">
        {todos.map((todo) => {
            return <TodoItem
                key={todos.id}
                todo={todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        })}
    </ul>)
})

function TodoList() {
    const [todos, setTodo] = useState([])
    const dispatch = useCallback((action) => {
        const { type, payload } = action
        switch (type) {
            case 'set':
                setTodo(payload)
                break;
            case 'add':
                setTodo(todos => [...todos, payload])
                break;
            case 'remove':
                setTodo(todos => todos.filter(todo => {
                    return todo.id !== payload
                }))
                break;
            case 'toggle':
                setTodo(todos => todos.map(todo => {
                    if (todo.id === payload) {
                        return {
                            id: todo.id,
                            text: todo.text,
                            complete: !todo.complete,
                        }
                    }
                    return todo
                }))
                break;
            default:
                break;
        }
    }, [])
    const methods = {...bindActionCreators({
        setTodo: createSet,
        addTodo: createAdd,
        removeTodo: createRemove,
        toggleTodo: createToggle,
    }, dispatch)}
    // const addTodo = useCallback((value) => {
    // 	setTodo(todos => [...todos, value])
    // }, [])
    // const removeTodo = useCallback((id)=>{
    // 	setTodo(todos => todos.filter(todo=>{
    // 		return todo.id !== id
    // 	}))
    // },[])
    // const toggleTodo = useCallback((id)=>{
    // 	setTodo(todos=> todos.map(todo=>{
    // 		if(todo.id === id){
    // 			return {
    // 				id: todo.id,
    // 				text: todo.text,
    // 				complete: !todo.complete,
    // 			}
    // 		}
    // 		return todo
    // 	}))
    // }, [])
   
    useEffect(() => {
        // 读取
        const newTodo = JSON.parse(localStorage.getItem(LOC_KEY) || '[]')
        
        methods.setTodo(newTodo)
        // dispatch({
        // 	type: 'set',
        // 	payload: newTodo,
        // })
        // dispatch(createSet(newTodo))
    }, [])
    useEffect(() => {
        // 写入
        localStorage.setItem(LOC_KEY, JSON.stringify(todos))
    }, [todos])
    return (
        <div className="todo-list">
            <Control 
                addTodo={methods.addTodo}
            // {...bindActionCreators({
            //     addTodo: createAdd,
            // }, dispatch)} 
            />
            <Todos
                todos={todos}
                removeTodo={methods.removeTodo}
                toggleTodo={methods.toggleTodo}
                // {...bindActionCreators({
                //     removeTodo: createRemove,
                //     toggleTodo: createToggle,
                // }, dispatch)}
            />
        </div>
    )
}
export default TodoList