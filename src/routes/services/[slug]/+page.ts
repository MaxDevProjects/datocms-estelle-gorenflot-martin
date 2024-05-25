import type { RouteParams, ServiceContentVariables } from './$houdini';

export const prerender = true;

export const _ServiceContentVariables: ServiceContentVariables = ({
	params: { slug }
}: {
	params: RouteParams;
}) => ({ slug });
