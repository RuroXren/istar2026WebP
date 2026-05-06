console.log("Добро пожаловать в консоль сайта");
console.log("Распологайтесь");

function startQuiz() {
    let answer = prompt("Главный вопрос DevSecOps: Linux или Windows?");
    if(answer && answer.toLowerCase() === "linux") {
        alert("Доступ разрешен! Вы истинный джедай терминала.");
    } else {
        alert("Ответ неверный, но мы это исправим! Читайте дальше.");
    }
}