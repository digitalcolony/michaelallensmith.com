import { defineCollection, z } from "astro:content";

// timestamp: r[0],
// 		show_name: r[1],
// 		review: r[2],
// 		finished: r[3],
// 		show_type: r[4],
// 		comments: r[5],

interface ReviewData {
	timestamp: string;
	show_name: string;
	review: string;
	finished: string;
	show_type: string;
	comments: string;
}

const reviews = defineCollection({
	loader: async () => {
		try {
			const url = import.meta.env.SECRET_GOOGLE_SHEET_LINK;
			const response = await fetch(url);
			if (!response.ok) {
				console.error("Failed to fetch reviews:", response.statusText);
				return [];
			}
			const { data } = await response.json();
			console.log(`Fetched ${data.length} reviews`);
			return data.map((review: ReviewData, index: number) => ({
				id: index.toString(),
				timestamp: new Date(review.timestamp).toLocaleDateString(), // Convert timestamp to short date
				showName: review.show_name,
				rating: review.review,
				finished: review.finished, // may need to === "TRUE" to convert to boolean
				showType: review.show_type,
				comments: review.comments,
			}));
		} catch (error) {
			console.error("Error fetching reviews:", error);
			return [];
		}
	},
	schema: z.object({
		id: z.string(),
		timestamp: z.string(),
		showName: z.string(),
		rating: z.string(),
		finished: z.string(),
		showType: z.string(),
		comments: z.string(),
	}),
});

export const collections = { reviews: reviews };
