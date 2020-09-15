const foodRouter = require('./food.router')
const siteRouter =   require('./site.router')
const   express = require('express')
const app = express()
function router(app) {
    app.use('/food',        foodRouter)

    
    app.use('/site', siteRouter)
}

module.exports = router
