const inputEl = document.getElementById("input");
const infotextEL = document.getElementById("info-text");
const meaningEl = document.getElementById("meaning-container");
const titleEL = document.getElementById("title");
const meanEL = document.getElementById("meaning");
const audioEl = document.getElementById("audio");




async function fetchAPI(word)
{
       try {
              infotextEL.style.display= "block";
              meaningEl.style.display="none";

              infotextEL.innerText = `Searching the meaning of "${word}"`;
              const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
              const result = await fetch(url).then((res)=>res.json());
              if(result.title){
                     
                     meaningEl.style.display ="block";
                     titleEL.innerText = word;
                     meanEL.innerText = "N/A"
                     audioEl.style.display = "none";
              }
              else{
              infotextEL.style.display = "none";
              meaningEl.style.display ="block";
              audioEl.style.display="inline-flex";
              titleEL.innerText = result[0].word;
              meanEL.innerText = result[0].meanings[0].definitions[0].definition;
              audioEl.src = result[0].phonetics[0].audio;
              }

            
              
       } catch (error) {

              console.log(error);
              infotextEL.innerText = `An Error happend Try again later`;
              
       }
 
}

inputEl.addEventListener("keyup",(e) =>{
       if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value)
       }
})