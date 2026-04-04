import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Textarea } from 'shared/components';

export const Title = styled.div`
  padding: 3px 8px 3px 12px;
  border-radius: 3px;
  transition: background 0.1s;
  ${font.size(24)}
  ${font.medium}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const TitleTextarea = styled(Textarea)`
  ${font.size(24)}
  ${font.medium}
  border: none;
  padding: 0;
  color: ${color.textDarkest};
`;

export const CharacterCounter = styled.div`
  font-size: 12px;
  color: ${props => props.isNearLimit ? color.danger : color.textMedium};
  text-align: right;
  margin-top: 4px;
  font-weight: ${props => props.isNearLimit ? '600' : '400'};
`;