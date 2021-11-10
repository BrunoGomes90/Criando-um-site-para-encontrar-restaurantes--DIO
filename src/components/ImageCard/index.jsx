import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton';

const Card = styled.div`
 display: flex;
 justify-content: center;
 padding: 5px;
 width: 90px;
 height: 90px;
 border-radius: 6px;
 background-image: url(${(props) => props.photo});
 background-size: cover;
`;

const Title = styled.span`
 font-family: ${(props) => props.theme.fonts.regular};
 color: #ffffff;
 font-size: 16px;
 `;

const ImageCard = ({ photo, title }) => {
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoader(true);
  }, [photo]);

  return (
    <>
      {imageLoader ? (
        <Card photo={photo}>
          <Title>{title}</Title>;
        </Card>
      ) : <Skeleton width="90px" height="90px" />}
    </>
  );
};

export default ImageCard;