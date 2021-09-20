import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Dispatch } from '@reduxjs/toolkit';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { setAnimePage } from './homePageSlice';
import animeService from '../../services/animeService';
import { useAppDispatch } from '../../hooks';
import HotAnime from './HotAnime';

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage['Page']) => dispatch(setAnimePage(page)),
});

export default function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => {
      console.log('Error: ', err);
    });

    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
}
