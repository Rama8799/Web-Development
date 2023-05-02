const nextBtn = document.getElementById('next-joke');
const joke = document.getElementById('joke-content');

const jokes = ["What do you call an ant who fights crime? A vigilANTe!", "Why are snails slow? Because they’re carrying a house on their back.", "What’s the smartest insect? A spelling bee!", "What does a storm cloud wear under his raincoat? Thunderwear.", "What is fast, loud and crunchy? A rocket chip.", "How does the ocean say hi? It waves!"]

nextBtn.addEventListener("click", function() {
    const random = Math.floor(Math.random() * jokes.length);
    joke.innerText = jokes[random];
});


