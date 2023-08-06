const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const { createPassword } = require('./utils/createPassword')
const { savePassword } = require('./utils/savePassword')

program.version('1.0.0').description('mofaraz password generator')

program
    .option('-l, --length <number>', 'length of password')
    .option('-s, --save', 'save password to passwords.txt') 
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

const generatePassword = createPassword(length, numbers, symbols)

if (save) {
    savePassword(generatePassword)
}

clipboardy.writeSync(generatePassword)

console.log(chalk.blue('Generated Password: ') + chalk.blue(generatePassword))
console.log(chalk.yellow('Password copied to clipboard'))
