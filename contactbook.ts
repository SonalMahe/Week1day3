interface Contact {
    id: number;
    name :string;
    email? : string;
    phone? : number;
    tags? : string[];
}
let contacts: Contact[] = [];

// function 1.
const addContact=(contact: Contact) => {
contacts.push(contact);
console.log("contact added:", contact.name)
}