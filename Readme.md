# A Firebase song directory for MagicSing karaoke system


|Home Screen| Favorites Screen|
|------------|-----------------|
|<img width="432" alt="Capture1" src="https://github.com/user-attachments/assets/3ea88d22-6379-4bcc-979c-b2e5cb154db7" /> | <img width="432" alt="Capture2" src="https://github.com/user-attachments/assets/39c43b83-7143-4ff7-8819-f8b9486eda41" /> |

## How to run with Pre-Reqs

- Request project owner to provide firebase admin sdk private key to be placed under the assets/secrets folder of admin-console-app
- Request project owner to provide firebase sdk config json to be placed under the assets/secrets folder of webapp-angular
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
