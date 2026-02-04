import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/about', '/calculators', '/portfolio', '/login'];
  return routes.map((route) => ({
    url: `https://deshfiri.example.com${route}`,
    lastModified: new Date()
  }));
}
