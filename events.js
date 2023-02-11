// system-2
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// system-3
const yellowBtn = document.getElementById('makeYellow');
yellowBtn.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
// system-4
const purpleBtn = document.getElementById('makePurple');
purpleBtn.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// system-5
const makeGoldBtn = document.getElementById('makeGold');
makeGoldBtn.addEventListener('click', makeGold);
function makeGold() {
    document.body.style.backgroundColor = 'goldenrod';
}
// system-6
const makePinkBtn = document.getElementById('makePink');
makePinkBtn.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'pink';
});
// system-7
document.getElementById('makeSkyBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'skyblue';
})