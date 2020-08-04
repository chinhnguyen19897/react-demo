import React, {Component} from 'react';
import './TrafficLight.css'
import classNames from 'classnames'

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    constructor(){
        super();
        this.state = {
            currentColor: GREEN
        };

        setInterval(() => {
            this.setState( {
                currentColor : this.getNextColor(this.state.currentColor)
            }); 
        },2000)
    }


getNextColor(color){
    switch(color){
        case RED:
            return YELLOW;
        case YELLOW:
            return GREEN;
        default:
            return RED;
        
    }
}

render(){
    const { currentColor } = this.state;
    return <div div className="TrafficLight">
            <div className={classNames('bulb', 'RED', {
                active: currentColor === RED
            })}/>
            <div className={classNames('bulb', 'YELLOW', {
                active: currentColor === YELLOW
            })}/>
            <div className={classNames('bulb', 'GREEN', {
                active: currentColor === GREEN
            })}/>
        </div>;
}
}

export default TrafficLight;
