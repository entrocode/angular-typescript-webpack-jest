# angular-typescript-webpack-jest

`npm install` (obligatory)

`npm run dev` will run webpack in dev, watch files and run a browsersync server

`npm run dist` will build a standalone webapp that can be deployed

`npm run lib` will generate a component that can get integrated into other projects

`npm run test` will run jest for testing... it transpiles all the typescript files to javascript, tests, and re-maps the coverage.

Adding a coverage threshold to the jest.json file will fail the build, but it won't remap the coverage report

```
"coverageThreshold": {
    "global": {
    "branches": 50,
    "functions": 50,
    "lines": 50,
    "statements": 50
    }
},
```

## TODO

Probably need better angular mocking