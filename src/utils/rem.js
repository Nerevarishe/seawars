/**
 * Convert px to rem
 * @param data
 * @returns {string}
 */

const rem = (data) => {
  // Split all values
  const dataArray = data.split(" ");
  const convertedArray = [];
  dataArray.forEach((element) => {
    // parse pixel value
    const pixels = parseInt(element);
    // Convert to rem. Important: change divider to html tag font size
    const rem = pixels / 16 + "rem";
    convertedArray.push(rem);
  });
  return convertedArray.join(" ");
};

export default rem;
