import React from 'react';
// import Button from '@material-ui/core/Button';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';

class Buttons extends React.Component{

    handleSelect = (event) => {
        this.props.gridSize(event)
    }

    render(){
        return(
            <div className="center">

                <ButtonToolbar>
                    <button className="btn btn-default" onClick={this.props.playButton}>
                        Play
                    </button>
                    <button className="btn btn-default" onClick={this.props.pauseButton}>
                        Pause
                    </button>
                    <button className="btn btn-default" onClick={this.props.slow}>
                        Slow
                    </button>
                    <button className="btn btn-default" onClick={this.props.fast}>
                        Fast
                    </button>
                    <button className="btn btn-default" onClick={this.props.clear}>
                        Clear
                    </button>
                    <button className="btn btn-default" onClick={this.props.seed}>
                        Seed
                    </button>
                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect}
                    >
                        
                        <Dropdown.Item eventKey="1">25x25</Dropdown.Item>
                        <Dropdown.Item eventKey="2">35x35</Dropdown.Item>
                        <Dropdown.Item eventKey="3">50x50</Dropdown.Item>
                        <Dropdown.Item eventKey="4">75x75</Dropdown.Item>
                        
                    </DropdownButton>
                </ButtonToolbar>

            {/*     <Button variant="outlined" color="primary">
            //     Play
            //     </Button>

            //     <Button variant="outlined" color="secondary">
            //     Pause
            //     </Button>

            //     <Button variant="outlined" color="primary">
            //     Slow
            //     </Button>

            //     <Button variant="outlined" color="secondary">
            //     Fast
            //     </Button>

            //     <Button variant="outlined" color="primary">
            //     Clear
            //     </Button>

            //     <Button variant="outlined" color="secondary">
            //     Seed
            //     </Button>

            //     <Button variant="outlined" color="primary">
            //     Gridsize
        //     </Button> */}
            </div>
        )
    }
}

export default Buttons;