const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var key in alien){
    console.log( "El alien tiene como " + key + " " +  alien[key])
}