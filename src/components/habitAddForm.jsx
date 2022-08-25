import React, { memo } from 'react';

const HabitAddForm =  memo(
    (props) => {
        const formRef = React.createRef();
        const inputRef = React.createRef();
    
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();    
        };
        return (
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>                
            );         
        });   


export default HabitAddForm;

// state가 따로 없다면 함수형으로 만들수 있다.
// props 데이터가 변경되지않아서 컴포넌트를 업데이트하지않아도 될때 memo를 사용한다.