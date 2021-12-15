const hex2rgb = (color) => {
  var hexcolor = color.substring(1); // strip #
  var rgb = parseInt(hexcolor, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue
  return [r, g, b];
};

const rgb2hex = (rgb) => "#" + rgb.map((i) => i.toString(16)).join("");

const opcolor = (val) => {
  const [r, g, b] = hex2rgb(val);
  return rgb2hex([255 - r, 255 - g, 255 - b]);
};

function unicolor(str) {
  /*jshint bitwise:false */
  var i,
    l,
    hval = 0x811c9dc5;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }

  const clr = "0000000" + (hval >>> 0).toString(16).substr(-8);
  return "#" + clr.slice( - 8);
}

function luma(hexcolor) {
  var hexcolor = hexcolor.substring(1); // strip #
  var rgb = parseInt(hexcolor, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue

  return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  // if (luma < 40); // dark
}
