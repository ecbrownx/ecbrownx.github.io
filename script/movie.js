let page = 0
const char1 = document.getElementById('death');
const char1_dialogue = document.getElementById('deathdialogue');
const char1_name = document.getElementsByClassName('charname')[0];
const char2 = document.getElementById('rob');
const char2_dialogue = document.getElementById('robdialogue');
const char2_name = document.getElementsByClassName('charname')[1];
const dialogue_boxes = document.getElementsByClassName('dialogue');
const button = document.getElementById('btntxt');
const musicloc = document.getElementById('ambience');
//char1.style.visibility= 'hidden';
//char2.style.visibility = 'hidden';


const page_number = () => {
    page++
    return page;
}

const record_Scratch = () => {
    
    setTimeout(function (){musicloc.src ='./media/SPEEDY SPIN.mp3'; musicloc.play()}, 4000)
}

const piano = () => {
    
    setTimeout(function (){musicloc.src ='./media/darkpiano_noiseplug.mp3'; musicloc.play()}, 6000)
}

const swing = () => {
    setTimeout(function (){musicloc.src ='./media/SwingTime_MusicByPedro.mp3'; musicloc.play()}, 6000)
}


const movieControl = () => {

    //char1.style.visibility= 'hidden';
    //char2.style.visibility = 'hidden';

    const deathLines = ['', "Hi, I'm Death and this is Rovoilpmalybyckanui...Rob, for short!",
    "Rob and I have a story to share, well, I have a story to share. Rob just happens to be in the Void with me because she just died and wanted to hear this story too. Don't feel bad for Rob. She died of natural causes and lived a long and fulfilling life.",
    "You're ruining my intro, Rob! The point is that you did not die of some horrific disease or in some war or something like that. You died peacefully in your sleep...and whoever is playing that swing music, knock it off! It's not right for the story!",
    "Okay, that's better!",
    "Anyway, millions of years ago, my bosses, Jenand: the goddess of light, Rejon: the goddess of life, and Trevana: the goddess of water, planned on creating a paradise on a barren rock called Nevia. However, the three sisters had a fourth younger sister that had no name...",
    "I'm getting to that part! The youngest sister was still a child and was left out of her older sister's plans, so she took the barren rock and made her own creation. She called it The Shadow. The older sisters told their father, as well as the rest of the Pantheon about what had happened.",
    "No, I'm kind of like a demigod. I don't count. It's a long story and kind of depressing. Anyway, the three older sisters complained and the youngest sister was punished for taking what wasn't hers. She begged and pleaded for mercy. But, alas,the young goddess was punished and lost her title, her power, and the Pantheon even took her name.",
    "Yes, in every patriarchy in every universe, she gets misgendered as another spit to her face. As for the older sisters, they were never able to remove The Shadow off of Nevia. Nevia had been permenantly tainted and their dreams of creating a paradise was ruined. They were only able to magically contain and conceal their sister's work. ",
    "Millions of...gah! Fast forward to just over a century ago...HAHA! Showed you, Rob...an ambitious fairy king from the Kingdom of Flinwiara ventured on a large project. The fairies used magic to dig deep into the ground. They inadvertently cracked the seal of the Goddesses.",
    "But The Shadow was too weak to break the seal completely. After millions of years of confinement, The Shadow lacked nourishment.",
    "However, a series of wars conducted by the brutal Awshein Empire broke out and The Shadow began to feed on the evil misdeeds from those wars.",
    "The evil misdeeds came with their choice of toppings.",
    "The toppings contained potassium benzoate",
    "That's bad. I knew you weren't paying attention, Rob! Now, back to the story, The Shadow gained enough strength to break the seal and began to corrupt Nevia and all living thing in it. The \"Unnamed God\" discovered this and called out to her sisters, laughing at them as her creation set off to destroy their creations.",
    "How do I know? It's going on right now! Okay, whoever is playing the dark ambient music can stop now! The story is over!",
    "Seriously, where is that music coming from? Rob, you're going to help me find out who is responsible for this music because you certainly weren't much help with the story.",
    "Credits"]

    const robLines = ['', "Hi, everyone!",
    "I don't know about the fulfilling part, but the other two are true!",
    "...",
    "Aww...I liked the other music better!",
    "How come she doesn't have a name?",
    "Are you part of the Pantheon?",
    "So that's why she's called \"The Unknown God.\"",
    "I sense a \"millions of years later\" line coming.",
    "That's bad!",
    "That's good!",
    "That's bad!",
    "That's good!",
    "...",
    "What happened next?",
    "Wait, you got me all hyped up for a story that isn't even complete?",
    "...",
    "Swing Time - Music By Pedro\nDark Ambient Piano - NoisePlug"]
    
    page_number()
    if (page == 1 ){
        char1.style.visibility= 'visible';
        char2.style.visibility = 'visible';
        char1_name.innerHTML = "Death: ";
        char2_name.innerHTML = "Rob: ";
        char1_dialogue.innerHTML = deathLines[page]
        char2_dialogue.innerHTML = robLines[page]
        button.innerHTML = "Next";
        musicloc.play();
        
    }else if (page == 3){
        record_Scratch();
        piano();
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
       
    }else if (page == 15){
        record_Scratch()
        swing()
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
       
    }else if (page == 17){
        button.innerHTML = "Fin";
        char1_name.innerHTML = "";
        char2_name.innerHTML = "";
        char1.style.visibility= 'hidden';
        char2.style.visibility = 'hidden';
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
       
    }else if (page == 18 || page == 0){
        page= 0;
        char1_name.innerHTML = "";
        char2_name.innerHTML = "";
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        button.innerHTML = "Start";
        musicloc.pause();
        musicloc.currentTime = 0;
        
    }else{
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        
    }

}


button.addEventListener('click', movieControl)