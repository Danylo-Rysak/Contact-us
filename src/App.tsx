// Libs
import { useState } from 'react';
// Components
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Footer from 'components/layout/Footer';
// Styles
import * as Styled from 'styles/app.styles';

const App = () => {
  // State for manage BurgerMenu
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);
  return (
    <Styled.App>
      <Header isOpenMenu={isOpenBurgerMenu} setIsOpenMenu={setIsOpenBurgerMenu} />
      {!isOpenBurgerMenu && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </Styled.App>
  );
};

export default App;
