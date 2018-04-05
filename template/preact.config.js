import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
import crypto from 'crypto';
import criticalCssPlugin from 'preact-cli-plugin-critical-css';

export default function(config, env, helpers) {
	const { source } = env;

	// Additional top-level alias
	config.resolve.modules = config.resolve.modules.concat(['src']);

	// Include extra folders for CSS modules
	config.module.loaders[4].include = config.module.loaders[4].include.concat([
		source('elements'),
		source('layouts')
	]);
	config.module.loaders[5].exclude = config.module.loaders[5].exclude.concat([
		source('elements'),
		source('layouts')
	]);

	// Copy assets into build folder
	config.plugins.push(
		new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }])
	);

	// ENV variables
	const url = process.env.URL || 'http://localhost:8080';
	const gaId = process.env.GAID || 'UA-115747865-1';

	config.plugins.push(
		new webpack.DefinePlugin({
			GAID: JSON.stringify(gaId),
			URL: JSON.stringify(url),
			CACHEBUSTER: JSON.stringify(crypto.randomBytes(5).toString('hex'))
		})
	);

	const HtmlPlugin = helpers.getPluginsByName(config, 'HtmlWebpackPlugin');
	HtmlPlugin.forEach(page => {
		page.plugin.options.url = url;
		page.plugin.options.gaId = gaId;
		page.plugin.options.title = '{{ name }}';
		page.plugin.options.description = 'Page description';
	});

	// Inline critical CSS
	criticalCssPlugin(config, env, {});
}
