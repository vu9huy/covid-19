const dataApi = 'https://corona.lmao.ninja/v2/countries?sort=country'
fetch(dataApi)
    .then((reponses)=>reponses.json())
    .then((data)=>{
        // data.map((country)=>{
        //     document.querySelector('.container').innerHTML += 
        //     `<div class="item">
        //     <img src=${country.countryInfo.flag}>
        //     <h2 class='country'>${country.country}:<h2>
        //     <p>Total active cases: <span>${country.cases.toLocaleString()}</span></p>
        //     <p>Total dead cases: <span>${country.deaths.toLocaleString()}</span></p>
        //     </div>
        //     `
        // })
        for(let i=data.length-1; i >=0 ; i--){
            document.querySelector('.container').innerHTML += 
            `<div class="item">
                <img src=${data[i].countryInfo.flag}>
                <h2 class='country'>${data[i].country}:</h2>
                <div class='info'>
                    <h2>Total active cases: <span>${data[i].cases.toLocaleString()}</span></h2>
                    <h2>Total dead cases: <span>${data[i].deaths.toLocaleString()}</span></h2>
                </div>
            </div>`
            
            console.log(data[i]);
        }
    })

