const image = document.getElementById('image');

const centerbutton = document.getElementById('button-center');
const centerright = document.getElementById('button-right');
const centerleft = document.getElementById('button-left');

const maintext = document.getElementById('text-content');
const bottontextcenter = document.getElementById('botton-text-center');
const bottontextright = document.getElementById('botton-text-right');
const bottontextleft = document.getElementById('botton-text-left');


let step = 0;

centerbutton.addEventListener('click', function handleClick() {
    
    switch(step) {
        case 0:
            image.style.backgroundImage = "url('images/icebergsceneText.png')";
            bottontextcenter.innerHTML = 'Continue';
            maintext.style.display = "block";
            break;
        case 1:
            image.style.backgroundImage = "url('images/katara_with_the_water_background.png')";
            maintext.innerHTML = "Katara: Who are you? You just came out of that iceberg!";
            maintext.style.color = 'black';
            break;
        case 2:
            maintext.innerHTML = "Aang: My name is Aang, I am the Avatar.";
            maintext.style.color = 'blue';
            break;
        case 3:
            maintext.innerHTML = "Katara: The avatar?? He disappeared 100 years ago!";
            maintext.style.color = 'black';
            break;
        case 4:
            maintext.innerHTML = "Aang: Wow, I had no idea I had been frozen this long!";
            maintext.style.color = 'blue';
            break;
        case 5:
            maintext.innerHTML = "Katara: The Fire Nation started a war right after you disappeared. You're 112 years old?";
            maintext.style.color = 'black';
            break;
        case 6:
            maintext.innerHTML = "Aang: I guess? I think I need to defeat the Fire Nation.";
            maintext.style.color = 'blue';
            break;
        case 7:
            maintext.innerHTML = "Katara: Do you want to go to the water nation with us or back home to the air nation?";
            maintext.style.color = 'black';
            centerbutton.style.display = "none";
            centerright.style.display = "block";
            centerleft.style.display = "block";
            break;
        case 9:
            image.style.backgroundImage = "url('images/zuko.png')";
            maintext.innerHTML = "Zuko: You summoned me father?";
            break;
        case 20:
            maintext.innerHTML = "Lord Ozai: Yes son, I've received word that the Avatar has been awoken, I need you to hunt him down and kill him.";
            break;
        case 21:
            image.style.backgroundImage = "url('images/airtemple.png')";
            maintext.style.display = 'none';
            break;
        case 22:
            image.style.backgroundImage = "url('images/katara_air.png')";
            maintext.innerHTML = "Katara: Wow, it's the air nation! I've never been here!";
            maintext.style.display = 'block';
            maintext.style.color = 'black';
            break;
        case 23:
            maintext.innerHTML = "Aang: It's just as beautiful as I remember.";
            maintext.style.color = 'blue';
            break;
        case 24:
            maintext.innerHTML = "Katara: It doesn't look like there is anyone here, you must be the last airbender";
            maintext.style.color = 'black';
            break;
        case 25:
            maintext.innerHTML = "I vow I will fulfill my destiny of becoming a full Avatar and return balance to the world by defeating the Fire Nation.";
            maintext.style.color = 'blue';
            break;
    }
    step++;
});


centerright.addEventListener('click', function handleClick() {

    switch(step) {
        case 8:
            image.style.backgroundImage = "url('images/fire_background_empty.png')"; //gonna change to fire temple photo when finished
            maintext.innerHTML = "[back in the fire nation]";
            maintext.style.color = 'red';
            centerbutton.style.display = "block";
            centerright.style.display = "none";
            centerleft.style.display = "none";
            step = 19;
            break;
    }
    step++;
});