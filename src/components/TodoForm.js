import React, {useState, useCallback} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    return <form>
        <input placeholder="Input what to do" 
            value={value}
            onChange={onChange}>
        </input>
        <button type="submit">Submit</button>
    </form>;
}

export default TodoForm;