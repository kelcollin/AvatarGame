const image = document.getElementById('image');

const centerbutton = document.getElementById('button-center');
const centerright = document.getElementById('button-right');
const centerleft = document.getElementById('button-left');

const maintext = document.getElementById('text-content');
const bottontextcenter = document.getElementById('botton-text-center');
const bottontextright = document.getElementById('botton-text-right');
const bottontextleft = document.getElementById('botton-text-left');


let step = 0;
let water = false;
let air = false;
let fire = false;
let earth = false;

centerbutton.addEventListener('click', function handleClick() {
    
    switch(step) {
        case 0:
            image.style.backgroundImage = "url('images/iceberg_textbox.png')";
            bottontextcenter.innerHTML = 'Continue';
            maintext.style.display = "block";
            break;
        case 1:
            image.style.backgroundImage = "url('images/katara_water.png')";
            maintext.innerHTML = "Katara: Who are you? You just came out of that iceberg!";
            maintext.style.color = 'blue';
            break;
        case 2:
            maintext.innerHTML = "Aang: My name is Aang, I am the Avatar.";
            maintext.style.color = 'black';
            break;
        case 3:
            maintext.innerHTML = "Katara: The avatar?? He disappeared 100 years ago!";
            maintext.style.color = 'blue';
            break;
        case 4:
            maintext.innerHTML = "Aang: Wow, I had no idea I had been frozen this long!";
            maintext.style.color = 'black';
            break;
        case 5:
            maintext.innerHTML = "Katara: The Fire Nation started a war right after you disappeared. You're 112 years old?";
            maintext.style.color = 'blue';
            break;
        case 6:
            maintext.innerHTML = "Aang: I guess? I think I need to defeat the Fire Nation.";
            maintext.style.color = 'black';
            break;
        case 7:
            maintext.innerHTML = "Katara: Do you want to go to the water nation with us or back home to the air nation?";
            maintext.style.color = 'blue';
            centerbutton.style.display = "none";
            centerright.style.display = "block";
            centerleft.style.display = "block";
            break;
        case 19:
            image.style.backgroundImage = "url('images/zuko.png')";
            maintext.innerHTML = "Zuko: You summoned me father?";
            break;
        case 20:
            maintext.innerHTML = "Lord Ozai: Yes son, I've received word that the Avatar has been awoken, I need you to hunt him down and kill him.";
            if (water) {
                step = 29;
            }
            break;
        case 21:
            image.style.backgroundImage = "url('images/airtemple.png')";
            maintext.style.display = 'none';
            break;
        case 22:
            image.style.backgroundImage = "url('images/katara_air.png')";
            maintext.innerHTML = "Katara: Wow, it's the air nation! I've never been here!";
            maintext.style.display = 'block';
            maintext.style.color = 'blue';
            break;
        case 23:
            maintext.innerHTML = "Aang: It's just as beautiful as I remember.";
            maintext.style.color = 'black';
            break;
        case 24:
            maintext.innerHTML = "Katara: It doesn't look like there is anyone here, you must be the last airbender";
            maintext.style.color = 'blue';
            break;
        case 25:
            maintext.innerHTML = "Aang: I vow I will fulfill my destiny of becoming a full Avatar and return balance to the world by defeating the Fire Nation.";
            maintext.style.color = 'black';
            if (water) {
                step = 99;
            }
            break;
        case 26:
            maintext.innerHTML = "Katara: You won't be able to deafeat them like this. You need to start by mastering the other elements!";
            maintext.style.color = 'blue';
            break;
        case 27:
            maintext.innerHTML = "Aang: You're right, but I'm going to need your help";
            maintext.style.color = 'black';
            break;
        case 28:
            maintext.innerHTML = "Katara: Come back with me to the Water Nation, I can bring you to a water master where you'll be able to learn water bending";
            maintext.style.color = 'blue';
            break;
        case 29:
            image.style.backgroundImage = "url('images/zuko.png')";
            maintext.innerHTML = "Zuko: You cant run from me forever Aang, I will find you";
            maintext.style.color = 'red';
            break;
        case 30:
            image.style.backgroundImage = "url('images/katara_water.png')";
            maintext.innerHTML = "Katara: Follow me, we need to find the water bending master";
            maintext.style.color = 'blue';
            break;
        case 31:
            maintext.innerHTML = "Katara: There he is!";
            break;
        case 32:
            image.style.backgroundImage = "url('images/water_master.png')";
            maintext.innerHTML = "Water master: Hello Young ones, how can I benof servoce today?";
            break;
        case 33:
            maintext.innerHTML = "Aang: We have come because we need your help. We are here to learn water bending.";
            maintext.style.color = 'black';
            break;
        case 34:
            maintext.innerHTML = "Water master: You seem very nice but I can't just gove out the secrets to water bending to anyone.";
            maintext.style.color = 'blue';
            break;
        case 35:
            image.style.backgroundImage = "url('images/katara_water.png')";
            maintext.innerHTML = "Katara: You have to help us. He's the avatar. He needs to master all the elements to be able to defeat Lord Ozai!";
            break;
        case 36:
            image.style.backgroundImage = "url('images/water_master.png')";
            maintext.innerHTML = "Water master: That's crazy! The avatar was an airbender but lord Ozai killed them all.";
            break;
        case 37:
            maintext.innerHTML = "Aang: Let me show you";
            maintext.style.color = 'black';
            break;
        case 38:
            maintext.innerHTML = "**the air in the temple begins to howl and Aang lifts himself off the ground**";
            break;
        case 39:
            maintext.innerHTML = "Water master: I can't beleive me eyes. You must really be the avatar! I will train you but I still can't train her, our traditions don't allow women to be taught water bending.";
            maintext.style.color = 'blue';
            break;
        case 40:
            maintext.innerHTML = "Aang: That's ridiculous, I won't learn if Katara can't.";
            maintext.style.color = 'black';
            break;
        case 41:
            maintext.innerHTML = "Water master: Fine, I'll teach you both";
            maintext.style.color = 'blue';
            break;
        case 42:
            maintext.innerHTML = "**After many days of hard training**";
            maintext.style.color = 'black';
            break;
        case 43:
            maintext.innerHTML = "Water master: I believe you are both ready. Good luck on the rest of your journey.";
            maintext.style.color = 'blue';
            break;
        case 44:
            if (air) {
                image.style.backgroundImage = "url('images/katara_water.png')";
                maintext.innerHTML = "Aang: Katara, should we go to the earth nation next?";
                maintext.style.color = 'black';
                step = 99;
            } else if (water) {
                image.style.backgroundImage = "url('images/katara_water.png')";
                maintext.innerHTML = "Katara: Let's head back to your home the air nation";
                maintext.style.color = 'blue';
                step = 20;
            }
            break;


        case 100:
            maintext.innerHTML = "Katara: There is a solar eclipse where the fire nation will lose their power. Should we go there or miss this oportunity and go to the Earth kingdom to learn earth bending so that we're more prepared?";
            maintext.style.color = 'blue';
            centerbutton.style.display = "none";
            centerright.style.display = "block";
            centerleft.style.display = "block";
            bottontextright.innerHTML = "Earth Nation";
            bottontextleft.innerHTML = "Fire Nation";
            break;

        case 102:
            image.style.backgroundImage = "url('images/zuko.png')"; //zuko substitute fore Loard Ozai rn
            maintext.innerHTML = "Aang: Lord Ozai, I have come to defeat you!";
            maintext.style.color = 'black';
            break;
        case 103:
            maintext.innerHTML = "Lord Ozai: Nooo, you came when our powers are weak from the solar eclipse. I must fend you off until it ends";
            maintext.style.color = 'red';
            break;
        case 104:
            maintext.innerHTML = "**Aang and Lord Ozai start to fight**";
            maintext.style.color = 'black';
            break;
        case 105:
            maintext.innerHTML = "**Aang has the upper hand**";
            maintext.style.color = 'black';
            break;
        case 106:
            maintext.innerHTML = "**The eclipse is slowly going away**";
            maintext.style.color = 'black';
            break;
        case 107:
            maintext.innerHTML = "**Lord Ozai is satrting to regain his powers**";
            maintext.style.color = 'black';
            break;
        case 108:
            maintext.innerHTML = "**Lord Ozai blasts Aang back in a billow of flames**";
            maintext.style.color = 'black';
            break;
        case 109:
            maintext.innerHTML = "Aang: I can't win, I have to retreat! I need to go meet Katara in the earth nation.";
            maintext.style.color = 'black';
            step = 119
            break;
    

        case 120:
            image.style.backgroundImage = "url('images/katara_earth.png')";
            maintext.innerHTML = "Katara: Oh Aang! are you alright? you look hurt.";
            maintext.style.color = 'blue';
            break;
        case 121:
            maintext.innerHTML = "Aang: I tried to defeat lord Ozai but I couldn't, I wasn't strong enough.";
            maintext.style.color = 'black';
            break;
        case 122:
            maintext.innerHTML = "Katara: I shouldn't have let you go alone, we will train harder and go back stronger to defeat them!";
            maintext.style.color = 'blue';
            break;
        case 123:
            image.style.backgroundImage = "url('images/katara_earth.png')";
            maintext.innerHTML = "Aang: The earth nation is incredible! Let's find someone who can help us learn Earth bending.";
            maintext.style.color = 'black';
            break;
        case 124:
            image.style.backgroundImage = "url('images/toph_earth.png')";
            maintext.innerHTML = "Toph: Did you say you needed help learning earth bending.";
            maintext.style.color = 'green';
            break;
        case 125:
            maintext.innerHTML = "Aang: Yes, I'm the avatar, I need to learn all the elements so that I can defeat lord Ozai.";
            maintext.style.color = 'black';
            break;
        case 126:
            maintext.innerHTML = "Toph: This can't be! That's amazing. Lord Ozai's rule has been cruel, let me help you defeat him, I can teach you everything you need to know to earth bend.";
            maintext.style.color = 'green';
            break;
        case 127:
            maintext.innerHTML = "Aang: Thank you, I'm Aang by the way.";
            maintext.style.color = 'black';
            break;
        case 128:
            maintext.innerHTML = "Toph: Toph, at your service.";
            maintext.style.color = 'green';
            break;
        case 129:
            maintext.innerHTML = "**many days later**";
            maintext.style.color = 'black';
            break;
        case 130:
            maintext.innerHTML = "Toph: You're a quick learner Aang, you've mastered earth bending even better than I have.";
            maintext.style.color = 'green';
            break;
        case 131:
            maintext.innerHTML = "Aang: I feel better about defeating Ozai but I'm still worried.";
            maintext.style.color = 'black';
            break;
        case 132:
            image.style.backgroundImage = "url('images/katara_earth.png')";
            maintext.innerHTML = "Katara: We will come fight with you Aang. We can defeat him if we work together!";
            maintext.style.color = 'blue';
            break;
        case 133:
            image.style.backgroundImage = "url('images/fire_background_empty.png')";
            maintext.innerHTML = "[you get stopped on your way to lord Ozai]";
            maintext.style.color = 'red';
            break;
        case 134:
            image.style.backgroundImage = "url('images/zuko.png')";
            maintext.innerHTML = "Zuko: Aang! I'm zuko, son of lord Ozai. I've been hunting you down for my father but I'm done helping him. He has never shown me respect and I thought I could make him proud but I'm done with following in his footsetps.";
            maintext.style.color = 'red';
            break;
        case 135:
            maintext.innerHTML = "**Zuko teaches Aang fire bending**";
            maintext.style.color = 'black';
            break;
        case 136:
            maintext.innerHTML = "Zuko: You are ready, let's go defeat my father.";
            maintext.style.color = 'red';
            break;
        case 137:
            maintext.innerHTML = "Aang: Lord Ozai!";
            maintext.style.color = 'black';
            break;
        case 138:
            if (fire) {
                maintext.innerHTML = "Lord Ozai: Didn't you learn your lesson last time! You can't defeat me.";
            } else {
                maintext.innerHTML = "Lord Ozai: Aang, I've been waiting for you. You will never be able to defeat me.";
            }
            maintext.style.color = 'red';
            break;
        case 139:
            maintext.innerHTML = "Aang: Maybe not alone, but I came with friends.";
            maintext.style.color = 'black';
            break;
        case 140:
            maintext.innerHTML = "**They all statrt fighting**";
            maintext.style.color = 'black';
            break;
        case 141:
            maintext.innerHTML = "**Ozai is holding strong**";
            maintext.style.color = 'black';
            break;
        case 142:
            maintext.innerHTML = "**Aang musters all the strength he has and starts to pull Ozai's fire bending away**";
            maintext.style.color = 'black';
            break;
        case 143:
            maintext.innerHTML = "**Ozai is left powerless**";
            maintext.style.color = 'black';
            break;
        case 144:
            maintext.innerHTML = "Ozai: How... How did you take my dending away.";
            maintext.style.color = 'red';
            break;
        case 145:
            maintext.innerHTML = "Aang: You've lost Ozai. Your reign of terror has come to an end.";
            maintext.style.color = 'black';
            break;
        case 146:
            image.style.backgroundImage = "url('images/katara_fire.png')";
            maintext.innerHTML = "Katara: I knew you'd be able to do it Aang!";
            maintext.style.color = 'blue';
            break;
        case 147:
            image.style.backgroundImage = "url('images/airtemple_text.png')";
            maintext.innerHTML = "Zuko was apointed the new Fire lord, Aang went back to the air nation with Katara and together they started work to repair the nation. The world was once again at peace.";
            maintext.style.color = 'black';
            break;
        case 148:
            maintext.innerHTML = "The End.";
            centerbutton.style.display = "none";
            break;
    }
    step++;
});


centerleft.addEventListener('click', function handleClick() {

    switch(step) {
        case 8:
            air = true;
            image.style.backgroundImage = "url('images/fire_background_empty.png')"; //gonna change to fire temple photo when finished
            maintext.innerHTML = "[back in the fire nation]";
            maintext.style.color = 'red';
            centerbutton.style.display = "block";
            centerright.style.display = "none";
            centerleft.style.display = "none";
            step = 18;
            break;
        case 101:
            fire = true;
            image.style.backgroundImage = "url('images/fire_background_empty.png')"; //gonna change to fire temple photo when finished
            maintext.innerHTML = "";
            centerbutton.style.display = "block";
            centerright.style.display = "none";
            centerleft.style.display = "none";
            break;
    }
    step++;
});

centerright.addEventListener('click', function handleClick() {

    switch(step) {
        case 8:
            water = true;
            image.style.backgroundImage = "url('images/fire_background_empty.png')"; //gonna change to fire temple photo when finished
            maintext.innerHTML = "[back in the fire nation]";
            maintext.style.color = 'red';
            centerbutton.style.display = "block";
            centerright.style.display = "none";
            centerleft.style.display = "none";
            step = 18;
            break;
        case 101:
            earth = true;
            image.style.backgroundImage = "url('images/earth_temple.png')";
            maintext.innerHTML = "";
            centerbutton.style.display = "block";
            centerright.style.display = "none";
            centerleft.style.display = "none";
            step = 122;
            break;
    }

    step++;
});

