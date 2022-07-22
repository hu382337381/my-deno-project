/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 17:57:53
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-22 09:04:18
 * @FilePath     : /my-project/routes/countdown.tsx
 * @Description  :
 */
/** @jsx h */
import { h } from "preact";
import Countdown from "../islands/Countdown.tsx";

export default () => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      看看倒计时
      <Countdown target={date.toISOString()} />
    </p>
  );
};
