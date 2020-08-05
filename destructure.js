//Object Destructure

const person = { name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Emma Watson', address: 'Washington', phone: '01723456', friends: ['Tom', 'Justin','Cruise']};

const { phone } = person;
const { gfName, address, salary } = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
console.log(phone);
console.log(gfName, phone, address, salary);

const complexObject = {
    name :'abc',
    info: {
        address: 'New York',
        leader : 'Ashafque'
    }
}

const { leader } = complexObject.info;
console.log(leader);


//Array Destructure
const friends = ['Shakib', 'Rimon', 'Tushar', 'Salamn'];
const [ choto, nextFriend, ...remainingFriends ] = friends;
console.log(choto, nextFriend, remainingFriends);