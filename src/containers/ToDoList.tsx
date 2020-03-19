import * as React from "react";
import {IToDoList} from "../interfaces/IToDoList";
import {IToDoListState} from "../interfaces/IToDoListState";
import ToDoList from '../components/ToDoList';

export class ToDoListContainer extends React.Component<IToDoList, IToDoListState> {
    constructor(props: any) {
        super(props);

        this.input = React.createRef();
        this.currentId = 0;

        this.state = {
            list: [],
            activeFilter: "all"
        };
    }

    addItem = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const {value} = this.input.current;

        if (!value) return;

        this.input.current.value = "";

        this.setState({
            list: [
                ...this.state.list,
                {
                    value,
                    active: true,
                    id: this.currentId++
                }
            ]
        });
    };

    itemClick = (id: any) => () => {
        const itemIndex = this.state.list.findIndex(item => item.id === id);
        const item = this.state.list[itemIndex];

        this.setState(myState => ({
            list: [
                ...myState.list.slice(0, itemIndex),
                {
                    ...item,
                    active: !item.active
                },
                ...myState.list.slice(itemIndex + 1)
            ]
        }));
    };

    setFilter = (type: any) => () => {
        this.setState({
            activeFilter: type
        });
    };

}
return (
    <ToDoList {...props}/>
);


export default ToDoListContainer;
