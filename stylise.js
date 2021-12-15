const inp = document.querySelector("input");
const btn = document.querySelector("span.el-c");
btn.onclick = () =>  navigator.clipboard.writeText(inp.value);

const style = [..."𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"];
const alpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
const _switch = (c) => style[alpha.indexOf(c)];
const stylise = (str) =>
  [...str].map((i) => (alpha.includes(i) ? _switch(i) : i)).join("");

inp.onkeyup = (e) => (inp.value = stylise(inp.value));