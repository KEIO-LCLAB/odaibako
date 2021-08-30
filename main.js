function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function dice() {
    const textinput = document.getElementById("topics").value;
    const topics = textinput.split('\n');
    const index = getRandomInt(topics.length);
    document.getElementById("topic").textContent = topics[index];
}