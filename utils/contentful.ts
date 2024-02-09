import { createClient } from 'contentful';

const client = createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
});

export async function fetchBlogPosts(locale: string = 'sv') {
    try {
        const entries = await client.getEntries({
            content_type: 'checkifiedBlogPost',
            locale,
            select: ['fields.title,fields.description,fields.slug,fields.featuredImage', 'sys.createdAt'],
            order: ['-sys.createdAt'],
            // limit: 6
        });
        if (entries.items) return formatBlogPostEntries(entries.items);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }

    return [];
}

export async function fetchBlogPostBySlug(slug: string, locale: string) {
    try {
        const entry = await client.getEntries({
            content_type: 'checkifiedBlogPost',
            'fields.slug': slug,
            locale: locale,
            limit: 1
        });
        if (entry.items.length) return formatBlogPostEntries(entry.items)[0];
    } catch (error) {
        console.error('Error fetching blog post by slug:', error);
    }
    return null;
}

function formatBlogPostEntries (entries: any) {
    return entries.map((entry: any) => ({
        id: entry.sys.id,
        title: entry.fields.title,
        subtitle: entry.fields.description,
        imageUrl: `https:${entry.fields.featuredImage?.fields?.file?.url}`,
        date: new Date(entry.sys.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        slug: entry.fields.slug,
        blogContent: entry.fields.blogContent || null,
        author: entry.fields.author  || "",
        authorProfile: `https:${entry.fields.authorProfile?.fields?.file?.url}` || "",
      }));
}