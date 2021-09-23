import React, { Component } from "react";
import {Button} from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const color = active ? "info" : 'btn-online-secondary'
            return (
                <Button outline className={color} key={name}
                onClick={() => onFilterSelect(name)}>{label}</Button> 
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

