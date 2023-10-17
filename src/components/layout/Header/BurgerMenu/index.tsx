// Libs
import { FC } from 'react';
// Components
import MenuList from '../MenuList';
import IconsGroup from '../IconsGroup';
// Styles
import * as Styled from './styles';

interface BurgerMenu {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: FC<BurgerMenu> = ({ isOpen, onClose }) => (
  <>
    {isOpen && (
      <Styled.Menu>
        <Styled.Header>
          <Styled.Logo>Logo Here</Styled.Logo>
          <Styled.CloseIcon onClick={onClose} />
        </Styled.Header>
        <MenuList />
        <IconsGroup />
      </Styled.Menu>
    )}
  </>
);

export default BurgerMenu;
