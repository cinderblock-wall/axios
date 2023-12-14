axios.get('https://reqres.in/api/users?page=2')
.then(res => handleData(res.data.data))
.catch(e => console.log(e))

function handleData(data){
    console.log(data);
}

// Get aka Read
axios.post('https://reqres.in/api/users', {
    firstName: 'Andy',
    lastName: 'Warhol',
    email: 'myGoofyEmail@email.com',
    createdAt: 'Our year of the spahetti Monster 1978'
})
.then(function(response){
    console.log(response.data);
})

//Put aka update
axios.put('https://reqres.in/api/users/201', {
    firstName: 'George',
    lastName: 'Jestson'
})
.then(function(response){
    console.log(response);
})
.catch(function(response){
    console.log(response);
})

//Delete aka delete
axios.delete('https://reqres.in/api/users/201')
.then(function(response){
    console.log(response);
})
.catch(function(response){
    console.log(response);
})