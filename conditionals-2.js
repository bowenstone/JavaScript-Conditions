console.log("Here we go again...")

let guess = prompt("Give me a number.");

if ((guess % 3 == 0) && (guess % 5 == 0)) {
    alert('chimichangas!');
} else if (guess % 3 == 0) {
    alert('chimi');
} else if (guess % 5 == 0) {
    alert(`changas`);
}
