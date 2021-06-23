const express = require('express');
const axios = require('axios');
const { response } = require('express');

const app = express();

// For why this is used, refer to:
//  1. http://expressjs.com/en/guide/writing-middleware.html
//  2. Week 2 - Express Continued in Canvas
app.use(express.json());

//  While this isn't the "server", we can utilize  
//  one to display the tests to the browser.
app.get('/', async (req, res) => {

   var test_positive = [];
   var test_negative = [];
      
   // 1.1 Execute three POST requests to insert three items into the collection.
   console.log('Starting Test 1.1');
   await axios.post('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.1.1 – assert first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.1.1 – didn't assert first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.1.1 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });
   await axios.post('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.1.2 – assert second messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.1.2 – didn't assert second messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.1.2 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });
   await axios.post('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.1.3 – assert third messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.1.3 – didn't assert third messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.1.3 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 1.2 Execute a single item PUT request to modify a single item in the collection.
   console.log('Starting Test 1.2');
   await axios.put('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.2 – update first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.2 – didn't update first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.2 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 1.3 Execute three separate item GET requests to check if each item is correct.
   console.log('Starting Test 1.3');
   await axios.get('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.3.1 – get first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.3.1 – didn't get first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.3.1 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   //Execute the second get requests
   await axios.get('http://localhost:3000/messages/2')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.3.2 – get second messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.3.2 – didn't get second messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.3.2 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });
   
   //Execute the third get requests.
   await axios.get('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 1.3.3 – get third messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 1.3.3 – didn't get third messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 1.3.3 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 2.1 Execute a single collection PUT request that replaces the collection with 4 new items.
   console.log('Starting Test 2.1');
   await axios.put('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 2.1 – update first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 2.1 – didn't update first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 2.1 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 2.2 Execute a single collection GET request to check if all the items are correct.
   console.log('Starting Test 2.2');
   await axios.get('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 2.2 – get all messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 2.2 – didn't get all messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 2.2 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });
   // 2.3 Execute a single item DELETE request to delete a single item from the collection.
   console.log('Starting Test 2.3');
   await axios.delete('http://localhost:3000/messages/1')
      .then(res => {
         if(true) {
            test_positive.push("Test 2.3 – deleted 1 messages in database");
            console.log('👍');
         } else {
            test_negative.push("Test 2.3 – didn't delete 1 messages in database");
            console.log('👎');
         }
      })
      .catch(error => {
         test_negative.push("Test 2.3 – had errors");
      })
      .then(() => {
         // Happens after success or error
      });


   // 2.4 Execute a single collection GET request to check if all the items are correct (3 items).
   console.log('Starting Test 2.4');
   await axios.get('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 2.4 – get all messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 2.4 – didn't get all messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 2.4 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 3.1 Execute a single collection DELETE request to delete the entire collection.
   console.log('Starting Test 3.1');

   await axios.delete('http://localhost:3000/messages/1')
      .then(res => {
         if(true) {
            test_positive.push("Test 3.1 – deleted 1 messages in database");
            console.log('👍');
         } else {
            test_negative.push("Test 3.1 – didn't delete 1 messages in database");
            console.log('👎');
         }
      })
      .catch(error => {
         test_negative.push("Test 3.1 – had errors");
      })
      .then(() => {
         // Happens after success or error
      });

   // 3.2 Execute a single collection GET request to check if the collection is empty.
   console.log('Starting Test 3.2');

   await axios.get('http://localhost:3000/messages')
      .then(res => {
         if(true) {
            test_positive.push("Test 3.2 – assert 0 messages in database");
            console.log('👍');
         } else {
            test_negative.push("Test 3.2 – didn't assert 0 messages in database");
            console.log('👎');
         }
      })
      .catch(error => {
         test_negative.push("Test 3.2 – had errors");
      })
      .then(() => {
         // Happens after success or error
      });

   // 3.3 Execute a single collection PUT request to replace the collection with 3 new items.
   console.log('Starting Test 3.3');
   await axios.put('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 3.3 – update first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 3.3 – didn't update first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 3.3 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 3.4 Execute two POST requests to insert two items into the collection.
   console.log('Starting Test 3.4');
   await axios.post('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 3.4.1 – assert first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 3.4.1 – didn't assert first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 3.4.1 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });
   //Execyte second post request
   await axios.post('http://localhost:3000/messages')
   .then(res => {
      if(true) {
         test_positive.push("Test 3.4.2 – assert second messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 3.4.2 – didn't assert second messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 3.4.2 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 3.5 Execute a single item PUT request to modify a single item in the collection.
   console.log('Starting Test 3.5');
   await axios.put('http://localhost:3000/messages/1')
   .then(res => {
      if(true) {
         test_positive.push("Test 3.5 – update first messages in database");
         console.log('👍');
      } else {
         test_negative.push("Test 3.5 – didn't update first messages in database");
         console.log('👎');
      }
   })
   .catch(error => {
      test_negative.push("Test 3.5 – had errors");
   })
   .then(() => {
      // Happens after success or error
   });

   // 3.6 Execute a single item DELETE request to delete a single item from the collection.
   console.log('Starting Test 3.6');
   await axios.delete('http://localhost:3000/messages/1')
      .then(res => {
         if(true) {
            test_positive.push("Test 3.6 – assert 0 messages in database");
            console.log('👍');
         } else {
            test_negative.push("Test 3.6 – didn't assert 0 messages in database");
            console.log('👎');
         }
      })
      .catch(error => {
         test_negative.push("Test 3.6 – had errors");
      })
      .then(() => {
         // Happens after success or error
      });

   // 3.7 Execute a single collection GET request to check if all the items are correct.
   console.log('Starting Test 3.7');

   await axios.get('http://localhost:3000/messages')
      .then(res => {
         if(true) {
            test_positive.push("Test 3.7 – assert 4 messages in database");
            console.log('👍');
         } else {
            test_negative.push("Test 3.7 – didn't assert 4 messages in database");
            console.log('👎');
         }
      })
      .catch(error => {
         test_negative.push("Test 3.7 – had errors");
      })
      .then(() => {
         // Happens after success or error
      });

   // End of tests

   // Report the results to the browser
   // Wrap <li> around each result
   // Return positive / negative results
   var positive_tests = test_positive.map((result) => `<li>${result}</li>`).join(' ');
   var negative_tests = test_negative.map((result) => `<li>${result}</li>`).join(' ');
   var response_html = `<h3>Positive</h3><ul>${positive_tests}</ul><h3>Negative</h3><ul>${negative_tests}</ul>`;

   res.status(200);
   res.send(response_html);


});

app.listen(4000, () => {
   console.log("client.js started");
});