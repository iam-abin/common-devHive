to create and publish an npm package,

create a folder common,
npm init

give name to the package, eg:- @abijobportal/common
git init
git add .
git commit -m "initial commit"
npm login (type it if not alerady loggied) 
then, 
npm publish --access public ("--access public" will only in first publish )

next time,

npm version patch (to update version)
npm run build
npm publish

or we can automate using following script in package.json

1. "scripts": {
    "clear": "del ./build/*",
    "build": "npm run clear && tsc",
    "pub": "git add . && git commit -m \"Updates\" && npm version patch && npm run build && npm publish"
  }

  2. npm run pub