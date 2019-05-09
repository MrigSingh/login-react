
import React, { Component } from 'react'

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            GDapplied: false,
            PGapplied: false,
            MKapplied: false,
        }
    }
    GDapplyClicked = () => {
        this.setState({
            GDapplied: !this.state.GDapplied
        })
    }
    PGapplyClicked = () => {
        this.setState({
            PGapplied: !this.state.PGapplied
        })
    }
    MKapplyClicked = () => {
        this.setState({
            MKapplied: !this.state.MKapplied
        })
    }
    render() {
        return (
            <div className="container">
                <h2>This is the Job Portal!</h2>
                <div style={{ float: 'right' }}>
                    Options
                    <button style={{ margin: 15 }}>Filter</button>
                    <button>Sort</button>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <h3>Current Jobs</h3>
                        <ol>
                            <li>
                                <div style={style.jobPost}>
                                    <h4>Graphic Designer</h4>
                                    <p>Need someone to create a logo!</p>
                                    {!this.state.GDapplied ? <button onClick={this.GDapplyClicked}>Apply</button> : <button onClick={this.GDapplyClicked}>Cancel</button>}
                                </div>
                            </li>
                            <li>
                                <div style={style.jobPost}>
                                    <h4>Programmer</h4>
                                    <p>Need someone to create my startup site!</p>
                                    {!this.state.PGapplied ? <button onClick={this.PGapplyClicked}>Apply</button> : <button onClick={this.PGapplyClicked}>Cancel</button>}
                                </div>
                            </li>
                            <li>
                                <div style={style.jobPost}>
                                    <h4>Marketer</h4>
                                    <p>Need someone to promote my startup site!</p>
                                    {!this.state.MKapplied ? <button onClick={this.MKapplyClicked}>Apply</button> : <button onClick={this.MKapplyClicked}>Cancel</button>}
                                </div>
                            </li>
                        </ol>

                    </div>

                    <div className="col-md-4">

                    </div>

                </div>

            </div>
        )
    }

}

const style = {
    jobPost: {
        padding: 16,
        background: '#f9f9f9',
        border: '1px solid #ddd',
        marginBottom: 24

    }
}


export default Jobs