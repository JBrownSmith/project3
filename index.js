const http = require ("express");

/* Information we are importing and their pathways*/
const express = require('express');
const {users,schedules} = require (`./data`);
const path = require ('path');


/* Initialise Express Server*/
const app = express();
const port = 3000 || process.env.port;

/*‘/', which returns the message "Welcome to our schedule website". */
app.get('/', (req, res) => {
  res.send('Welcome to our website');
});

/*‘/users’, which returns the list of users = CORRECT*/gi
app.get('/users', (req, res) => {
    res.json(users);
  });
console.log(data.users)

/*‘/schedules’, which returns the list of schedules = CORRECT*/
app.get('/schedules', (req, res) => {
    res.json(schedules);
  });
console.log(schedules)

/*GET specific user & schedule - don't use [] / For loop, array of schedules when user = ID then console log*/
app.get('/data/schedules/:user_id', (request, res) => {
    console.log(request.params.user_id);
    const id = request.params.user_id;
    console.log(schedules[id])
    res.json(schedules[id]);
});



/*You can use the `curl` command to make your http queries from the command line. Of course, you can also make your requests in the browser, but doing it from the command line can help you understand how HTTP requests work. 😉


/*For example, here is how to make requests (here, Express is configured to listen on port 3000) :
 
/*$> curl http://localhost:3000/users
[{"firstname":"James","lastname":"Bond","email":"james.bond@gmail.com","password":"b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536"},{"firstname":"Tony","lastname":"Stark","email":"starkrulz@gmail.com","password":"a836ebba36776b21dd0f5cdca497bff65c5bdfc8411cfbfe0111f27bde1c1894"},{"firstname":"Ali","lastname":"G","email":"nameisnotborat@gmail.com","password":"3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c”}]
$>
 
By default, `curl` makes GET requests, but we can change this behavior via options (see Step 4).*/


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
})
