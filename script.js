let emoji_1=document.getElementById('emoji-1');
let emoji_2=document.getElementById('emoji-2');
let emoji_3=document.getElementById('emoji-3');
let p_1=document.getElementById('p-1');
let p_2=document.getElementById('p-2');
let p_3=document.getElementById('p-3');
let btn=document.getElementById('btn');
let span=document.getElementById('span');
let section=document.querySelector('section')
let Feedback = false;



emoji_1.addEventListener('click', () => {
    if (!Feedback) {
        btn.innerText = "Thanks for feedback";
        btn.style.borderStyle="none"
        span.innerText = "😒";
        emoji_2.style.visibility = "hidden";
        emoji_3.style.visibility = "hidden";
        p_2.style.visibility = "hidden";
        p_3.style.visibility = "hidden";
        section.style.backgroundColor = "red";
    } else {
        btn.innerText = "Send Feedback";
        span.innerText = "👀";
        emoji_2.style.visibility = "visible";
        emoji_3.style.visibility = "visible";
        p_2.style.visibility = "visible";
        p_3.style.visibility = "visible";
        section.style.backgroundColor = ""; 
    }

    Feedback = !Feedback;
});

emoji_2.addEventListener('click', () => {
    if (!Feedback) {
        btn.innerText = "Thanks for feedback";
        btn.style.borderStyle="none"
        span.innerText = "😐";
        emoji_1.style.visibility = "hidden";
        emoji_3.style.visibility = "hidden";
        p_1.style.visibility = "hidden";
        p_3.style.visibility = "hidden";
        section.style.backgroundColor = "blue";
    } else {
        btn.innerText = "Send Feedback";
        span.innerText = "👀";
        emoji_1.style.visibility = "visible";
        emoji_3.style.visibility = "visible";
        p_1.style.visibility = "visible";
        p_3.style.visibility = "visible";
        section.style.backgroundColor = ""; 
    }

    Feedback = !Feedback;
});

emoji_3.addEventListener('click', () => {
    if (!Feedback) {
        btn.innerText = "Thanks for feedback";
        btn.style.borderStyle="none"
        span.innerText = "😊";
        emoji_1.style.visibility = "hidden";
        emoji_2.style.visibility = "hidden";
        p_1.style.visibility = "hidden";
        p_2.style.visibility = "hidden";
        section.style.backgroundColor = "green";
    } else {
        btn.innerText = "Send Feedback";
        span.innerText = "👀";
        emoji_1.style.visibility = "visible";
        emoji_2.style.visibility = "visible";
        p_1.style.visibility = "visible";
        p_2.style.visibility = "visible";
        section.style.backgroundColor = ""; 
    }

    Feedback = !Feedback;
});