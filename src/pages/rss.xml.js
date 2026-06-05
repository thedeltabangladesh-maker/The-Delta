import rss from '@astrojs/rss';
import { getPublishedArticles } from '../lib/articles';
import { SITE } from '../consts';

export async function GET(context) {
  const articles = await getPublishedArticles();
  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.dek ?? '',
      pubDate: a.data.pubDate,
      link: `/articles/${a.id}`,
      categories: [a.data.category],
      author: a.data.author || SITE.defaultAuthor,
    })),
    customData: `<language>en-gb</language>`,
  });
}
