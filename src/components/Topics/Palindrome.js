import React, { Component } from 'react';

class Palindrome extends Component{

    constructor(){
        super()

        this.state = {
            userInput: '',
            Palindrome: ''
        };
    }


    handleChange(val) {
        this.setState({ userInput: val });
      }

    isPalindrome(userInput) {
        var forwards = userInput;
        var backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        
        if ( forwards === backwards ){
           this.setState({ palindrome: 'true' });
         } else {
             this.setState({ palindrome: 'false' });
         }
      }

    
    render()  {
        return(
            <div className="puzzleBox PalindromePB">
            <h4> Palindrome </h4>
               <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
               <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
               <span className="resultBox">  Palindrome: { this.state.Palindrome } </span>
            </div>
        )
    }
}


export default Palindrome;