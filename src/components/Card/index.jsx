import React, { useEffect, useState } from 'react'

import useDesktopScreen from '../../hooks/useDesktopScreen';

import LinkButton from '../LinkButton';
import TextLine from '../TextLine';

import { StyledCard } from './Card.style';
import { StyledCardHeader } from './CardHeader.style';
import { StyledCardContent } from './CardContent.style';
import { Container } from '../../styles/Container.style';

import down from '../../assets/icons/down.svg';
import up from '../../assets/icons/up.svg';

const Card = ({ image: { src, alt }, header, button: { label, link }, data }) => {
  const [isDesktop] = useDesktopScreen();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(isDesktop);
  }, [isDesktop]);

  return (
    <StyledCard>
      <Container>
        <img src={src} alt={alt} />
      </Container>
      <Container>
        <StyledCardHeader>
          <h3>{header}</h3>
          {!isDesktop &&
            <button onClick={() => setShowContent(!showContent)}>
              <img
                src={showContent ? up : down}
                alt={showContent ? 'Up' : 'Down'}
              />
            </button>}
        </StyledCardHeader>
        <StyledCardContent isShow={showContent}>
          {data.map((item, index) => <TextLine key={index} label={item} />)}
        </StyledCardContent>
        <LinkButton label={label} link={link} />
      </Container>
    </StyledCard>
  )
}

export default Card;