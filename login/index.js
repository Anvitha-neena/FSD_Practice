const express = require('express')
const app = express() // starting point of the server like Main

app.use(express.json())
// 4 Methods : GET,POST,PUT,DELETE
// (URI:uniform resource identifier) URI: http://localhost:3000/users


const users = [
    {
        id:1,
        username:'user1',
        password:'1234'
    },
    {
        id:2,
        username:'user2',
        password:'5678'
    },
    {
        id:3,
        username:'user3',
        password:'4321'
    }
]

//URI : /login

app.post('/login',(req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        res.status(400).json({message:'Invalid Username or Password'})
    }
    else{
        const loggedUser = users.find(user=>user.username === username && user.password === password)
        if(loggedUser){
            res.status(200).json({message:'login successfully'})
        }
        else{
            res.status(401).json({message:'Invalid user credentials'})
        }
    }

})


app.get('/users',(req,res)=>{
    res.status(200).json(users)
})

// app.post('/users',(req,res)=>{
//     const {id,username,password} = req.body
//     const loggedUser = users.find(user=>user.username === username && user.password === password)
//         if(loggedUser){
//             res.status(401).json({message:'User already exists'})
//         }
//         else{
//             users.push({id,username,password})
//             res.status(201).json({message:'User created successfully'})
//         }
    
// })

app.post('/users', (req, res) => {
    const { id, username, password } = req.body;
    if (!id || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }
    users.push({ id, username, password });
    res.status(201).json({ message: 'User created successfully' });
});


app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})


