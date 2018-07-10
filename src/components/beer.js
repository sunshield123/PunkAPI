import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 20px;
  @media (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Name = styled.h2`
  font-size: 2.2em;
  font-family: 'Concert One', cursive;
  margin: 5px 0;
  color: #E15D29;
`;

const Tag = styled.span`
  font-size: 1em;
  color: #666;
`;

const Description = styled.p`
  font-size: 1em;
`;

const Image = styled.figure`
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 520px) {
    margin-left: 0;
    text-align: center;
  }
`;

const Beer = props => (
  <Item>
    <Image>
      <img src={props.image_url} alt={props.name} width="120" />
    </Image>
    <Info>
      <Name>{props.name}</Name>
      <Tag>{props.tagline}</Tag>
      <Description>{props.description}</Description>
    </Info>
  </Item>
);

export default Beer;