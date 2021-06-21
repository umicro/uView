/**
 * 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
 * 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
 */
export default interface color {
  primary: string;
  primaryDark: string;
  primaryDisabled: string;
  primaryLight: string;
  bgColor: string;

  info: string;
  infoDark: string;
  infoDisabled: string;
  infoLight: string;

  warning: string;
  warningDark: string;
  warningDisabled: string;
  warningLight: string;

  error: string;
  errorDark: string;
  errorDisabled: string;
  errorLight: string;

  success: string;
  successDark: string;
  successDisabled: string;
  successLight: string;

  mainColor: string;
  contentColor: string;
  tipsColor: string;
  lightColor: string;
  borderColor: string;
}
