

// const movieTitle = document.querySelector('.title movie');
// movieTitle.addEventListener()

fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((films) => {
        console.log(films);

const arr = [];
for (let i =0; i < films.length; i++){
    
    let obj =films[i].title;
    if(obj[i]){
        arr.push(obj);
        
    }

}
console.log(arr);


const movieSelection = document.querySelector("#movie-selection");

arr.forEach((element) => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    movieSelection.append(option);
})
const title18 = films[17].title;
const title15 = films[15].title;
const title20 = films[20].title;

option = document.createElement("option");
option.value = title18;
option.textContent = title18;
movieSelection.append(option);


option = document.createElement("option");
option.value = title15;
option.textContent = title15;
movieSelection.append(option);


option = document.createElement("option");
option.value = title20;
option.textContent = title20;
movieSelection.append(option);



document.getElementById("#movie-selection").addEventListener('input', (event) => {
    const name = document.createElement("section");
    const h3 = document.createElement("h3")
    // const p = document.createElement("p");
    // const p2 = document.createElement("p");

    movieInf.append(section);
    movieInf.append(h3);
    // movieInf.append(p);
    // movieInf.append(p2);

    h3.textContent = option;
    console.log(h3);

    // for (let i =0; i < films.length; i++) {
    //     let movie = films[i].title;
   

    //     if(movie === option){
    //         h3.textContent = movie;
    //         p.textContent = films[i].release_date;
    //         p2.textContent = films[i].description;


    //     }
    // }
    


})
// function display (movie, release, description) => {

// }




})
.catch((error) => {
    console.log('Error:', error);
});