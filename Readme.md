
# How to run

- All Apps at once `npm start` from the workspace root. Apps will be hot reloaded for changes
- Admin consle app only `npm start-admin-console`

# Notes

- Clean node_modules from individual packages `lerna clean -y`
- To have a root level node_modules folder common to all packages `lerna bootstrap --hoist`
