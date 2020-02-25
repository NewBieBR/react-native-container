import { ViewStyle } from 'react-native';

export type CenterMode = 'horizontal' | 'vertical' | 'both';

export type AlignMode = 'left' | 'right' | 'top' | 'bottom';

export type FitMode = 'width' | 'height';

export const RowColAlignment: Record<
  string,
  {
    horizontal: ViewStyle;
    vertical: ViewStyle;
    top: ViewStyle;
    bottom: ViewStyle;
    left: ViewStyle;
    right: ViewStyle;
  }
> = {
  row: {
    horizontal: { justifyContent: 'center' },
    vertical: { alignItems: 'center' },
    top: { alignItems: 'flex-start' },
    bottom: { alignItems: 'flex-end' },
    left: { justifyContent: 'flex-start' },
    right: { justifyContent: 'flex-end' },
  },
  col: {
    horizontal: { alignItems: 'center' },
    vertical: { justifyContent: 'center' },
    top: { justifyContent: 'flex-start' },
    bottom: { justifyContent: 'flex-end' },
    left: { alignItems: 'flex-start' },
    right: { alignItems: 'flex-end' },
  },
};

import Container, { ContainerProps } from './Container';
export { ContainerProps };
export default Container;
