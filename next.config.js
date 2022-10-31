const path = require("path");

module.exports = {
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            app: path.resolve(__dirname, "app"),
            assets: path.resolve(__dirname, "assets"),
            components: path.resolve(__dirname, "components"),
            hooks: path.resolve(__dirname, "hooks"),
            styles: path.resolve(__dirname, "styles")
        }
        return config;
    }
}