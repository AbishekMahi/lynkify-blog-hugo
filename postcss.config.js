const purgecss = require("@fullhuman/postcss-purgecss")({
    content: ["./hugo_stats.json"],
    defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
    },
    safelist: ["html", "body"],
});

module.exports = {
    plugins: [
        ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
    ],
};

// const purgecss = require("@fullhuman/postcss-purgecss")({
//     content: ["./layouts/**/*.html", "./content/**/*.md", "./static/js/**/*.js"],
//     defaultExtractor: (content) => {
//         const els = JSON.parse(content).htmlElements;
//         return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
//     },
//     safelist: [],
// });

// module.exports = {
//     plugins: [
//         require('autoprefixer'), // Add autoprefixer if needed
//         ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
//     ],
// };