import type { Plugin } from "vite";

export default function testPlugin(): Plugin {
  return {
    name: "test-plugin",
    apply: "serve",
    enforce: "pre",
    transform(code, id, options?) {
      console.log(code);
      return;
    },
  };
}
