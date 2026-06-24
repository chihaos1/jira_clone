import styled, { css } from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 7px 7px;
  border-radius: 3px;
  border: 1px solid transparent;
  background: #fff;
  ${font.size(24)}
  font-weight: bold;
  line-height: 1.4;
  resize: none;
  overflow: hidden;
  transition: background 0.1s;
  &:focus,
  &:hover {
    background: ${color.backgroundLight};
    outline: none;
  }
  ${mixin.customScrollbar()}
`;

export const CharacterCounter = styled.div`
  text-align: right;
  ${font.size(12)}
  color: ${({ isNearLimit }) =>
    isNearLimit ? color.danger : color.textMedium};
  margin-top: 2px;
  padding-right: 2px;
  transition: color 0.2s;
`;
