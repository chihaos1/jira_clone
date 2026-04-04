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

export const TextEditor = styled.input`
  ${font.size(24)}
  ${font.medium}
  width: 100%;
  padding: 8px 12px;
  border: 2px solid ${color.borderLightest};
  border-radius: 3px;
  background: ${color.backgroundLightest};
  transition: border 0.1s;
  &:focus {
    outline: none;
    border: 2px solid ${color.borderInputFocus};
    background: #fff;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 8px;
  padding-top: 12px;
  button {
    margin-right: 6px;
  }
`;

export const CharacterCounter = styled.div`
  font-size: 12px;
  color: ${props => props.isNearLimit ? color.danger : color.textMedium};
  text-align: right;
  margin-top: 4px;
  font-weight: ${props => props.isNearLimit ? '600' : '400'};
`;