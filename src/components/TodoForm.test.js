import React from 'react'
import {fireEvent, render} from '@testing-library/react';
import TodoForm from './TodoForm';

describe("<TodoForm/>", ()=> {
    it('has input and a button', ()=> {
        const {getByText, getByPlaceholderText} = render(<TodoForm/>);
        getByPlaceholderText('Input what to do');
        getByText("Submit")
    });

    it('changes input', ()=> {
        const {getByPlaceholderText} = render(<TodoForm></TodoForm>);
        const input = getByPlaceholderText('Input what to do');
        fireEvent.change(input, {
            target: {
                value: 'learn TDD'
            }
        });
        expect(input).toHaveAttribute('value', 'learn TDD');
    });
});