module.exports = {
  extends: 'airbnb',
  "rules": {
    "brace-style": ["error", "stroustrup"],
    "linebreak-style": 0,
    "lines-around-comment": ["error", {
      "allowBlockStart": true,
      "beforeBlockComment": true,
      "afterBlockComment": true,
      "beforeLineComment": true,
      "afterLineComment": true
    }],
    "max-len": 0,
    "newline-before-return": "error",
    "newline-after-var": "error",
    "no-shadow": ["error", {
      "allow": ["i"]
    }],
    "no-use-before-define": 0,
    "object-curly-newline": ["error", {
      "consistent": true
    }],
    "padding-line-between-statements": ["error",
      { "blankLine": "always", "prev": "*", "next": "block-like" },
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": ["const", "let"] },
      { "blankLine": "any", "prev": ["const", "let"], "next": ["const", "let"] }
    ],
    "radix": 0,
    "space-before-blocks": "error",
    "react/jsx-filename-extension": 0,
    "lines-between-class-members": ["error", {
      "exceptAfterSingleLine": true
    }]
  },
};
