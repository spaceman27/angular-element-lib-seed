![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
##Publish npm to private registry
npm publish

##Consume npm
#### From private registry
`$ npm i sita-ui --registry http://localhost:4873`

#### From public registry
`$ npm i @angular/core --registry http://localhost:4873`

##Setting up local proxy for deployment
####Manually 
 [install verdaccio](https://verdaccio.org/docs/en/installation)
 copy .npmrc to C:\Users\{your username}\.npmrc
 copy config.yaml to C:\Users\{your username}\AppData\Roaming\verdaccio\config.yaml
 run cmd verdaccio
 ####Docker Image
 