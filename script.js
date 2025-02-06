const messages = [
    "Are you sure?",
    "Really sure??",
    "Fix ho?",
    "Final fix ho...",
    "Ek choti sochi hala plich!",
    "No vanyo vane, I will be really sad...",
    "Ma lastai sad hunchu...",
    "Ma lastai lastai lastai sad hunchu...",
    "La thikcha, Ma aba sodhdaina...",
    "Just kidding, say yes please! ❤️"
];

const images =[
    "https://tenor.com/en-GB/view/shocked-surprised-gasp-what-cat-shock-gif-635629308990545194.gif",
    "https://tenor.com/en-GB/view/weird-cat-shocked-meme-look-gif-9753705227395230753.gif",
    "https://tenor.com/en-GB/view/cat-sad-gif-7277165444504831397.gif",
    "https://tenor.com/en-GB/view/cat-holding-head-cat-sad-cat-rahh-wahhhh-gif-11843610789762008433.gif",
    "https://tenor.com/en-GB/view/cat-gif-12756433236776117962.gif",
    "https://tenor.com/en-GB/view/sahnap-cat-cat-meme-eye-shy-gif-13190993575020735089.gif",
    "https://tenor.com/en-GB/view/crying-cat-banana-cat-banana-cat-crying-gif-3531088565028690803.gif",
    "https://tenor.com/en-GB/view/kot-cat-plaża-beach-woda-gif-5025613992274508130.gif",
    "https://tenor.com/en-GB/view/smhlaugh-tuesday-cat-kitty-attitude-gif-2891966158786578676.gif",
    "https://tenor.com/en-GB/view/cat-cat-meme-cat-stare-cat-shocked-stare-gif-1398922735574533156.gif"
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const img = document.querySelector('.gif_container img');
    noButton.textContent = messages[messageIndex];
    img.src = images[imageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    imageIndex = (imageIndex + 1) % images.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}