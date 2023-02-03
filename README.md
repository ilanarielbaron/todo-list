
## Execution steps:
 - cd packages/api
 - docker compose up -d
 - yarn
 - npx typeorm-ts-node-commonjs migration:run -d src/utils/data-source.ts
 - yarn start
 - cd ../ui 
 - yarn
 - yarn start
