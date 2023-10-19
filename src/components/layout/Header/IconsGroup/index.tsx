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
  // State for manage toastify
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  const isDesktop = useDesktop();

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  // This hook we use that demonstrate this functionality is in development, when user try to click
  const toastify = useToastify(
    isOpenToastify,
    'This functionality is in development',
    handleCloseToastify,
    'error'
  );

  // User try to click and get toastify
  const handleNavigate = () => {
    setIsOpenToastify(true);
  };
  return (
    <>
      {toastify}
      {/*I know that we can change color of svg with css, but in this case we have trouble with these svg, so such simple resolve*/}
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
