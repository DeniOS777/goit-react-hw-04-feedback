import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

import {
  FeedbackPoints,
  GoodPoints,
  NeutralPoints,
  BadPoints,
  TotalFeedbacks,
  PositiveFeedbacksPercentage,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box pl={3}>
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
    </Box>
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
