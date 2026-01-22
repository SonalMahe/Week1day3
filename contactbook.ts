interface Contact {
    id: number;
    name :string;
    email? : string;
    phone? : number;
    tags? : string[];
}
let contacts: Contact[] = [];

// function 1. Add Contacts
const addContact=(contact: Contact) => {
contacts.push(contact);
console.log("contact added:", contact.name)
}

//function 2. List Contacts-
const listContacts=() =>{
  for (let contact of contacts) {
    console.log( " Here is contact list",
      contact.id,
      contact.name,
      contact.email,
      contact.phone
    );
  }
}


// Function 3 findByName-
 function findByName(name: string): Contact[] {
  let result = contacts.filter(c => c.name === name);
  console.log("Found", result.length, "contact(s)");
  return result;
}
 
// function 4. removeById



