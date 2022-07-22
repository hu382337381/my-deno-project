/*
 * @Author       : 胡昊
 * @Date         : 2022-07-22 11:04:00
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-22 11:05:26
 * @FilePath     : /my-project/routes/myHandler.ts
 * @Description  :
 */
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<any, { data: string }> = {
  GET(_, ctx) {
    return new Response(`middleware data is ${ctx.state.data}`);
  },
};
