import { useReducer } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const [state, dispatch] = useReducer(feadbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function feadbackReducer(state, action) {
    switch (action.type) {
      case 'good':
        return {
          ...state,
          good: state.good + 1,
        };
      case 'neutral':
        return {
          ...state,
          neutral: state.neutral + 1,
        };
      case 'bad':
        return {
          ...state,
          bad: state.bad + 1,
        };
      default:
        return state;
    }
  }

  const { good, neutral, bad } = state;

  const countTotalFeedback = () =>
    Object.values(state).reduce((total, item) => total + item, 0);

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    return good ? Number(((good / totalFeedbacks) * 100).toFixed()) : 0;
  };

  const options = Object.keys(state);
  const totalFeedbacks = countTotalFeedback();
  const positiveFeedbackPercentage =
    countPositiveFeedbackPercentage(totalFeedbacks);

  return (
    <Box p={3}>
      <Section title="Please leave feedback 😉">
        <FeedbackOptions options={options} onLeaveFeedback={dispatch} />
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
