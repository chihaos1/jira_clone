import styled, { css } from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const Title = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 24px;
  font-weight: ${font.bold};
  line-height: 1.4;
  resize: none;
  overflow: hidden;
  color: ${color.textDark};
  background: #fff;
  transition: background 0.1s;
  ${mixin.scrollableY}

  &:focus,
  &:hover {
    background: ${color.backgroundLight};
    border-color: ${color.borderInputFocus};
  }
  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    background: #fff;
  }
`;

export const CharCounter = styled.div`
  margin-top: 4px;
  font-size: 12px;
  text-align: right;
  color: ${({ isAtLimit, isNearLimit }) =>
    isAtLimit
      ? color.danger
      : isNearLimit
      ? color.warning
      : color.textMedium};
  ${({ isAtLimit }) =>
    isAtLimit &&
    css`
      font-weight: ${font.medium};
    `}
`;
