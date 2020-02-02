import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
  static defaultProps = {
    title: "Please leave feedback",
    message: "No feedback given"
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = e => {
    const stateKey = e.target.name;
    this.setState(state => ({
      [stateKey]: state[stateKey] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { title, message } = this.props;

    return (
      <div>
        <Section title={title}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
          <h2>Statistics</h2>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </div>
    );
  }
}
