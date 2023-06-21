let dead = 0
let lost = 0

//Регистрируем обработчики событий для всех hole
for (let i = 1; i <= 9; i++) {
    document.getElementById(`hole${i}`).addEventListener("click", click)
}
// Отработка при клике
function click (){
    if (this.classList.contains('hole_has-mole' )) {
        dead += 1
        document.getElementById('dead').textContent = dead
    } else {
        lost += 1
        document.getElementById('lost').textContent = lost
    }
    checkGame(dead, lost)
}
// Проверка на победу/поражение
function checkGame(dead, lost) {
    if (dead === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lost === 5) {
        alert("Вы приграли!");
        location.reload();
    }
}


