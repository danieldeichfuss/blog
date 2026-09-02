import type { UserConfig } from "../src/site.config";

const userConfig: UserConfig = {
	title: "Daniel Deichfuß",
	description: "thoughts",

	url: "https://astro-lipi.pages.dev",
	author: "Daniel Deichfuß",

	logo: "/logo.svg",
	avatar: "/avatar.png",

	navigation: [
		{ title: "Writing", url: "/posts" },
		// { title: "Archive", url: "/archive" },
		// { title: "About", url: "/about" },
	],

	footerLinks: [
		{ title: "RSS", url: "/rss.xml" },
		// { title: "Archive", url: "/archive" },
		{ title: "Source", url: "https://github.com/danieldeichfuss" },
	],

	social: [
		{
			title: "GitHub",
			url: "https://github.com/danieldeichfuss",
			icon: "github",
		},
		{
			title: "X",
			url: "https://x.com/danieldeichfuss",
			icon: "x",
		},
		{
			title: "LinkedIn",
			url: "https://linkedin.com/in/danieldeichfuss",
			icon: "linkedin",
		},
	],

	footerCredits: "✍️ Built with Astro & Lipi",

	postsPerPage: 8,
	recentPosts: 6,
	relatedPosts: 4,

	showThemeToggle: true,
	showReadingTime: true,

	heroVariant: "studio",

	annotation: "", // "Writing between filter coffees and terminal windows."
};

export default userConfig;
