//Source code used for reference
/***************************************************************************************
*    Title: <Node, Express & MongoDB: Button click example>
*    Author: <aeerity>
*    Availability: <https://gist.github.com/aerrity/fd393e5511106420fba0c9602cc05d35>
***************************************************************************************/


console.log('Client-side code running');

const button = document.getElementById('myButton1');
button.addEventListener('click', function(e) {
  console.log('button was clicked');


fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});


const button2 = document.getElementById('myButton3');
button2.addEventListener('click', function(e) {
  console.log('button was clicked');
  fetch('/clicked2', {method: 'POST'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });

});
