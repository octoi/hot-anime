import React from 'react';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';
import { makeSelectAnimePage } from './selector';

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimeItemContainer = styled.div`
  width: 17em;
  height: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 15em;
  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 15px;
  color: #000;
  font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

export default function HotAnime() {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return null;

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime, idx) => (
          <AnimeItemContainer key={idx}>
            <AnimeCover>
              <img
                src={anime?.coverImage?.extraLarge || ''}
                alt={anime?.title?.english || ''}
              />
            </AnimeCover>
            <AnimeTitle>{anime?.title?.english}</AnimeTitle>
          </AnimeItemContainer>
        ))}
    </HotAnimeContainer>
  );
}
