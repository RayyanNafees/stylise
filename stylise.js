const inp = document.querySelector("input");
const btn = document.querySelector("span.el-c");
const cnt = document.querySelector(".container");
btn.onclick = () =>{ navigator.clipboard.writeText(inp.value); btn.innerHTML='Copied!'; setTimeout(()=> btn.innerHTML='Copy', 1000) }

const style = [..."𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"];
const alpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
const _switch = (c) => style[alpha.indexOf(c)];
const stylise = (str) =>
  [...str].map((i) => (alpha.includes(i) ? _switch(i) : i)).join("");

const unswitch = (c) => alpha[style.indexOf(c)];
const unstylise = (str) =>
  [...str].map((i) => (style.includes(i) ? unswitch(i) : i)).join("");

// inp.onkeyup = (e) => (inp.value = stylise(inp.value));

inp.onkeyup = (e)  => {
  inp.value = stylise(inp.value)
  navigator.clipboard.writeText(inp.value);
  const clr ='#'+ SHA1(unstylise(inp.value)).slice(0, 8);
  cnt.style.background = clr;
  console.log(clr);
  console.log(unstylise(inp.value));
  document.body.style.background = opcolor(clr);
};
