import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeadingMedium } from 'baseui/typography';
import React from 'react';
import SpaceCard from '../../Features/IssueTracker/Components/SpaceCard';

function Spaces() {
  const [, $theme] = useStyletron();

  return (
    <Block margin="10px">
      <HeadingMedium
        $style={{
          fontFamily: $theme.typography.headingFontFamily,
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        Backlog
      </HeadingMedium>
      <>
        <SpaceCard
          userDetails={{ username: 'Jane Doe' }}
          badgeTitle="DEVELOPMENT"
          badgeTitleColor="#ED6400"
          badgeBackgroundColor="#FFF1E2"
          iconBackgroundColor="#CEF9C6"
          iconColor="#1D201C"
          backgroundColor="#F7F6F3"
          title="E-mail after registration so that I can confirm my address"
        />
      </>
    </Block>
  );
}

export default Spaces;
