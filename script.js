const form = document.querySelector(".form");
const firstName = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const tel = document.querySelector("#phone");
const checkbox = document.querySelector("#agree"); //// находим нам нужные элементы с кот будем работать

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: natalliakurbat'
            },
            body: JSON.stringify({
                "name": firstName.value,
                "secondName": secondName.value,
                "phone": tel.value,
                "email": email.value,
                "agree": checkbox.checked
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            alert(`Ваша анкета отправлена`);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            event.target.reset();
        });


    // Здесь твой код
});