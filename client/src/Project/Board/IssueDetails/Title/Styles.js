import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Textarea } from 'shared/components';

export const Title = styled.div`
  position: relative;
  padding: 21px 0 6px;
`;

export const TitleTextarea = styled(Textarea)`
  min-height: 44px;
  margin-bottom: 0;
  padding: 8px 0;
  border: none;
  color: ${color.textDarkest};
  font-weight: ${font.medium};
  font-size: 24px;
  transition: background 0.1s;
  ${props => props.isOverLimit && `
    color: ${color.danger};
    background-color: ${color.backgroundLightest};
  `}
  &:focus {
    background: ${color.backgroundLightest};
  }
`;

export const CharacterCounter = styled.div`
  position: absolute;
  right: 0;
  top: 4px;
  font-size: 12px;
  font-weight: ${font.medium};
  color: ${props => {
    if (props.isOverLimit) return color.danger;
    if (props.isNearLimit) return color.warning;
    return color.textMedium;
  }};
  background: ${color.backgroundLightest};
  padding: 4px 8px;
  border-radius: 3px;
  border: 1px solid ${props => {
    if (props.isOverLimit) return color.danger;
    if (props.isNearLimit) return color.warning;
    return color.borderLightest;
  }};
  z-index: 1;
  
  span {
    color: ${color.danger};
    font-weight: ${font.bold};
  }
`;