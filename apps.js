const url = "https://breakingbadapi.com/api/characters";
const output = document.querySelector(".output");

const url_q = "https://breakingbadapi.com/api/quotes";
const outputQuote = document.querySelector(".output_q");


function performFetch() {
    fetch(url).then(function(res){
        console.log(res);
        return res.json()
    }).then(function(char_id){
        console.log(char_id);
        output.innerHTML = '';
        let secretValue = document.querySelector('[name=secret]').value;
        let allChar = "all";
        char_id.forEach(function(val) {
            if ( val.name.toUpperCase().includes(secretValue.toUpperCase()) || val.portrayed.toUpperCase().includes(secretValue.toUpperCase())  || val.nickname.toUpperCase().includes(secretValue.toUpperCase()) ) {
                output.innerHTML += `
                <div class="boxes col-lg-4 col-md-6 col-sm-12">
                    <h3>${val.name}</h3>
                    <img class="charImg" src="${val.img} alt="Breaking Bad Character" />
                    <figcaption>
                        <div>Played by: ${val.portrayed}</div>
                        <div>Nickname: ${val.nickname}</div>
                        <div>Occupation: ${val.occupation}</div>
                        <div>Birthday: ${val.birthday}</div>
                        <div class="spaceBtm"></div>
                    </figcaption>
                </div>
                `;
            } else if (secretValue == allChar) {
                
                output.innerHTML += `
                <div class="boxes col-lg-4 col-md-6 col-sm-12">
                    <h3>${val.name}</h3>
                    <img class="charImg" src="${val.img} alt="Breaking Bad Character" />
                    <figcaption>
                        <div>Played by: ${val.portrayed}</div>
                        <div>Nickname: ${val.nickname}</div>
                        <div>Occupation: ${val.occupation}</div>
                        <div>Birthday: ${val.birthday}</div>
                        <div class="spaceBtm"></div>
                    </figcaption>
                </div>
                `;
            }
        })
    }).catch(function(error){
        console.log(error);
    })
}

function formSubmitted(event) {
    event.preventDefault();

    performFetch();
}

const form = document.querySelector(".js-char-stats");
form.addEventListener('submit', formSubmitted);



// To get quotes

function performFetchQ() {
    fetch(url_q).then(function(res){
        console.log(res);
        return res.json()
    }).then(function(quote_id){
        console.log(quote_id);
        outputQuote.innerHTML = '';
        let userInput = document.querySelector("[name=quote]").value;
        quote_id.forEach(function(val) {
            console.log(val.quote +" - " + val.author);
            if(val.author.toUpperCase().includes(userInput.toUpperCase()) || val.quote.toUpperCase().includes(userInput.toUpperCase()) ) {

            outputQuote.innerHTML += `
            <p><span class="theQuote">${val.quote}</span> - ${val.author}</p>
            `;
        } 
        });
    }).catch(function(error){
        console.log(error);
    });
    
}

function submitformQ(eventQ) {
    eventQ.preventDefault();
    let getQuote = document.querySelector("[name=quote]").value;
  

    performFetchQ();
}

const formQuotes = document.querySelector(".quoteSearch");
formQuotes.addEventListener("submit", submitformQ);
