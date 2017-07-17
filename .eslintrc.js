module.exports = {
    "extends": "standard",
    "globals": {
        "__DEV__": true
    },
    "plugins": [
        "standard",
        "promise",
        "react",
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [2, 4, { "SwitchCase": 1 }],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "space-before-function-paren": [2, "never"]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};