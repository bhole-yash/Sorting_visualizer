import React from 'react';
import  './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';

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

    bubbleSort(){
        const javaScriptSortedArray = this.state.array.slice().sort((a,b)=>a-b);
        const sortedArray =sortingAlgorithms.bubbleSort(this.state.array);

        console.log(sortingAlgorithms.arraysAreEqual(javaScriptSortedArray, sortedArray),this.state.array);

    }

    quickSort(){

    }
    insertionSort(){

    }
    selectionSort(){

    }
    mergeSort(){

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
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                

           
            </div>
        )
    }
}