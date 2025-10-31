const PROXY_CONFIG = {
    "/api/digital/**": {
        "target": "http://localhost:4201",
        "secure": false
    },
    "/digital/**": {
        "target": "http://localhost:4201",
        "pathRewrite": {"^/digital": ""},
        "secure": false
    },
    "/api/platform/**": {
        "target": "http://localhost:4202",
        "secure": false
    },
    "/platform/**": {
        "target": "http://localhost:4202",
        "pathRewrite": {"^/platform": ""},
        "secure": false
    },
};

module.exports = PROXY_CONFIG;