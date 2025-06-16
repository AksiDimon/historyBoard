// импортируете из styled-components
import styled from 'styled-components';

type Direction = 'left' | 'right'
export interface CircleButtonProps {
  direction: Direction;
  arrowX: number;
  arrowY:number
  onClick?: () => void;
}
// общий компонент «круглой кнопки» с направлением стрелки
export const CircleButton = styled.button<CircleButtonProps>`
  /* размер и позиционирование */
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${({ direction }) => (direction === 'left' ? '17%' : '20%')};
  top: 67%;

  /* фон и рамка */
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 50%;

  /* центрируем псевдо-элемент (стрелку) */
display: flex


  /* прозрачность и переход */
  opacity: 0.5;
  transition: opacity 0.2s, border-color 0.2s;

  &:hover {
    opacity: 1;
    
    border-width: 2px;     /* делаем рамку жирнее */
  }

  /* стрелка через псевдо-элемент */
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    /* берем из пропсов или по умолчанию центр */
    top: ${({ arrowY = 50 }) => arrowY}%;
    left: ${({ arrowX = 50 }) => arrowX}%;
    border-right: 2px solid ${({ theme }) => theme.color};
    border-top:   2px solid ${({ theme }) => theme.color};

    /* поворачиваем так, чтобы у получилось «>» или «<» */
    transform: ${({ direction }) =>
      direction === 'left' ? 'rotate(225deg)' : 'rotate(45deg)'};
  }
    &:hover::before {
    /* увеличиваем толщину стрелки */
    border-width: 3px;
  }
`;