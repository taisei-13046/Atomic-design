import styled from "styled-components";

import { Link } from "react-router-dom";

export const Footer = () => {
  return <SFotter>&copy; 2021 test Inc.</SFotter>;
};

const SFotter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
