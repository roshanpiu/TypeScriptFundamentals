module dynamicTypes{
    //once we asign a type to a var we can't assign other types to it
    var person : string;
    person = 'Roshan';
    console.log(person);

    var person2 = {
        name : 'Roshan',
        age : 24
    }

    console.log(person2.name.substring(0, 2));

}