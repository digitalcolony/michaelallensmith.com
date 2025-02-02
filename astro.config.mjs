import { defineConfig } from "astro/config";

export default defineConfig({
	redirects: {
		"/pressure": {
			status: 301,
			destination: "http://www.atmos.washington.edu/~neallog/temp_real_pressure.html",
		},
	},
});
