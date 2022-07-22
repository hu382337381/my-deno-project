/*
 * @Author       : 胡昊
 * @Date         : 2022-07-22 11:21:11
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-22 11:22:38
 * @FilePath     : /my-project/routes/_404.tsx
 * @Description  :
 */

/** @jsx h */
import { h } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

export default ({ url }: UnknownPageProps) => {
  return <p>404 not found: {url.pathname}</p>;
};
