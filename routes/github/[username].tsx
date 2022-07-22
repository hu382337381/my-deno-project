/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 17:16:15
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 17:23:42
 * @FilePath     : /my-project/routes/github/[username].tsx
 * @Description  :
 */
/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

const Page = ({ data }: PageProps<User | null>) => {
  if (!data) {
    return <h1>未找到用户</h1>;
  }
  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
    </div>
  );
};

export default Page;
