import React from "react";
import PropTypes from "prop-types";
import { StyledButtonsWrapper, StyledButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StyledButtonsWrapper>
    {options.map(option => (
      <StyledButton key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </StyledButton>
    ))}
  </StyledButtonsWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
