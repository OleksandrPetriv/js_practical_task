"use strict";


// // // Завдання 1:
// // // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);
// // // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// console.log(title);
// // // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector(".list");
// console.log(list);
// // // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopic = document.querySelectorAll("[data-topic]");
// console.log(dataTopic);
// // // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataTopicFirst = dataTopic[0];
// console.log(dataTopicFirst);
// // // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataTopicLast = dataTopic[dataTopic.length -1];
// console.log(dataTopicLast);
// // // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1 = document.querySelector("h1");
// const siblingh1 = h1.nextElementSibling;
// console.log(siblingh1);
// // // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3 = document.querySelectorAll("h3");
// console.log(h3);
// // // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3.forEach(element => {
//     element.classList.add("active");
// })
// // // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigation = document.querySelector("[data-topic=navigation]");
// console.log(navigation);
// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navigation.style.backgroundColor = `yellow`;
// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const navigationP = navigation.querySelector("p");
// navigationP.textContent = "Я змінив тут текст!";
// console.log(navigationP);
// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const manipulation = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.log(manipulation);
// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipulation.style.backgroundColor = `blue`;
// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completed = document.querySelector(".completed");
// console.log(completed);
// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// completed.parentElement.remove();
// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const p = document.createElement("p");
// p.textContent = `Об'єктна модель документа (Document Object Model)`;
// h1.after(p);
// h1.insertAdjacentElement("afterend", p);
// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const li = document.createElement("li");
// const h3Create = document.createElement("h3");
// h3Create.textContent = "Властивість innerHTML";
// const pCreate = document.createElement("p");
// pCreate.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// li.append(h3Create);
// li.append(pCreate);
// list.append(li);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// list.insertAdjacentHTML("beforeend",
//     `     <li>
//             <h3>Властивість innerHTML</h3>
//             <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//         </li>`
// );
// // 20 - очисти список
// // list.textContent = "";




// Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const div = document.createElement('div');
// div.classList.add("number-container");
// for (let index = 0; index < 100; index++) {
//     const number = document.createElement("div");
//     const random = randomNumber();
//     number.classList.add("number");
//     number.textContent = random;
//     div.append(number);
//     if (random % 2 === 0) {
//     number.classList.add("even");
// }
// else {
//     number.classList.add("odd");
// }
// }
// body.append(div);




// Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// const input = document.querySelector(".js-username-input");
// input.addEventListener("input", () => {
//     if (input.value.length > 6) {
//         input.classList.remove("error");
//         input.classList.add("success");
//     }
//     else {
//         input.classList.remove("success");
//         input.classList.add("error");
//     }
//     if (input.value.length === 0) {
//         userNameSpan.textContent = "Anonymous";
//     }
//     else {
//         userNameSpan.textContent = input.value;
//     }
// }
// );


// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener("focus", () => {
//     if (input.value.length === 0) {
//         input.style.outline = "3px solid red";
//     }
//     else {
//         input.style.outline = "3px solid green";
//     }
// })

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// // якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// input.addEventListener("blur", () => {
//         if (input.value.length === 0) {
//         input.style.outline = "3px solid red";
//     }
//     else {
//         input.style.outline = "3px solid lime";
//     }
// })


// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
// const formBtn = document.querySelector(".js-contact-form")
// const checkbox = document.querySelector(".js-policy-checkbox")
// const userNameSpan = document.querySelector(".js-username-output")
// formBtn.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (input.value.length > 0 && checkbox.checked === true) {
//         const userName = { userName: input.value };
//         console.log(userName)
//         input.value = "";
//         checkbox.checked = false;
//         userNameSpan.textContent = "Anonymous";
//     }
//     else {
//         alert("Введіть імя та натисніть галочку")
//     }
// })






// Завдання 4:
 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів
 
// const box = document.querySelector(".box");
// const decrease = document.querySelector(".js-decrease");
// const increase = document.querySelector(".js-increase")
// decrease.addEventListener("click", () => {
//     box.style.height = parseInt(getComputedStyle(box).height) - 20 + "px"
//     box.style.width = parseInt(getComputedStyle(box).width) - 20 + "px"
// })
// increase.addEventListener("click", () => {
//     box.style.height = parseInt(getComputedStyle(box).height) + 20 + "px"
//     box.style.width = parseInt(getComputedStyle(box).width) + 20 + "px"
// })
