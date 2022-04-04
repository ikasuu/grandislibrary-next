/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://grandislibrary.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}