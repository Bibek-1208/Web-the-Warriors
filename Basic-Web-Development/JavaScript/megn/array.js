//An array is a special variable that can hold multiple values under a single name.

//Arrays are ordered, zero-indexed (first element at index  0)


     let fruits = ["Apple", "Banana", "Mango"];
     console.log(fruits[0]); // Output: Apple



    // 2. Creating an Array

          //There are two common ways:

                      // Using array literal:

                                 let numbers = [1, 2, 3, 4, 5];


                      //Using Array constructor:

                                let colors = new Array("Red", "Green", "Blue");



    // 3. Accessing Array Elements

        //You can access elements using index numbers.

       //Index starts from 0.

                               let arr = [10, 20, 30];
                               console.log(arr[1]); // Output: 20



    // 4. Changing Elements

                       let fruits = ["Apple", "Banana", "Mango"];
                       fruits[1] = "Orange";
                        console.log(fruits); // ["Apple", "Orange", "Mango"]




    //  5. Array Properties

        //length → Returns total number of elements.

                        let fruits = ["Apple", "Banana", "Mango"];
                        console.log(fruits.length); // 3

    //   6. Array Methods (Most Important)
                                              //  A. Adding and Removing Elements
                                             //   Method	        Description	              Example
                                            //    push()	        Adds to end	              arr.push(5)
                                            //    pop()	            Removes from end	      arr.pop()
                                            //    unshift()	        Adds to start	          arr.unshift(1)
                                            //    shift()	        Removes from start	      arr.shift()



                                                    let arr = [2, 3];
                                                    arr.push(4);     // [2, 3, 4]
                                                    arr.unshift(1);  // [1, 2, 3, 4]










                     //slice() - method return a copy of a portion of an array/string without changing the original one
                    //syntax- array.slice(startindex, endindex) 



                                                let num = [10,20,30,40,50,60]

                                                let mid= num.slice(1,4)
                                                console.log(mid)

                                                let last= num.slice(-5)   //using negative index print last 5 number
                                                console.log(last)

                                                let copyarr = num.slice()   //copy the whole array
                                                console.log(copyarr)



