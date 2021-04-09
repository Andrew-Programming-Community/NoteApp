// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });
// console.log(process.argv[3])
//
// const command = process.argv[2]
//
// if (command === 'add') {
//     console.log("Adding note!")
// } else if (command === 'delete') {
//     console.log("Remove note!")
// }
//
const yargs = require('yargs')
yargs.version('1.0.1')

const notes = require('./notes')

// add,remove, read ,list

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    description: 'List notes',
    handler: function () {
        notes.listNotes()
    }
})
//yargs.argv

yargs.parse()
//console.log()
