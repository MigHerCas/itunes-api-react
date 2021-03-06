const withImages = require('next-images')

module.exports = withImages({
  env: {
    PRODUCTION_URL: "https://itunes-api-react.vercel.app/",
    BASE_API_URL: "https://itunes.apple.com/search",
  },
  images: {
    domains: ['unsplash.it', 'is1-ssl.mzstatic.com', 'is2-ssl.mzstatic.com', 'is3-ssl.mzstatic.com', 'is4-ssl.mzstatic.com', 'is5-ssl.mzstatic.com'],
  },
});
