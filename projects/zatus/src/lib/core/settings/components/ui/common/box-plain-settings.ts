export interface BoxPaddingPlainSettings {
    height?: string;
    padding?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    width?: string;
}

export interface BoxBorderPlainSettings extends BoxPaddingPlainSettings {
    border?: string;
    borderColor?: string;
    borderRadius?: string;
    borderStyle?: string;
    borderWidth?: string;
}

export interface BoxPlainSettings extends BoxBorderPlainSettings {
    margin?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
}
