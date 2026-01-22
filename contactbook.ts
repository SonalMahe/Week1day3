interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}
let contacts: Contact[] = [];

// function 1. Add Contacts
const addContact = (contact: Contact) => {
    contacts.push(contact);
    console.log("contact added:", contact.name)
}

//function 2. List Contacts-
const listContacts = () => {
    for (let contact of contacts) {
        console.log(
            ` Here is contact list:-,
    ID: ${contact.id},
    Name: ${contact.name},
    Email: ${contact.email},
    Phone: ${contact.phone}`
        )
    }
}


// Function 3 findByName-
function findByName(name: string): Contact[] {
    let result = contacts.filter(c => c.name === name);
    console.log("Found", result.length, "contact(s)");
    return result;
}

// function 4. removeById
function removeById(id: number): boolean {
    let contact = contacts.find(c => c.id === id);

    if (!contact) {
        console.log("Contact not found");
        return false;
    }

    contacts = contacts.filter(c => c.id !== id);
    console.log("Contact removed");
    return true;
}


//testing code 
   addContact({ id: 1, name: "Sonal", email: "sonal@gmail.com", phone: "0711199911" });
   addContact({ id: 2, name: "Arun", email: "arun@gmail.com", phone: "078989889" });
   addContact({ id: 3, name: "Aviraj", email: "aviraj@gmail.com", phone: "089898989" });

console.log("\nAll Contacts:");
listContacts();

console.log("\nSearch Result:");
findByName("Sonal");

console.log("\nRemove Contact:");
removeById(2);
//removeById(1);

console.log("\nContacts After Removal:");
listContacts();

