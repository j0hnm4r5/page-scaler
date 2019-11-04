import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
	input: `./src/PageScaler.jsx`,
	output: {
		file: `./build/index.js`,
		format: `cjs`,
	},
	external: [`react`],
	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: `node_modules/**`,
		}),
	],
};
