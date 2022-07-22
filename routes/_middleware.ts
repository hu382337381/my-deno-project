/*
 * @Author       : 胡昊
 * @Date         : 2022-07-22 11:00:50
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-22 11:09:27
 * @FilePath     : /my-project/routes/_middleware.ts
 * @Description  :
 */

import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export const handler = async (
  _req: Request,
  ctx: MiddlewareHandlerContext<State>
) => {
  ctx.state.data = "myData";
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
};
