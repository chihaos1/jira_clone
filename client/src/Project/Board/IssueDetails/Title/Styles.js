import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const TextEditedContent = styled.div`
  padding: 8px 12px;
  border-radius: 3px;
  transition: background 0.1s;
  ${font.size(24)}
  ${font.medium}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const TextEditor = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  padding: 8px 12px;
  border-radius: 3px;
  color: ${color.textDarkest};
  background: ${color.backgroundLightest};
  ${font.size(24)}
  ${font.medium}
  &:focus {
    background: #fff;
    box-shadow: inset 0 0 0 2px ${color.borderInputFocus};
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 12px;
  padding-top: 12px;
`;

export const CharacterCounter = styled.div`
  font-size: 12px;
  color: ${props => props.isNearLimit ? color.danger : color.textMedium};
  text-align: right;
  margin-top: 4px;
  padding-right: 12px;
`;