// Libs
import { FC, useState } from 'react';
// Hooks
import useToastify from 'utils/hooks/useToastify';
// Helpers
import { menuItems } from '../helpers';
// Styles
import * as Styled from './styles';

const MenuList: FC = () => {
  const [isOpenToastify, setIsOpenToastify] = useState<boolean>(false);

  const handleCloseToastify = () => {
    setIsOpenToastify(false);
  };

  const toastify = useToastify(
    isOpenToastify,
    'This functionality is in development',
    handleCloseToastify,
    'error'
  );

  // We have only one page, so when user click on other, they get toastify
  const handleChangePage = (name: string) => () => {
    if (name !== 'Contact') {
      setIsOpenToastify(true);
    }
  };

  return (
    <>
      {toastify}
      <Styled.List>
        {menuItems.map(({ name, isIcon }, index) => (
          <Styled.Item key={index} onClick={handleChangePage(name)}>
            {/*Active item has other styles*/}
            <Styled.Name isActive={name === 'Contact'}>{name}</Styled.Name>
            {isIcon && <Styled.ArrowDownIcon />}
          </Styled.Item>
        ))}
      </Styled.List>
    </>
  );
};

export default MenuList;
