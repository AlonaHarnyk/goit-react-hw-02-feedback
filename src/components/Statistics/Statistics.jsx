import React from "react";
import PropTypes from "prop-types";
import { StyledList, StyledStatistic } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <StyledList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </StyledList>
    <StyledStatistic>Total: {total}</StyledStatistic>
    <StyledStatistic>Positive feedback: {positivePercentage}%</StyledStatistic>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
