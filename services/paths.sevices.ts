import { portfolioProjects } from '@/data/portfolio';

export const fetchPaths = async () => {
  return portfolioProjects.map((project) => ({
    slug: project.slug.current,
    title: project.title,
    updatedAt: project.updatedAt,
  }));
};
