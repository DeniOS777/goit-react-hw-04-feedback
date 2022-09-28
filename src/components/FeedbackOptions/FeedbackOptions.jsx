import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" gridGap={3}>
      {options.map(key => (
        <Button
          onClick={() => onLeaveFeedback({ type: `${key}` })}
          key={key}
          type="button"
        >
          {key}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
