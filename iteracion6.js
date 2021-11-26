const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    {id: 42, name: 'El gato tactac'}
]
var a = 0
for (var value of toys){
    if (value.name.includes("gato")){
        // toys.splice(value ,1)
        a = a + 1
        console.log(true)
    }
    console.log(value)
    console.log(a)
}


