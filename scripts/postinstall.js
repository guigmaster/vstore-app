const fs = require('fs')
const path = require('path')

const envFile = path.join(path.resolve(__dirname), '../src/environments/environment.ts')
const envFileExample = path.join(path.resolve(__dirname), '../src/environments/environment.ts.example')

if (!fs.existsSync(envFile)) {
  fs.copyFileSync(envFileExample, envFile)
}
