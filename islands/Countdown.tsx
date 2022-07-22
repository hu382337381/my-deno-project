/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 17:49:56
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 18:02:12
 * @FilePath     : /my-project/islands/Countdown.tsx
 * @Description  :
 */
/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

const Countdown = (props: { target: string }) => {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer);
        }
        return new Date();
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  if (now > target) {
    return <span>🎉</span>;
  }

  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
};

export default Countdown;
