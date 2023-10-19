// Libs
import { FC, useEffect } from 'react';
// Components
import BurgerMenu from './BurgerMenu';
import MenuList from './MenuList';
import IconsGroup from './IconsGroup';
// Hooks
import useDesktop from 'utils/hooks/useDesktop';
// Icons
import Menu from 'assets/icons/menu.svg?react';
// Styles
import * as Styled from './styles';

// I prefer to keep the interface in the component where it's used
interface HeaderProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}

const Header: FC<HeaderProps> = ({ isOpenMenu, setIsOpenMenu }) => {
  // This hook created for check display width
  const isDesktop = useDesktop();

  // When we open the burger menu and try to change the screen width, it should close
  useEffect(() => {
    if (isDesktop) {
      setIsOpenMenu(false);
    }
  }, [isDesktop]);

  // Manage the state of the burger menu
  const toggleOpenMenu = (isOpenMenu: boolean) => () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {/*Here we open our burger menu*/}
      <BurgerMenu isOpen={isOpenMenu} onClose={toggleOpenMenu(true)} />
      {/*If burger menu open other component should close*/}
      {!isOpenMenu && (
        <Styled.Header>
          <Styled.Logo>Logo Here</Styled.Logo>
          {/*If we haven't display width we should see only burger icon*/}
          {isDesktop ? (
            <Styled.Menu>
              <MenuList />
              <IconsGroup />
            </Styled.Menu>
          ) : (
            <Menu onClick={toggleOpenMenu(isOpenMenu)} />
          )}
        </Styled.Header>
      )}
    </>
  );
};

export default Header;
