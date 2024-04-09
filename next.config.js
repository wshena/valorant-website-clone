const { hostname } = require("os");

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "media.valorant-api.com",
      },
      {
        hostname: "images.contentstack.io",
      }
    ]
  }
};
