 //create object using JSON

 function function1(){
     const person = {
         name: 'person1',
         email: 'person1@test.com',
         age: 40
     }
    console.log(person);
    console.log(`type of person = ${typeof(person)}`);
 }
 //function1()

 function function2(){
     const persons = [
    {name: 'person1', email: 'person1@test.com'},
    {name: 'person2', email: 'person2@test.com'},
    {name: 'person3', email: 'person3@test.com'},
    {name: 'person4', email: 'person4@test.com'},
     ]
     console.log(persons);
     console.log((`type of persons = ${typeof(persons)}`));
 }
 //function2()
function canVote(person){
    if (person['age'] >= 18){
        console.log(`person ${person[`name`]} is eligible for voting`);
    }else{
        console.log(`person ${person[`name`]} is not eligible for voting`);
    }
}
 function function3(){
     const p1 = {name: 'person1',email: 'person1@test.com',age: 40 }
     canVote(p1)
     //p1.canvote()
     const p2 = {name: 'person2',email: 'person2@test.com',age: 10 }
     canVote(p2)
     //p2.canVote()
     const p3 = {name: 'person3',email: 'person3@test.com',age: 15 }
    canVote(p3)
    //p3.canVote()
}

//function3()

/*class Person{
    private:
    int age;
    char *name;
    char *email;

    public:
    void canVote();
};

Person *p = new Person(...);
p->canVote();

*/

function function4() {
    const p1 = {name: 'person1',email: 'person1@test.com',age: 40 }

    console.log(`name: ${p1['name']}`);
    console.log(`email: ${p1['email']}`);
    console.log(`age: ${p1['age']}`);
}

//function4()

function function5() {
    const p1 = {name: 'person1',email: 'person1@test.com',age: 40 }

    console.log(`name: ${p1.name}`);
    console.log(`email: ${p1.email}`);
    console.log(`age: ${p1.age}`);
}
//function5()

function function6(){
    const person = {
        'first name': 'steve',
        'last name': 'jobs'
    }

    console.log(`first name = ${person['first name']}`);
    console.log(`last name = ${person['last name']}`);

}
//function6()

function canVotePerson(person){
    console.log(`inside canVotePerson`);
    console.log(this);
    if (this['age'] >= 18){
        console.log(`person ${this[`name`]} is eligible for voting`);
    }else{
        console.log(`person ${this[`name`]} is not eligible for voting`);
    }
}

function function7(){
    const p1 = {name: 'person1',email: 'person1@test.com',age: 40 }
    const p2 = {name: 'person2',email: 'person2@test.com',age: 10 }
    const p3 = {name: 'person3',email: 'person3@test.com',age: 15 }


    //function alias
//     const myCanVote = canVotePerson
//     myCanVote(p1)
 }

//function7()

function function8(){
    const p1 = {name: 'person1',email: 'person1@test.com',age: 40 }
    const p2 = {name: 'person2',email: 'person2@test.com',age: 10 }
    const p3 = {name: 'person3',email: 'person3@test.com',age: 15 }

    //add the function alias into the objects

p1.canVote = canVotePerson
p2.canVote = canVotePerson
p3.canVote = canVotePerson

p1.canVote()
p2.canVote()
p3.canVote()
}
//function8()

function function10(){
    console.log(arguments);
    console.log(this);
}
function10()