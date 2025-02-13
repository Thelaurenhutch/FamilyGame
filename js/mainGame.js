const gameData = {
    "1": {
        "text": "You and your family are enjoying some cocktails in the speakeasy. \
            What are you sipping on?",
        "image" : "smaller_images/drinks.PNG",
"choices": {
            "A whiskey drink": [2,["Lauren", "Zach", "Kevin"]],
            "A vodka drink": [2,["Faith", "Holland",]],
            "A lager drink": [2,["Logan", "Patti"]],
            "A cider drink": [2, ["Madison", "One of the Kids"]]
        }
    },
    "2": {
        "text": " Suddenly a smell permeates the air. \
            It's disgusting. Horrible. \
            How do you react?",
        "image" : "smaller_images/smell.PNG",
"choices": {
            "Scream": [3, ["Patti", "Zach", "One of the Kids"]],
            "Go investigate": [4,["Madison", "Holland", "Kevin"]],
            "Ignore it and make someone else deal with it": [5,["Lauren", "Logan", "Faith"]]
        }
    },
   "3":{
        "text": "As you scream you notice the rest of the family rush into the other room.\
                That's weird? Should you follow?",
        "image" : "smaller_images/running.PNG",
"choices" : {
            "Well, I'm not staying in the phantom smell room alone.": [6,["Lauren", "Logan", "Patti", "Zach"]],
            "Yeah, I just want to be involved.":[6, ["Madison", "One of the Kids"]],
            "Ugh, I guess if I have to":[6, ["Faith", "Holland", "Kevin"]]
        }
    },
   "4":{
        "text": "Before you get up to investigate, a loud screech comes from the adjoining room.\
                \"WHO DID THIS! EVERYONE COME LOOK!\" \
                What do you do?",
        "image" : "smaller_images/ascream.PNG",
"choices" : {
            "Run in there. I have to see.": [6,["Patti", "Kevin", "Holland", "Madison"]],
            "Yell back \"STOP YELLING!\"":[6, ["Lauren", "Logan", "Faith"]],
            "Take one last whiff in this room before you go": [6, ["Zach", "One of the Kids"]]
        }
    },
   "5":{
        "text": "While you were minding your business, a loud screech comes from the adjoining room.\
                \"WHO DID THIS! EVERYONE COME LOOK!\" \
                What do you do?",
        "image" : "smaller_images/ascream.PNG",
"choices" : {
            "Run in there. I have to see.": [6,["Patti", "Kevin", "Holland", "Madison"]],
            "Yell back \"STOP YELLING!\"":[6, ["Lauren", "Logan", "Faith"]],
            "Take one last whiff in this room before you go": [6, ["Zach", "One of the Kids"]]
        }
    },
   "6":{
        "text": "Standing in the doorway of the house there is a child.\
                Upon closer inspection it's a child that belongs, here!--Ginny? \
                The stench has grown significantly stronger... \
                In front of her, there is a ...a pile?... of what??",
        "image" : "smaller_images/ginnydoor.PNG",
"choices" : {
            "Welp, I'm out.": [7,["Faith", "Lauren", "Holland", "Logan"]],
            "I immediately assume Ginny did this":[7, ["Patti", "One of the Kids", "Madison"]],
            "A mystery is afoot and we must investigate!": [8, ["Kevin", "Zach"]]
        }
    },
   "7":{
        "text": "As you turn to walk away you slip\
                You are face to face with this mystery goop\
                What's that? You notice...",
        "image" : "smaller_images/youfell.PNG",
"choices" : {
            "These floors are filthy! They really need to sweep more": [8,["Holland", "Lauren"]],
            "There is a shiny glint in the pile, you investigate further":[8, ["Patti", "One of the Kids", "Madison"]],
            "The sheer amount of fur that appears to be leading up to the pile": [8, ["Kevin", "Zach", "Faith", "Logan"]]
        }
    },
   "8":{
        "text": "You pull out your magnifying glass that you always have on hand\
                You tell the family we must vote for a non-partisan leader to solve this mystery \
                They agree, who does the family choose?",
        "image" : "smaller_images/zoomgoop.PNG",
"choices" : {
            "Kevin- i mean he already has the costume": [9,["Holland", "Lauren"]],
            "Logan- he's the only one that can truly be non-partisan":[50, ["Patti", "One of the Kids", "Madison"]],
            "Faith- idk fuck it this might be fun": [30, ["Kevin", "Zach"]]
        }
    },
   "9":{
        "text": "Kevin immediately runs to put on his detective suit and gets into character.\
                He looks closely at the glint in the pile \"Yes, yes... a clue\"\
                He pulls out the object and shows everyone. it's a phone. and... and IT'S DEAD!",
        "image" : "smaller_images/kevinphone.PNG",
"choices" : {
            "Continue": [10,[]],
        }
    },
   "10":{
        "text": "Nobody claims the violated device.\
                Kevin looks around further. There is an animal hair trail, a dead phone, and... \
                Wait Ginny is still here. She seems traumatized. She points into the kitchen \
                \"Well, Well, Well\" Kevin continues. He looks at you for advice, \
                \"Which of these should we investigate?\"",
        "image" : "smaller_images/ginnypoint.PNG",
"choices" : {
            "The fur. Seems like the simplest, and I have a drink to finish": [11,["Patti", "Logan", "Madison", "Zach"]],
            "The phone. Clearly, someone is hiding something":[12, ["Holland", "Faith"]],
            "The pointing child is eery let's start there": [13, ["Lauren", "One of the Kids", "Kevin"]]
        }
    },
   "12":{
        "text": "Kevin asks for everyone to show their phones \
                Nobody has them on them. Everyone is a suspect. \
                The house is a mess, it will be hard to find them all \
                What should we do",
        "image" : "smaller_images/kevinphone.PNG",
"choices" : {
            "Let's just plug this one in and see what happens": [14,["Logan", "Holland", "Kevin", "Zach"]],
            "We need to delve into the chaos and all separate to find our phones":[20, ["Lauren", "Faith"]],
            "Forget it, let's just follow the fur": [11, ["Patti", "One of the Kids", "Logan"]]
        }
    },
   "14":{
        "text": "You plug in the phone. \
                it SPARKS! \
                The power goes out in the house.",
        "image" : "smaller_images/zap.PNG",
"choices" : {
            "Starting looking around for a source of light": [15,["Zach"]],
            "Cry":[16, ["Holland", "Faith"]],
            "Start Screaming-- that'll help": [17, ["Holland", "Faith"]]
        }
    },
   "15":{
        "text": "You walk around looking for a source of light\
                You know there is a flashlight in here somewhere\
                Just as you grab the light you hear a weird sound coming from outside",
        "image" : "smaller_images/darknoise.PNG",
"choices" : {
            "Go outside": [18,["Zach"]],
            "Go back to the family":[19, ["Holland", "Faith"]]
        }
    },
   "16":{
        "text": "You sit down to give up home and ask God to end it all when you \
                feel someone snatch the phone from your hand \
                You still can't see. What do you do?",
        "image" : "smaller_images/black.PNG",
"choices" : {
            "Go outside": [18,["Zach"]],
            "Go back to the family":[19, ["Holland", "Faith"]]
        }
    },
   "17":{
        "text": "You start to scream when you feel \
                someone snatch the phone from your hand \
                You still can't see. What do you do?",
        "image" : "smaller_images/black.PNG",
"choices" : {
            "Go outside to get some air": [18,["Zach"]],
            "Scream louder": [20, ["Faith"]],
            "Go back to the family":[19, ["Holland"]]
        }
    },
   "18":{
        "text": "A small amount of light peeks into the bush where the weird noise is coming from \
                it's Zach! What's he doing?", 
        "image" : "smaller_images/zachbush.PNG",
"choices" : {
            "He's throwing up in the bush again- it was him!": [69420,["Zach"]],
            "I'm gonna mind my business and go back inside":[19, ["Holland", "Faith"]]
        }
    },
    "20":{
        "text": "You start screaming louder \
        Suddenly in your ear you hear Faith. \
        \"Goddamn WHY\" ",
        "image" :"smaller_images/drinks.PNG",
"choices" : {
            "Why is she so close to me?--ITS HER PHONE!": [21, [Faith]],
            "For dramatic effect." :[19, [Faith], [Holland]],
            "Oh sorry, let's go find the family" : [19, [Faith], [Holland]]
}
    },
    "21":{
        "text": "You start to swat around at Faith \
        You hear the unquestionable sound of a phone hitting the floor ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "start feeling around on the ground to get it back": [22,["Faith"]],
            "tackle faith!!!!": [22,["Faith"]]
        }
    },
    "22":{
        "text": "You hit the ground and immediatley notice a different smell \
        Tequila. It's kind of... familiar... more than just a bad friday night. ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "Hold Faith down and smell her": [23,["Faith"]],
            "Go find your way back into the room with the goop": [24,["Faith"]]
        }
    }, 
    "23":{
        "text": "Faith does not consent to this. \
        But you got a good whiff. It's like the goop! ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "I don't know exactly but faith might have something to do with the goop. I'll just accuse her!": [25,["Faith"]],
            "NOW Go find your way back into the room with the goop": [24,["Faith"]]
        }
    }, 
    "25":{
        "text": "Do you want to figure out why?\
        Or just accuse her and be done with it? ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "Ill investigate. Go back to the goop!": [24,["Faith"]],
            "IT'S ALWAYS FAITH": [69420,["Faith"]]
        }
    }, 
    "24":{
        "text": "You get back to the goop, just as Kevin turns the lights back on.\
        What do you want to do? ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "Look inside the goop to see any more clues": [25,["Faith"]],
            "START TEARING THINGS APART!!!": [26,["Faith"]]
        }
    }, 
    "25":{
        "text": "You look closely into the goop you start to notice.. is that a lime peel?\
        ... and ice? Was this a *gasp* margarita? ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "FAITH DROPPED HER MARGARITA! IT WAS HER!": [69420,["Faith"]],
            "okay it might be a marg but like wtf is the fur": [11,["Faith"]]
        }
    }, 
    "26":{
        "text": "You knock over a drink and a goop like substance pours on the floor\
        you compare it to the goop.. is that a lime peel?\
        ... and ice? Was this a *gasp* margarita? ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "FAITH DROPPED HER MARGARITA! IT WAS HER!": [69420,["Faith"]],
            "okay it might be a marg but like wtf is the fur": [11,["Faith"]]
        }
    }, 
   "19":{
        "text": "You go back to the family. ", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "ahhhhh": [69420,["Zach"]]
        }
    },
   "11":{
        "text": "test test test test", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "ahhhhh": [69420,["Zach"]]
        }
    },
   "50":{
        "text": "test test test test", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "ahhhhh": [69420,["Zach"]]
        }
    },
   "30":{
        "text": "test test test test", 
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "ahhhhh": [69420,["Zach"]]
        }
    },

    






    
    "69420": {
        "text": "You yell out to the family you have solved the mystery. \
                But based on the choices you made did you do enough? \
                Are you absolutely sure?",
        "image" : "smaller_images/drinks.PNG",
"choices" : {
            "Yes, I know who did it": [0,[]],
            "No but im over this": [0,[]],
            "No. Oh God, What have I done?": [0, []]
        } 
    },
};
const personalities = { 
    "Kevin": 0,
    "Patti": 0,
    "Lauren": 0, // The Leader
    "Logan": 0, // The Adventurer
    "Holland": 0, // The Analyst
    "Faith": 0, // The Connector
    "Zach": 0, // The Caregiver
    "Madison": 0, // The Visionary
    "One of the Kids": 0, // The Harmonizer
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
