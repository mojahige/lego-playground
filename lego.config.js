module.exports = {
  sourceDir: "./src",
  preStyle: `
  :host {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }`,
};
