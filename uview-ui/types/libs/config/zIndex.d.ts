// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */

export default interface ZIndex {
  toast: number;
  noNetwork: number;
  /**
   * popup包含popup，actionsheet，keyboard，picker的值
   */
  popup: number;
  mask: number;
  navbar: number;
  topTips: number;
  sticky: number;
  indexListSticky: number;
}
