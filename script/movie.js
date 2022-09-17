let page = 0
const char1 = document.getElementById('death');
const char1_dialogue = document.getElementById('deathdialogue');
const char2 = document.getElementById('rob');
const char2_dialogue = document.getElementById('robdialogue');
const dialogue_boxes = document.getElementsByClassName('dialogue');
const button = document.getElementById('control');
const musicloc = document.getElementById('ambience');

const page_number = () => {
    page++
    return page;
}

const record_Scratch = () => {
    
    setTimeout(function (){musicloc.src ='./media/SPEEDY SPIN.mp3'; musicloc.play()}, 5000)
}

const piano = () => {
    
    setTimeout(function (){musicloc.src ='./media/darkpiano_noiseplug.mp3'; musicloc.play()}, 7000)
}

const swing = () => {
    setTimeout(function (){musicloc.src ='./media/SwingTime_MusicByPedro.mp3'; musicloc.play()}, 7000)
}


const movieControl = () => {
    const deathLines = ['', "Death: Hi, I'm Death and this is Rovoilpmalybyckanui...Rob, for short!",
    "Death: Rob and I have a story to share, well, I have a story to share. Rob just happens to be in the Void with me because she just died and wanted to hear this story too. Don't feel bad for Rob. She died of natural causes and lived a long and fulfilling life.",
    "Death: You're ruining my intro, Rob! The point is that you did not die of some horrific disease or in some war or something like that. You died peacefully in your sleep...and whoever is playing that swing music, knock it off! It's not right for the story!",
    "Death: Okay, that's better!",
    "Death: Anyway, millions of years ago, my bosses, Jenand: the goddess of light, Rejon: the goddess of life, and Trevana: the goddess of water, planned on creating a paradise on a barren rock called Nevia. However, the three sisters had a fourth younger sister that had no name...",
    "Death: I'm getting to that part! The youngest sister was still a child and was left out of her older sister's plans, so she took the barren rock and made her own creation. She called it The Shadow. The older sisters told their father, as well as the rest of the Pantheon about what had happened.",
    "Death: No, I'm kind of like a demigod. I don't count. It's a long story and kind of depressing. Anyway, the three older sisters complained and the youngest sister was punished for taking what wasn't hers. She begged and pleaded for mercy, stating she simply found a blank canvas to paint on. But, alas, she was told she should have inquired about the canvas first. The young goddess lost her title, her power, and the Pantheon even took her name.",
    "Death: Yes, in every patriarchy in every universe, she gets misgendered as another spit to her face. As for the older sisters, they were never able to remove The Shadow off of Nevia. Nevia had been permenantly tainted and their dreams of creating a paradise was ruined. They were only able to magically contain and conceal their sister's work. ",
    "Death: Millions of...gah! Fast forward to just over a century ago...HAHA! Showed you, Rob...an ambitious fairy king from the Kingdom of Flinwiara ventured on a large project. The fairies used magic to dig deep into the ground. They inadvertently cracked the seal of the Goddesses.",
    "Death: But The Shadow was too weak to break the seal completely. After millions of years of confinement, The Shadow lacked nourishment.",
    "Death: However, a series of wars conducted by the brutal Awshein Empire broke out and The Shadow began to feed on the evil misdeeds from those wars.",
    "Death: The evil misdeeds came with their choice of toppings.",
    "Death: The toppings contained potassium benzoate",
    "Death: That's bad. I knew you weren't paying attention, Rob! Now, back to the story, The Shadow gained enough strength to break the seal and began to corrupt Nevia and all living thing in it. The \"Unnamed God\" discovered this and called out to her sisters, laughing at them as her creation set off to destroy their creations.",
    "Death: How do I know? It's going on right now! Okay, whoever is playing the dark ambient music can stop now! The story is over!",
    "Death: Seriously, where is that music coming from? Rob, you're going to help me find out who is responsible for this music because you certainly weren't much help with the story.",
    "Credits"]

    const robLines = ['', "Rob: Hi, everyone!",
    "Rob: I don't know about the fulfilling part, but the other two are true!",
    "Rob: ...",
    "Rob: Aww...I liked the other music better!",
    "Rob: How come she doesn't have a name?",
    "Rob: Are you part of the Pantheon?",
    "Rob: So that's why she's called \"The Unknown God.\"",
    "Rob: I sense a \"millions of years later\" line coming.",
    "Rob: That's bad!",
    "Rob: That's good!",
    "Rob: That's bad!",
    "Rob: That's good!",
    "Rob: ...",
    "Rob: What happened next?",
    "Rob: Wait, you got me all hyped up for a story that isn't even complete?",
    "Rob: ...",
    "Swing Time - Music By Pedro\nDark Ambient Piano - NoisePlug"]
    
    
    if (page == 1 ){
        char1.style.visibility= 'visible';
        char2.style.visibility = 'visible';
        char1_dialogue.innerHTML = deathLines[page]
        char2_dialogue.innerHTML = robLines[page]
        button.innerHTML = "Next";
        musicloc.play();
        page_number()
    }else if (page == 3){
        record_Scratch();
        piano();
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        page_number()
    }else if (page == 15){
        record_Scratch()
        swing()
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        page_number()
    }else if (page == 17){
        button.innerHTML = "Fin";
        char1.style.visibility= 'hidden';
        char2.style.visibility = 'hidden';
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        page_number()
    }else if (page == 18 || page == 0){
        page= 0;
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        button.innerHTML = "Start";
        musicloc.pause();
        musicloc.currentTime = 0;
        page_number()
    }else{
        char1_dialogue.innerHTML  = deathLines[page]
        char2_dialogue.innerHTML  = robLines[page]
        page_number()
    }

}


button.addEventListener('click', movieControl)