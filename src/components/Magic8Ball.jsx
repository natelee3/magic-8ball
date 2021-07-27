import React from 'react';
import Visual from './Visual';

class Magic8Ball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answer: '',
            shake: false
        }
    }

    _handleChange = (field, value) => {
        //setState username = input value
        this.setState({
            question: value,
            response: ''
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this._fetchAnswer();
    }


    _fetchAnswer = async () => {
        setTimeout(
            this.setState({
                shake: true
            }), 3000
        )
        
        let params = encodeURIComponent(this.state.question);
        let uri = `https://8ball.delegator.com/magic/JSON/` + params;
        const response = await fetch(uri)
            .then(response => response.json());
        this.setState({
            answer: response.magic.answer,
            question: '',
            shake: false
        })
       
        
    }
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this._handleSubmit}>
                    <div className="input-group">
                        <label>
                            <input
                                type="text"
                                value={this.state.question}
                                onChange={(e)=> this._handleChange('question', e.target.value)}>
                            </input>
                        </label>
                    </div>  
                </form> <br/>
                {/* <button onClick={this._fetchAnswer}>Ask the 8 Ball!</button> */}
                <Visual 
                    answer={this.state.answer}
                    shaking={this.state.shake === true  ? 'eball' : 'eball shake'}/>
            </div>
        )
    }

}

export default Magic8Ball;