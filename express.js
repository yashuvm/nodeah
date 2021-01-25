const express=require('express')
const morgan=require('morgan');
const bodyParser=require('body-parser');
const UserRoute=require('./src/routes/userRoutes');


//export app
module.exports=(app)=>{
    var app=express()
    //adding middleware
    //Request body parsing middleware should be above methodOverride
	app.use(bodyParser.json({ type: 'application/*', limit: '30mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));

    app.use('/api/v1',UserRoute)


    return app
}