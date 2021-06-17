# Simple Project with Authentication, usind TDD

## Init

```
yarn
```

## Run in Dev

Configure .env

Create Database
```
yarn db:create
```

Run Migrations
```
yarn db:migrate
```

Run App
```
yarn dev
```

Reset DB
```
yarn db:migrate:reset
```

## Run tests

Configure .env.test

Run Test
```
yarn test
```

See Coverage Report
```
firefox -new-tab __tests__/coverage/lcov-report/index.html
```