// Libs
import { FC, ReactNode } from 'react';
// Styles
import * as Styled from './styles';

interface List {
  icon?: ReactNode;
  subtitle: string;
}

interface InfoListProps {
  title: string;
  list: Array<List>;
}

const InfoList: FC<InfoListProps> = ({ title, list }) => {
  return (
    <Styled.Info>
      <Styled.Title>{title}</Styled.Title>
      {list.map(({ icon, subtitle }, index) => (
        <Styled.List key={index}>
          <Styled.Item>
            {icon && icon}
            <Styled.Subtitle>{subtitle}</Styled.Subtitle>
          </Styled.Item>
        </Styled.List>
      ))}
    </Styled.Info>
  );
};

export default InfoList;
