const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@localhost:27017/graphqltraining?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('eae')
})

mongoose.Promise = global.Promise

module.exports = mongoose
