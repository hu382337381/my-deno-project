/*
 * @Author       : 胡昊
 * @Date         : 2022-07-22 14:09:40
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-22 14:12:06
 * @FilePath     : /my-project/routes/_500.tsx
 * @Description  :
 */
/** @jsx h */
import { h } from "preact";
import { ErrorPageProps } from "$fresh/server.ts";

export default ({ error }: ErrorPageProps) => {
  return <p>500 internal error: {(error as Error).message}</p>;
};
