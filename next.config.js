
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['6a3kBtNmTu39eXPGyXEVQm'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  