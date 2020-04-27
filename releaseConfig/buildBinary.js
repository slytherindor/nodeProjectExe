const { compile } = require('nexe')
 
console.log(process.argv);
compile({
  input: '/Users/ryan/Workspaces/NodeSpaces/jsExecutableProject/dist/index.js',
  output: 'printValue',
  targets: ['windows-x86-6.11.2'],
}).then(() => {
  console.log('success')
})