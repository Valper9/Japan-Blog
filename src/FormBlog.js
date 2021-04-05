import React, {useState} from 'react'
import useInputState from './hooks/useInputState';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import County from './County';

export default function FormBlog () {
    const [ value, handleChange, reset ] = useInputState('');
    const [blog, setBlog] = useState("");
    return (
        <div>
            <form onSubmit={(e) => { 
                e.preventDefault();
                setBlog(value)}}>

                    <textarea value={value} onChange={handleChange} rows="7"cols="25"></textarea>
                
                <Button variant="primary" type="submit">Submit</Button>
            </form>
            <div style={{backgroundColor: "white"}}>
                {blog}
            </div>                
        </div>
    )
}
