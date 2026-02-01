import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-family: ${theme.fontFamily.handwritingBold};
  font-size: 32px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm}px;
`;

const Subtitle = styled.Text`
  font-family: ${theme.fontFamily.handwriting};
  font-size: 22px;
  color: ${theme.colors.textMuted};
  margin-bottom: ${theme.spacing.xl}px;
`;

const Card = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.radius.card}px;
  padding: ${theme.spacing.lg}px;
  margin-bottom: ${theme.spacing.md}px;
  border: 1px solid ${theme.colors.border};
`;

const CardTitle = styled.Text`
  font-family: ${theme.fontFamily.handwritingBold};
  font-size: 24px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm}px;
`;

const CardText = styled.Text`
  font-family: ${theme.fontFamily.handwriting};
  font-size: 20px;
  color: ${theme.colors.textMuted};
  line-height: 28px;
`;

export function DailyWarmthScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Title>Daily Warmth</Title>
        <Subtitle>Little moments worth remembering</Subtitle>

        <Card>
          <CardTitle>Today's gentle reminder</CardTitle>
          <CardText>
            You are enough. Take a breath and notice one small thing that made you smile today.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Warm thought</CardTitle>
          <CardText>
            Like sunshine through a window, let kindness fill your day—starting with yourself.
          </CardText>
        </Card>
      </Container>
    </ScrollView>
  );
}
