repo fork

> git clone <git url>
> code ./TelekiSzimulatorWpfToWeb

> npm init

      enter végig

> npm init playwright@latest

      válaszd Javascript
      enter tovább
      ellenőrizd 6 uj file-t a git statusban

> npx playwright test --headed

    ellenőrizd a 6 lefutott tesztet

package.json: scripts:
"test": "playwright test --headed"

> npm test

      ellenőrizd a 6 lefutott tesztet

uj branch a bal alsó sarkokban: testing
git commit

playwright.config.js:
kommenteztd ki a firefox és webkit projekteket
testDir: "./tests"
reporter: "list"
use:baseURL: "http://localhost:5500"

> npx playwright codegen
