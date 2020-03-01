import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { AlignMode, CenterMode, FitMode, RowColAlignment } from '.';

export interface ContainerProps extends ViewProps {
  size: number; // Flex
  noflex?: boolean; // Disable flex display
  center?: boolean | CenterMode; // Center children
  align?: AlignMode | AlignMode[]; // Align children
  row?: boolean; // Direction
  col?: boolean; // Direction
  absolute?: boolean;
  absoluteFill?: boolean;
  fitParent?: boolean | FitMode;

  margin?: number | string; // Can be number or percentage
  marginHorizontal?: number | string;
  marginVertical?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  padding?: number | string;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
}

export default class Container extends React.PureComponent<ContainerProps> {
  ContainerComponent = View;

  static defaultProps = {
    size: 1,
  };

  style: ViewStyle[] = [];

  constructor(props: ContainerProps) {
    super(props);

    this.style = [];
  }

  mergeStyles(computedStyle: ViewStyle[]): StyleProp<ViewStyle> {
    let finalStyle: StyleProp<ViewStyle> = computedStyle;
    if (this.props.style instanceof Array)
      finalStyle = this.props.style.concat(computedStyle);
    else if (this.props.style !== undefined) {
      finalStyle.unshift(this.props.style);
    }
    return finalStyle;
  }

  computeAlignment(mode: 'row' | 'col', style: ViewStyle[]) {
    const { center, align } = this.props;
    if (center === true || center === 'both' || center === 'horizontal') {
      style.push(RowColAlignment[mode].horizontal);
    }
    if (center === true || center === 'both' || center === 'vertical') {
      style.push(RowColAlignment[mode].vertical);
    }
    if (align instanceof Array) {
      for (const alignMode of align) {
        style.push(RowColAlignment[mode][alignMode]);
      }
    } else if (align) {
      style.push(RowColAlignment[mode][align]);
    }
  }

  computeFitParent(fitParent: boolean | FitMode, style: ViewStyle[]) {
    if (fitParent !== false) {
      style.push(styles.noflex);
    }
    if (fitParent === 'width' || fitParent === true) {
      style.push(styles.fullWidth);
    }
    if (fitParent === 'height' || fitParent === true) {
      style.push(styles.fullHeight);
    }
  }

  computeSpacing(style: ViewStyle[]) {
    const spacingStyle = {
      padding: this.props.padding,
      paddingHorizontal: this.props.paddingHorizontal,
      paddingVertical: this.props.paddingVertical,
      paddingLeft: this.props.paddingLeft,
      paddingRight: this.props.paddingRight,
      paddingTop: this.props.paddingTop,
      paddingBottom: this.props.paddingBottom,
      margin: this.props.margin,
      marginHorizontal: this.props.marginHorizontal,
      marginVertical: this.props.marginVertical,
      marginLeft: this.props.marginLeft,
      marginRight: this.props.marginRight,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom,
    };
    for (const key of Object.keys(spacingStyle)) {
      if (spacingStyle[key] === undefined) {
        delete spacingStyle[key];
      }
    }
    if (Object.keys(spacingStyle).length > 0) {
      style.push(spacingStyle);
    }
  }

  computeStyle(): StyleProp<ViewStyle> {
    const { size, noflex, row, absolute, absoluteFill, fitParent } = this.props;
    if (__DEV__) this.style = [];
    else this.style.length = 0; // empty style array while keeping the reference

    this.style.push({ flex: size });
    if (noflex) this.style.push(styles.noflex);
    if (row) {
      this.style.push(styles.row);
      this.computeAlignment('row', this.style);
    } else {
      this.style.push(styles.col);
      this.computeAlignment('col', this.style);
    }
    if (absolute) this.style.push(styles.absolute);
    if (absoluteFill) this.style.push(styles.absoluteFill);
    if (fitParent) this.computeFitParent(fitParent, this.style);
    this.computeSpacing(this.style);
    return this.mergeStyles(this.style);
  }

  public render() {
    const { row, col, children, ...containerComponentProps } = this.props;
    if (row && col) throw Error("'row' and 'col' cannot be both true");
    this.computeStyle();
    const ContainerComponent = this.ContainerComponent;
    return (
      <ContainerComponent {...containerComponentProps} style={this.style}>
        {children}
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  noflex: {
    flex: 0,
  },
  absolute: { position: 'absolute' },
  absoluteFill: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  row: {
    flexDirection: 'row',
  },
  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  col: {
    flexDirection: 'column',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
});
