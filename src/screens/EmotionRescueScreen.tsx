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

export function EmotionRescueScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Title>Emotion Rescue</Title>
        <Subtitle>When you need a little support</Subtitle>

        <Card>
          <CardTitle>Breathe with me</CardTitle>
          <CardText>
            Inhale slowly for four counts, hold for four, exhale for six. You're safe in this moment.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Gentle grounding</CardTitle>
          <CardText>
            Name five things you can see, four you can touch, three you can hear. You're here, and that's okay.
          </CardText>
        </Card>
      </Container>
    </ScrollView>
  );
}
