/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 16:49:25
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 16:51:25
 * @FilePath     : /my-project/routes/greet/[name].tsx
 * @Description  :
 */

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

const GreetPage = (props: PageProps) => {
  const { name } = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
};

export default GreetPage;
