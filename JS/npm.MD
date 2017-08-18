# NPM Course

www.npmjs.com

"npm i express"  -- short for "npm install express"
"npm i gulp -g" -- installs globally


"npm set init-author-name 'Vaibhav' "
        init-version
        init-license
        init-author-email
        init-author-url


"npm i express -S"  ->  writes the dependencies to package.json
"npm i karma -D"  -> saves as dev dependency to package.json


"npm list"  -> Listing installed packages
"npm list -g --depth 0" -> lists global packages


"npm uninstall __ --save" == "npm rm/un/r __ --save"


"npm update" --> updates everything


npm install '@github link'
npm install gist:'@HASH'


"npm search keywords"


"npm prune" --> removes all packages that are not dependencies


In package.json

"scripts": {

    "prestart": "node prestart.js"
    "test": "node test.js",
    "start": "node index.js",
    "uglify": "gulp uglify",
    "poststart": "node poststart.js"
}

--> npm run uglify



