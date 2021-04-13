const path = require('path');

function resolve() {
    return path.resolve.apply(path, [__dirname, ...arguments]);
}
const withTM = require('next-transpile-modules')([
    'shared-components',
]);

module.exports = withTM( {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // console.log(defaultLoaders)
        // console.log(config.module.rules)
        // console.log(webpack)

        // config.resolve.alias["shared-components"] = path.resolve(__dirname, '../shared-components/')


        // config.module.rules.forEach(rule => {
        //     if (
        //         rule.use &&
        //         rule.use.loader === 'next-babel-loader'
        //     ) {
        //         // Set Babel root to workspace root, so config applies to workspace modules.
        //         rule.include.push (resolve('../shared-components/lib'));
        //         // But use the local config
        //         // rule.use.options.configFile = resolve('.babelrc');
        //     }
        // });

        // config.module.rules.unshift({
        //     loader: 'next-babel-loader',
        //     test: '/\.(js|jsx)$/',
        //     exclude: /(node_modules|\.next)/,
        //     include: [
        //         resolve('../shared-components/lib')
        //     ]
        // })

        // Important: return the modified config
        return config
    },
})