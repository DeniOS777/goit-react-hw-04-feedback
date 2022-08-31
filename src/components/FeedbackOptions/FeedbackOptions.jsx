import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(key => (
        <Button onClick={() => onLeaveFeedback(key)} key={key} type="button">
          {key}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
