const fs = require('fs')
const {
  replaceInFiles,
  deploy,
  writeEnv,
  getInfo,
  makeSandboxEndpoint,
} = require('graphql-boilerplate-install')

module.exports = async ({ project, projectDir }) => {
  const templateName = 'graphql-boilerplate'

  const endpoint = await makeSandboxEndpoint(project)

  replaceInFiles(
    ['src/index.js', 'package.json', 'prisma/prisma.yml'],
    templateName,
    project,
  )
  replaceInFiles(['prisma/prisma.yml'], '__PRISMA_ENDPOINT__', endpoint)

  console.log('Running $ prisma deploy...')
  await deploy(false)

  fs.appendFileSync('.gitignore', '.env*\n')

  console.log(`\
Next steps:
  1. Change directory: \`cd ${projectDir}\`
  2. Start local server and open Playground: \`yarn start\`
`)
}
