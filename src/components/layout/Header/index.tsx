// Libs
import { FC, useEffect, useState } from 'react';
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

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const isDesktop = useDesktop();

  useEffect(() => {
    if (isDesktop) {
      setIsOpenMenu(false);
    }
  }, [isDesktop]);

  const toggleOpenMenu = (isOpenMenu: boolean) => () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <BurgerMenu isOpen={isOpenMenu} onClose={toggleOpenMenu(true)} />
      {!isOpenMenu && (
        <Styled.Header>
          <Styled.Logo>Logo Here</Styled.Logo>
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
