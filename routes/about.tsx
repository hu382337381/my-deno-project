/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 16:21:33
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 17:02:28
 * @FilePath     : /my-project/routes/about.tsx
 * @Description  :
 */

/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    console.log("resp", resp);
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

const AboutPage = () => {
  return (
    <main>
      <h1>关于</h1>
      <p>这是关于页面</p>
    </main>
  );
};

export default AboutPage;
