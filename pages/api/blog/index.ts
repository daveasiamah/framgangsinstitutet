import { NextApiRequest, NextApiResponse } from 'next';
import { fetchBlogPosts } from "@/utils/contentful";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blogsList = await fetchBlogPosts(req.query?.locale as string || 'sv', !!req.query?.nolimit);
    res.status(200).json({ data: blogsList });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}