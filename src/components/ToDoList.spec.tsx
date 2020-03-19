// import { shallow } from 'enzyme';
// import * as React from 'react';
//
// import ToDoList from './ToDoList';
//
// let wrapper: any;
// const props = {
//     id: 2,
//     input: "string",
//     currentId: 2,
// };
//
// describe('<toDoList />', () => {
//
//     it('renders correctly', () => {
//         wrapper = shallow(<ToDoList {...props}/>);
//
//         expect(wrapper).toMatchSnapshot();
//     });
// });

import React from 'react'
import { render, getByRole } from '@testing-library/react'

import ToDoList  from './ToDoList'

const props = {
    id: 2,
    input: "string",
    currentId: 2,
}
test('Opens on button click', () => {
    const ToDoListComponent = (
        <>
            <form>
                <ToDoList {...props} />
            </form>
        </>
    )
    const { getByText } = render(ToDoListComponent)
    const container = document.body
    const diffNode = getByRole(container, 'toDoList')

    expect(diffNode).toBeTruthy()
})
