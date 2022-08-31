import styled from 'styled-components';

export const StatisticsBlock = styled.div`
  padding-left: 5px;
`;

export const FeedbackPoints = styled.div`
  margin-bottom: 15px;
`;

export const GoodPoints = styled.p`
  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const NeutralPoints = styled(GoodPoints)``;

export const BadPoints = styled(GoodPoints)``;

export const TotalFeedbacks = styled(GoodPoints)``;

export const PositiveFeedbacksPercentage = styled(GoodPoints)``;
