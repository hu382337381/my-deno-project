/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 17:09:29
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 17:12:34
 * @FilePath     : /my-project/routes/api/random-uuid.ts
 * @Description  :
 */
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
