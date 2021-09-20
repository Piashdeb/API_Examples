const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    /*  for(const country of countries){
         console.log(country);
     } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name:${country.name}</h3>
        <p>Capital:${country.capital}</p>
        <img width="200px" src="${country.flag}">
        `
        countriesDiv.appendChild(div);
        // <button onclick=loadCountryByName('${country.name}')>Details</button>


        // const h3 = document.createElement('h3');
        // div.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        
    });
}
/* const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then (data =>displayCountryDetail(data[0]));
}
const displayCountryDetail = country =>{
    const countrydiv = document.getElementById('country-detail');
    console.log(country);
    countrydiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>

    ` */
    // <img width="200px" src="${country.flag}">
//}