const addMovieModal = document.getElementById('add-modal');

const startAddMovieButton = document.querySelector('header button');

const cancelMovieButton = document.querySelector('.btn--passive');

const addMovieButton = cancelMovieButton.nextElementSibling;

const backdrop = document.getElementById('backdrop');

const userInputs = document.querySelectorAll('input');

const entryText = document.getElementById('entry-text');

const movies = [];

const toggleBackDrop =()=>{
    backdrop.classList.toggle('visible');
}


const toggleMovieModal =()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
}

const cancelClickHandler =()=>{
    toggleMovieModal();
    clearMovieInput();
}

const backdropClickHandler =()=>{
    toggleMovieModal();

}

const clearMovieInput = ()=>{
    for(const userInput of userInputs){
        userInput.value="";
    }
}

const updateUI =()=>{
    if(movies.length===0){
        entryText.style.display= 'block';
    }else{
        entryText.style.display= 'none';
    }
}


const renderMoviesElement =(imgUrlValue,titleValue,ratingValue)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML=`
    <div class="movie-element__image>
    <img src="${imgUrlValue}" alt="${titleValue}"/>
    <div class="movie-element__info>
    <h2> ${titleValue} </h2> 
    <p> ${ratingValue}/5</p> 

    </div>
    `
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const addMovieHandler =()=>{
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim()==="" || imgUrlValue.trim()==="" || ratingValue.trim()==="" || +ratingValue.trim()<1 || +ratingValue.trim()>5 ){
        alert("Please enter valid inputs");
        return;
    }

    const newMovie={
        titleValue,
        imgUrlValue,
        ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderMoviesElement(newMovie.titleValue,newMovie.imgUrlValue,newMovie.ratingValue);
    updateUI();
}



startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelMovieButton.addEventListener('click',cancelClickHandler);
addMovieButton.addEventListener('click',addMovieHandler);