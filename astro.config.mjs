import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/pressure": "http://www.atmos.washington.edu/~neallog/temp_real_pressure.html",
	},
});
