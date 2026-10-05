import { portfolioProjects } from '@/data/portfolio';
import { ParsedUrlQuery } from 'querystring';

export const fetchProject = async (params: ParsedUrlQuery | undefined) => {
  return portfolioProjects.find((project) => project.slug.current === params?.project) || null;
};
