/*
 * @Author       : 胡昊
 * @Date         : 2022-07-21 17:28:22
 * @LastEditors  : 胡昊
 * @LastEditTime : 2022-07-21 17:38:49
 * @FilePath     : /my-project/routes/search.tsx
 * @Description  :
 */
/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default ({ data }: PageProps) => {
  const { results, query } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
