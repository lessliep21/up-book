let TitleDiv = document.querySelector("#title")
console.log(TitleDiv)

TitleDiv.addEventListener("click",()=>{
console.log(TitleDiv)
  TitleDiv.style.fontSize = "120px"
})



let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage: "https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5407.jpg?v=1585201095687",
    name: "Steven",
    quote: "What do you mean",
    superlative: "the santos"
  },
  
  {
  profileImage: "https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5406.jpg?v=1585201090615",
    name:  "  Yadira  ", 
    quote: "*insert inspirational/corny quote here* :)  ",
    superlative: "  most likely to-be-lawyer "
  },
  
{
  profileImage: " https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5405.jpg?v=1585201085726 ",
    name:  "  Nancy  ", 
    quote: "   Have the courage to exist ",
    superlative: " most shy  "
  },
    
  {
  profileImage: "https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5399.jpg?v=1585201080530",
    name:  "  Nysheara  ", 
    quote: "For every dark night. There is a brighter day. - Tupac Shakur  ",
    superlative: "  most chatty "
  },
  
  {
  profileImage: "https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5398.jpg?v=1585201076165",
    name:  "  Munira  ", 
    quote: "  That's wicked  ",
    superlative: "  Most funny  "
  },
  
  {
  profileImage: "https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5393.jpg?v=1585201067229",
    name:  " Mary   ", 
    quote: "  True confidence leaves no room fr jealousy  ",
    superlative: "  most smart "
},
  
  {
  profileImage: " https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5396.jpg?v=1585201071473 ",
    name:  "  Nayeli  ", 
    quote: " Sometimes you will never know the value of a moment until it becomes a memory   ",
    superlative: "  best dancer  "
  },
  
  {
  profileImage: "  https://cdn.glitch.com/bb6991b8-f6e0-47ab-b34b-f4746c14a9d9%2FIMG_5404.jpg?v=1585201061974",
    name:  "  Daniela  ", 
    quote: " Remember to smile, it's a look that fits great on anyone    ",
    superlative: " also best dancer  "
  },
  
];

let count = 0

let studentLoop= students.length -1

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  if (count> studentLoop){
    count=0
  }
  
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  if (count < 0 ){
    count = studentLoop
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

