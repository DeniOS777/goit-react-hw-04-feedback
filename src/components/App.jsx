import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const items = { good, neutral, bad };

  const handleClickButton = key => {
    switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error('This field doesn`t exist');
    }
  };

  const countTotalFeedback = () =>
    Object.values(items).reduce((total, item) => total + item, 0);

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    return good ? Number(((good / totalFeedbacks) * 100).toFixed()) : 0;
  };

  const options = Object.keys(items);
  const totalFeedbacks = countTotalFeedback();
  const positiveFeedbackPercentage =
    countPositiveFeedbackPercentage(totalFeedbacks);

  return (
    <Box p={3}>
      <Section title="Please leave feedback 😉">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickButton}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback 😢" />
        )}
      </Section>
      <GlobalStyle />
    </Box>
  );
};

export default App;
