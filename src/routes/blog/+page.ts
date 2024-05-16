import type { RouteParams, BlogContentVariables } from './$houdini';

export const prerender = true;

export const _BlogContentVariables: BlogContentVariables = ({
	params: { slug }
}: {
	params: RouteParams;
}) => ({ slug });
