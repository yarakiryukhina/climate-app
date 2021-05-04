import React, { Component } from 'react';
import Poll from 'react-polls';
 

// Declaring poll #1 question and answers
const pollQuestion = 'Do you feel the pattern of weather is generally changing?';
const pollAnswers = [
  { option: 'Yes', votes: Math.round(Math.random() * 20) },
  { option: 'No',  votes: Math.round(Math.random() * 20) },
  { option: 'Not sure',  votes: Math.round(Math.random() * 20) }
];
 
// Declaring poll #2 question and answers
const pollQuestion2 = 'Do you think climate change is something that is affecting or is going to affect you, personally?';
const pollAnswers2 = [
  { option: 'Yes', votes: Math.round(Math.random() * 20) },
  { option: 'No',  votes: Math.round(Math.random() * 20) },
  { option: 'Not sure',  votes: Math.round(Math.random() * 20) }
];
 

class Poll1 extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state;

    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    });

    this.setState({
      pollAnswers: newPollAnswers
    });
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};


class Poll2 extends Component {
  state = {
    pollAnswers: [...pollAnswers2]
  }
 
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state;

    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    });

    this.setState({
      pollAnswers: newPollAnswers
    });
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion2} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};

export {
    Poll1,
    Poll2
};