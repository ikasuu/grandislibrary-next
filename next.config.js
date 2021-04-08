module.exports = {
    async redirects() {
      // Updating URLS from previous site to new site structure
      return [
        {
          source: '/contents/:slug',
          destination: '/content/:slug', // Matched parameters can be used in the destination
          permanent: true,
        },
        {
            source: '/event/:slug',
            destination: '/events/:slug', // Matched parameters can be used in the destination
            permanent: true,
        },
        {
            source: '/home/content',
            destination: '/content',
            permanent: true,
        },
        {
            source: '/home/classes',
            destination: '/classes',
            permanent: true,
        },
        {
            source: '/home/events',
            destination: '/events',
            permanent: true,
        },
        {
            source: '/home/resources',
            destination: '/resources',
            permanent: true,
        },
      ]
    },
  }