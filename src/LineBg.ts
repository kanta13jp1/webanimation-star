import { randomWithin, randomFrom } from "./utils/Random.js";

/**
 * 指定の要素に背景を生成します
 * @param parent
 * @param colors
 * @param count
 */
export const createLines = (
  parent: HTMLElement,
  colors: string[],
  count: number
) => {
  const elms = new Array(count)
    .fill(0)
    .map((_) => document.createElement("div"));
  elms.forEach((el) => {
    const st = el.style;
    st.position = "absolute";
    st.left = "-50%";
    st.top = `${randomWithin(0, 100)}%`;
    st.width = "200%";
    st.height = `${randomWithin(3, 20)}%`;
    st.transform = `rotate(${randomWithin(-20, 20)}deg)`;
    st.opacity = `${randomWithin(0.1, 0.5)}`;
    st.backgroundColor = randomFrom(colors);
    st.mixBlendMode = "darken";
    parent.appendChild(el);
  });
};
