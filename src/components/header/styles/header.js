import styled from "styled-components/macro";
import {Link as ReactRouterLink} from "react-router-dom";

export const Background = styled.div``;

export const Frame = styled.div``;

export const Container = styled.div``;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box

  &:hover {
    background-color: #f40612;
  }
`;