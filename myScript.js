var text = ["I'm Darsh K Thakkar.",  "I'm Darsh K Thakkar",  "I'm Darsh K Thakka",  "I'm Darsh K Thakk.",  "I'm Darsh K Thak",  "I'm Darsh K Tha", "I'm Darsh K Th", "I'm Darsh K T", "I'm Darsh K ", "I'm Darsh K", "I'm Darsh ", "I'm Darsh", "I'm Dars", "I'm Dar", "I'm Da", "I'm D", "I'm ", "I'm", "I'm ", "I'm a", "I'm an", "I'm an ", "I'm an E", "I'm an En", "I'm an Eng", "I'm an Engi", "I'm an Engi", "I'm an Engin", "I'm an Engine", "I'm an Enginee", "I'm an Engineer", "I'm an Engineer.", "I'm an Engineer", "I'm an Enginee", "I'm an Engine", "I'm an Engin", "I'm an Engi", "I'm an Engi", "I'm an Eng", "I'm an En", "I'm an E", "I'm an ", "I'm an", "I'm a", "I'm ", "I'm", "I'm ", "I'm a", "I'm a", "I'm a ", "I'm a D", "I'm a De", "I'm a Dev", "I'm a Deve", "I'm a Devel", "I'm a Develo", "I'm a Develop", "I'm a Develope", "I'm a Developer", "I'm a Developer.", "I'm a Developer", "I'm a Develope", "I'm a Develop", "I'm a Develo", "I'm a Devel", "I'm a Deve", "I'm a Dev", "I'm a De", "I'm a D", "I'm a ", "I'm a", "I'm a", "I'm ", "I'm", "I'm ", "I'm D", "I'm Da", "I'm Dar", "I'm Dars", "I'm Darsh", "I'm Darsh ", "I'm Darsh K", "I'm Darsh K ", "I'm Darsh K T", "I'm Darsh K Th", "I'm Darsh K Tha", "I'm Darsh K Thak",  "I'm Darsh K Thakk.",  "I'm Darsh K Thakka",  "I'm Darsh K Thakkar"]

var counter = 0;
var elem = document.querySelector(".Text");
var inst = setInterval(change, 100);

function change()
{
    if(text[counter]=="I'm Darsh K Thakkar." || text[counter]=="I'm an Engineer." || text[counter]=="I'm a Developer.")
    {
        clearInterval(inst);
        inst = setInterval(change, 3000);
    }
    else
    {   
        clearInterval(inst);
        inst = setInterval(change,50);
    }
    elem.innerHTML = text[counter];
    counter++;


  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
const form = document.getElementById('my_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to the server here

  // 👇️ Reset the form here
  form.reset();
  alert("Message sent successfully.");
});
