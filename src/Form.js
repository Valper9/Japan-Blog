import React from 'react'
import useInputState from './hooks/useInputState';

export default function Form () {
    const [ value, handleChange, reset ] = useInputState('');
    return (
        <div>
            <form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
                <input></input>
            </form>
                
        </div>
    )
}
