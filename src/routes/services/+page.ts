import type { RouteParams, ServicesContentVariables } from './$houdini';

export const prerender = true;

export const _ServicesContentVariables: ServicesContentVariables = ({
	params: { slug }
}: {
	params: RouteParams;
}) => ({ slug });
