var database = 
[
    {
        username: "test1",
        password: "111"
    },
    {
        username: "test2",
        password: "222"
    },
    {
        username: "test3",
        password: "333"
    }
];

var newsFeed = 
[
    {
        username: "Bobby",
        timeline: "Super cool!"
    },
    {
        username: "Sally",
        timeline: "This is indeed cool!"
    }
];

var usernamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password)
{
    for(var i=0; i < database.length; i++)
    {
        if (database[i].username === username && database[i].password === password)
        {
            return true;
        }
    }
    return false;
}

function signIn(username, password) 
{
    if (isUserValid(username, password) === true)
    {
        console.log(newsFeed);
    }
    else
    {
        alert("Wrong username or wrong password!");
    }
}

signIn(usernamePrompt, passwordPrompt);