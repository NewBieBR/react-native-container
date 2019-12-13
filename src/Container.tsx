import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

interface Props {
  center?: boolean | string; // can be "horizontal", "vertical", "both", true or false. !!! true = "both"
  noflex?: boolean; // Container is flex 1 by default, set this to true will disable that
  alignLeft?: boolean;
  alignRight?: boolean;
  alignTop?: boolean;
  alignBottom?: boolean;
  row?: boolean;
  col?: boolean;
  absolute?: boolean;
  absoluteFill?: boolean;
  fitParent?: any; // can be "width", "height", true or false
  fitContent?: boolean; // TODO
  flex?: boolean;
  size?: number;
  style?: any;
  onPress?: () => {}; // TODO
  onLayout?: () => {};
  safeView?: boolean;
  isScrollable?: boolean;
  scrollViewProps?: any;
  avoidKeyboard?: boolean;
  pointerEvents?: string;
  margin?: number | string; // can be number or percentage (= string)
  marginHorizontal?: number | string; // can be number or percentage (= string)
  marginVertical?: number | string; // can be number or percentage (= string)
  marginLeft?: number | string; // can be number or percentage (= string)
  marginRight?: number | string; // can be number or percentage (= string)
  marginTop?: number | string; // can be number or percentage (= string)
  marginBottom?: number | string; // can be number or percentage (= string)
  padding?: number | string; // can be number or percentage (= string)
  paddingHorizontal?: number | string; // can be number or percentage (= string)
  paddingVertical?: number | string; // can be number or percentage (= string)
  paddingLeft?: number | string; // can be number or percentage (= string)
  paddingRight?: number | string; // can be number or percentage (= string)
  paddingTop?: number | string; // can be number or percentage (= string)
  paddingBottom?: number | string; // can be number or percentage (= string)
}

interface State {}

export default class Container extends React.PureComponent<Props, State> {
  static defaultProps = {
    center: false,
    noflex: false,
    alignLeft: false,
    alignRight: false,
    alignTop: false,
    alignBottom: false,
    row: false,
    col: false,
    absolute: false,
    absoluteFill: false,
    fitParent: false,
    fitContent: false,
    flex: true,
    size: 0,
    style: {},
    onPress: () => {},
    onLayout: () => {},
    safeView: false,
    isScrollable: false,
    avoidKeyboard: false
  };

  rowSetAlignment(style: any) {
    var { center, alignBottom, alignLeft, alignTop, alignRight } = this.props;

    if (center === "horizontal" || center === "both" || center === true)
      style.justifyContent = "center";
    if (center === "vertical" || center === "both" || center === true)
      style.alignItems = "center";
    if (alignTop) style.alignItems = "flex-start";
    else if (alignBottom) style.alignItems = "flex-end";
    if (alignLeft) style.justifyContent = "flex-start";
    else if (alignRight) style.justifyContent = "flex-end";
  }

  colSetAlignment(style: any) {
    var { center, alignBottom, alignLeft, alignTop, alignRight } = this.props;

    if (center === "horizontal" || center === "both" || center === true)
      style.alignItems = "center";
    if (center === "vertical" || center === "both" || center === true)
      style.justifyContent = "center";
    if (alignRight) style.alignItems = "flex-end";
    else if (alignLeft) style.alignItems = "flex-start";
    if (alignBottom) style.justifyContent = "flex-end";
    else if (alignTop) style.justifyContent = "flex-start";
  }

  setSize(style: any) {
    var { size, fitParent, noflex } = this.props;

    if (size) style.flex = size;
    if (fitParent === "width" || fitParent === true) style.width = "100%";
    if (fitParent === "height" || fitParent === true) style.height = "100%";
    if (
      noflex ||
      (this.props.style && (this.props.style.width || this.props.style.height))
    )
      style.flex = 0;
  }

  mergeObjects(objects: any) {
    if (!Array.isArray(objects)) return objects;
    var newObjects = [{}].concat(objects);
    return newObjects.reduce((r, c) => Object.assign(r, c), {});
  }

  mergeStyles() {
    return this.mergeObjects(
      [styles.container].concat(
        {
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
          marginBottom: this.props.marginBottom
        },
        this.props.style
      )
    );
  }

  render() {
    var {
      row,
      col,
      flex,
      absolute,
      absoluteFill,
      safeView,
      avoidKeyboard,
      isScrollable,
      scrollViewProps
    } = this.props;
    var style = this.mergeStyles();
    if (absolute || absoluteFill) style.position = "absolute";
    else if (flex) style.flex = 1;
    this.setSize(style);
    if (absoluteFill) {
      style.left = 0;
      style.top = 0;
      style.right = 0;
      style.bottom = 0;
    }
    if (col) style.flexDirection = "column";
    if (row) {
      style.flexDirection = "row";
      this.rowSetAlignment(style);
    } else this.colSetAlignment(style);
    var ContainerComponent: any = View;
    if (safeView) ContainerComponent = SafeAreaView;
    else if (avoidKeyboard) ContainerComponent = KeyboardAvoidingView;
    console.log(style.flex)
    return (
      <ContainerComponent
        pointerEvents={this.props.pointerEvents}
        onLayout={this.props.onLayout}
        style={style}
      >
        {(isScrollable && (
          <ScrollView style={styles.scrollView} {...scrollViewProps}>
            {this.props.children}
          </ScrollView>
        )) ||
          this.props.children}
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  scrollView: { flex: 1 }
});
