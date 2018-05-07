# Security 
### Easy way to prevent/check for vulnerable packages

```
// check all packages for upgrades -> prevent security vulnerabilities
ncu

// Use this command to submit the npm-shrinkwrap.json / package.json files for validation to nodesecurity.io:
nsp check

// Snyk offers both a command-line tool and a Github integration that checks your application against Snyk’s open source vulnerability database for any known vulnerabilities in your dependencies. Install the CLI as follows:
npm install -g snyk
snyk test

// Use this command to open a wizard that walks you through the process of applying updates or patches to fix the vulnerabilities that were found:
snyk wizard
```
