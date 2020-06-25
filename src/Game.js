import React from 'react';
import  './Game.css';
import Grid from './Grid';
import Buttons from './Buttons';



class Game extends React.Component {  
    constructor(){
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;
        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map( () => Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {
        // Helper Function
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy
        })
    }
    // Helper function
    seed = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                if (!gridCopy[i][j]){
                    if ( Math.floor(Math.random() * 3) === 1){
                        gridCopy[i][j] = true;
                    }
                }
                else {
                    gridCopy[i][j] = false;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        });
        this.state.generation = 0;
    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed);
        }

    pauseButton = () => {
        clearInterval(this.intervalId);
    }

    slow = () => {
        this.speed = 400;
        this.playButton();
    }

    fast = () => {
        this.speed = 100;
        this.playButton();
    }

    clear = () => {
        let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: grid,
            generation: 0
        })
    }

    play = () => {
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);

        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                //Number of neighbors
                let count = 0
                // Rules in Logic
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < this.rows - 1) if (g[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
		this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
          });
    }

    // Tests out the seeding process
    // componentDidMount(){
    //     this.seed();
    //     // this.playButton();
    // }

    render() {    
        return (      

            <div>
                <h1>The Game of Life</h1>
                <Buttons 
                    playButton = {this.playButton}
                    pauseButton = {this.pauseButton}
                    slow = {this.slow}
                    fast = {this.fast}
                    clear = {this.clear}
                    seed = {this.seed}
                    gridSize = {this.gridSize}
                />
                <Grid 
                    gridFull={this.state.gridFull} 
                    rows={this.rows} 
                    cols={this.cols}
                    selectBox={this.selectBox}
                />

                <h2>Generations: {this.state.generation}</h2>
            </div>
            
        );  
    }
}

function arrayClone(arr){
    return JSON.parse(JSON.stringify(arr));
}

export default Game;