import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsBlock,
  FeedbackPoints,
  GoodPoints,
  NeutralPoints,
  BadPoints,
  TotalFeedbacks,
  PositiveFeedbacksPercentage,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsBlock>
      <FeedbackPoints>
        <GoodPoints>
          Good: {good} {good ? '🤩' : ''}
        </GoodPoints>
        <NeutralPoints>
          Neutral: {neutral} {neutral ? '😐' : ''}
        </NeutralPoints>
        <BadPoints>
          Bad: {bad} {bad ? '😡' : ''}
        </BadPoints>
      </FeedbackPoints>

      <TotalFeedbacks>Total feedbacks: {total}</TotalFeedbacks>
      <PositiveFeedbacksPercentage>
        Positive feedbacks: {positivePercentage}%
      </PositiveFeedbacksPercentage>
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
