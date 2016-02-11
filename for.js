function lookUp(firstName, prop){
  for (var i = 0; i < contacts.length; i++) { // for loop goes through the directory
if (contacts[i].firstName === firstName) { // checks if the entered first name matches any of the first names in the directory
  if (contacts[i][prop]) { // checks if the entered property matches any properties of that person
  return contacts[i][prop]; // returns the name and property if found
  }
} else {
  return "No such property"; // if the entered property is not found
} 
  }
  return "No such contact"; // if the entered first name is not found
}
