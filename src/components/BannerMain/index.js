/* eslint-disable react/prop-types */
import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>
          
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
