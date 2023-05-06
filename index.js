const app = require('./app');
const port = process.env.PORT || 80;

// listen
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});