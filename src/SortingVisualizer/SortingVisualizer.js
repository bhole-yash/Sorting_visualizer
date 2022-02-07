import React from 'react';
import  './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            array :[]
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array =[];
        for (var i = 0 ; i<290;i++){
            array.push(Math.floor(Math.random()*(500 - 5 + 1)+5));
        }
        this.setState({array:array});
    }



    render(){
        const {array} = this.state;
        return(
            <div className='array-container'>
            {array.map((value, idx) => (
                <div className='array-bar' key={idx} style ={{height: `${value}px`}}>
                    </div>
                     ))}
                    <button onClick={() => this.resetArray()}>Generate New array</button>
                

           
            </div>
        )
    }
}