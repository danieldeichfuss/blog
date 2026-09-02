// src/pages/og.png.ts

import type { APIRoute } from "astro";

import { generateOgImage } from "@/utils/og";

export const GET: APIRoute = async (context) => {
	const png = await generateOgImage({
		title: "Daniel Deichfuß",

		description: "thoughts",

		category: "blog",

		site: "https://danieldeichfuss.com",
	});

	return new Response(png, {
		headers: {
			"Content-Type": "image/png",
		},
	});
};
