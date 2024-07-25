import { defineCollection, z } from 'astro:content';

const tl = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
        series: z.string(),
        story: z.string().optional(),
        previous: z.number().optional(),
        next: z.number().optional(),
		noIndex: z.boolean().optional(),
		heroImage: z.string(),
	}),
});

export const collections = { tl };
