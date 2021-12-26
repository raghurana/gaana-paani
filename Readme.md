## Pre-reqs

- Request project owner to provide firebase admin sdk private key to be placed under the assets/secrets folder of admin-console-app
- Request project owner to provide firebase sdk config json to be placed under the assets/secrets folder of webapp-angular

## How to run

- All Apps at once `npm start` from the workspace root. Apps will be hot reloaded for changes
- Admin consle app only `npm run start-admin-console`

## To add new npm packages

`lerna add <npm-package> --scope=gaana-paani-admin-console-app`
OR
`lerna add <npm-package> --scope=gaana-paani-ng-webapp`

The value of scope is defined in package.json name property for the application package.
Another example for adding dev dependencies

`lerna add @types/<npm-package> --dev --scope=gaana-paani-admin-console-app`

## To add/remove firebase capabilities

Make sure you have firebase cli installed and run `firebase init`

## To deploy

`firebase login`

after successful login, from the packages/webapp-angular directory

`npm run deploy`

## Notes

- Clean node_modules from individual packages `lerna clean -y`
- To have a root level node_modules folder common to all packages `lerna bootstrap --hoist`
