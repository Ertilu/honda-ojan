module.exports = {
  siteUrl: "https://honda-bam.com", // Ganti dengan URL situs Anda
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, "/about"), // Menambahkan halaman /about
    await config.transform(config, "/produk"), // Menambahkan halaman /services // Menambahkan halaman /gallery
  ],
};
