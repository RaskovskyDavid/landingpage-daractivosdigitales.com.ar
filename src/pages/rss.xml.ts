import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'DAR Activos Digitales — Blog Técnico',
    description: 'Notas, arquitectura, sistemas distribuidos, .NET y agentes de software para empresas.',
    site: context.site ?? 'https://daractivosdigitales.com.ar',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>es-AR</language>`,
  });
}
