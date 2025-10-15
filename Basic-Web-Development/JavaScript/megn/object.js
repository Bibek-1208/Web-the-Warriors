//Object-store data in key-value pairs




                      //Creating an object
                      let person ={
                        name: "bibek",
                        age: 21,
                        city: "nagpur",
                      }

                      //Accessing value 
                      console.log(person.name) // bibek
                      console.log(person["city"]) // nagpur

                      //adding new value
                      person.country = "India"
                      person["hobby"] = "coding"

                      console.log(person)

                      //Changing value
                      person.age = 20
                      console.log(person.age) //20

                      //Deleting a property
                      delete person.city
                      console.log(person)
