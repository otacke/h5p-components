// eslint-disable-next-line no-use-before-define, no-var
var H5P = H5P || {};
H5P.Components = H5P.Components || {};

H5P.Components.PlaceholderImg = (function () {
  /**
   * Create a themed placeholder svg
   */
  function PlaceholderImg(svg) {
    const { createElement } = H5P.Components.utils;

    return createElement('div', {
      classList: 'h5p-theme-placeholder-img',
      innerHTML: svg ?? placeholder,
    });
  }

  // Has to be a variable, instead of a file for security reasons
  // Can't use img, or object with a path since we need to access variables outside the svg
  const placeholder =
    '<svg version="1.1"id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">' +
      '<style type="text/css">' +
        '.st0{fill:var(--h5p-theme-alternative-darker);}' +
        '.st1{fill:var(--h5p-theme-alternative-base);}' +
        '.st2{fill:var(--h5p-theme-alternative-dark);}' +
        '.st3{fill:var(--h5p-theme-ui-base);}' +
      '</style>' +
      '<g>' +
        '<path class="st0" d="M369.3,388.9c-0.5,0.2-1,0.3-1.5,0.4l-257.8,36c-2.3,0.3-4.7-0.3-6.6-1.7c-1.9-1.4-3.1-3.5-3.4-5.8L64,159.9c-0.7-4.8,2.7-9.3,7.5-10l257.8-36c2.3-0.3,4.7,0.3,6.6,1.7c1.9,1.4,3.1,3.5,3.4,5.8l36,257.8C375.9,383.5,373.3,387.6,369.3,388.9z"/>' +
        '<rect x="113.8" y="103" transform="matrix(0.1337 -0.991 0.991 0.1337 -21.8517 475.0013)" class="st1" width="294" height="294"/>' +
        '<polygon class="st2" points="244.1,396.1 252.1,337.1 181.3,279.3 102.9,320.5 95.4,376 	"/>' +
        '<polygon class="st0" points="100.4,338.9 193.4,289.9 181.6,279.1 103,319.8 	"/>' +
        '<path class="st0" d="M172,89.7c12,47.4,51.6,85.1,103.1,92.1c51.4,6.9,99.7-18.9,123.8-61.4L172,89.7z"/>' +
        '<g>' +
          '<g>' +
            '<path class="st2" d="M300.9,107.1l-88.3,47c17.2,14.4,38.6,24.3,62.6,27.5c51.4,6.9,99.6-18.8,123.7-61.4L300.9,107.1L300.9,107.1z"/>' +
          '</g>' +
        '</g>' +
        '<polygon class="st2" points="401.1,309 351.6,268.5 136.9,381.6 386.8,415.3 	"/>' +
        '<polygon class="st0" points="170.9,386.2 367.4,282.4 351.9,268.3 134.1,381.2 	"/>' +
        '<path class="st3" d="M387.3,425.3c-0.6,0-1.2,0-1.8-0.1L94.1,385.9c-2.6-0.4-5-1.7-6.6-3.8c-1.6-2.1-2.3-4.8-2-7.4l39.3-291.4c0.7-5.5,5.8-9.3,11.2-8.6l291.4,39.3c2.6,0.4,5,1.7,6.6,3.8c1.6,2.1,2.3,4.8,2,7.4l-39.3,291.4C396,421.5,392,425.1,387.3,425.3zM106.7,367.5l271.5,36.6l36.6-271.5L143.3,95.9L106.7,367.5z"/>' +
      '</g>' +
    '</svg>';

  return PlaceholderImg;
})();
