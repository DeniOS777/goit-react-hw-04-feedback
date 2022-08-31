import styled from 'styled-components';

export const FeedbackPoints = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const GoodPoints = styled.p`
  font-size: ${p => p.theme.fontSizes.lm};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const NeutralPoints = styled(GoodPoints)``;

export const BadPoints = styled(GoodPoints)``;

export const TotalFeedbacks = styled(GoodPoints)``;

export const PositiveFeedbacksPercentage = styled(GoodPoints)``;
