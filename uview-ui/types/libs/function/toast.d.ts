/**
 * 消息弹窗
 * @param title
 * @param duration 弹窗多少秒后关闭，默认值 1500
 */
declare type toast = (title: string, duration?: number) => void;
export default toast;
