// Libs
import { FC, useState } from 'react';
// Hooks
import useDesktop from 'utils/hooks/useDesktop';
import useToastify from 'utils/hooks/useToastify';
// Icons
import ProfileBlack from 'assets/icons/profile-black.svg?react';
import ProfileWhite from 'assets/icons/profile-white.svg?react';
import BinBlack from 'assets/icons/bin-black.svg?react';
import BinWhite from 'assets/icons/bin-white.svg?react';
// Styles
import * as Styled from './styles';

const IconsGroup: FC = () => {
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  const isDesktop = useDesktop();

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  const toastify = useToastify(
    isOpenToastify,
    'This functionality is in development',
    handleCloseToastify,
    'error'
  );

  const handleNavigate = () => {
    setIsOpenToastify(true);
  };
  return (
    <>
      {toastify}
      <Styled.IconsGroup>
        <Styled.Icon onClick={handleNavigate}>
          {isDesktop ? <ProfileBlack /> : <ProfileWhite />}
        </Styled.Icon>
        <Styled.Icon onClick={handleNavigate}>
          {isDesktop ? <BinBlack /> : <BinWhite />}
        </Styled.Icon>
      </Styled.IconsGroup>
    </>
  );
};

export default IconsGroup;
