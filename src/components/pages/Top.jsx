import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdimn = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>Top page</h2>
      <SecondaryButton onClick={onClickAdimn}>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
