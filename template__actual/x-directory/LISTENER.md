# При навешения обработчиков, лучше навесить на общий див кнопок и сделать проверку (ес туда куда мы нажали это предок('.button') то выполняем задачу)

# Обработчик клик (минус в том что нельзя поставить несколько обработчиков на одно событие)
elem.onclick = fn;

# Обработчик клик 
elem.addEventListener("click", fn)

# Отключение обработчика клик 
elem.removeEventListener("click", fn)

# Параметры обработчика клик 
elem.removeEventListener("click", fn, {???}})

# ??? Параметры
   # Погружение (крайне редко юзается)
   "capture": false,
   # Автоматическое отключение обработчика клик при первом клике 
   "once": true,
   # Хз
   "passive": false

# При событии можно его вывести
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event);
}

# При событии можно его передать в переменную
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event.type);
}

# При событии можно получить обьект на который был клик
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event.target);
}

# При событии можно получить обьект на который был навешан обработчик
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event.currentTarget);
}

# При событии можно получить обьект на который был навешан обработчик [!!!]БЕЗ ВСПЛЫТИЯ (НО НУЖНО ДЕЛАТЬ ОСТОРОЖНО)
elem.addEventListener("click", fn)
fn(event) =>{
   console.log('test');
   event.stopPropagation()
}

# Обработчик клик на все элементы из колекции
elem.forEach(e => {
   e.addEventListener("click", fn)
})

# Координаты мыши X
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event.clientX);
}

# Координаты мыши Y
elem.addEventListener("click", fn)
fn(event) =>{
   console.log(event.clientY);
}

# Обработчик наведение 
elem.addEventListener("mouseenter", fn)

# При навешения обработчиков, лучше навесить на общий див кнопок и сделать проверку (ес туда куда мы нажали это предок('.button') то выполняем задачу)
общийДив.addEventListener("click", (event) => {
   if (event.target.closest('.button') {                                         //closest ищет ближайшего предка
      fn()
   })                                             
})

# Отменить действие браузера (переход по ссылке)
elem.addEventListener("click", (event) => {
   console.log('test');
   # отмена
   event.preventDefault()
})

# Отменить действие браузера (переход по ссылке)
elem.addEventListener("click", (event) => {
   console.log('test');
   # отмена
   return false
})

# События
## Зажата или отпущена над элементом
mousedown / mouseup
## Курсор появляется над элементом или уходит
mouseover / mouseout
## Курсор появляется над элементом или уходит (дочерние не считаются, без всплытия крч)
mouseenter / mouseleave
## Колесико мыши
wheel
## Движение и вроде Любое событие над элементом
mousemove
## Правая кнопка мыши
contextmenu
## Правая кнопка мыши
contextmenu
## Клик 
contextmenu
## Двойной клик
dbclick
## Двойной клик
dbclick

# targer = элемент на который курсор перешёл
# relatedTarger = элемент с которого курсор ушёл
# Для mouseout наоборот
elem.addEventListener("mouseover", (event) => {
   console.log(event.targer);
   console.log(event.relatedTarger);

})



# event.code выводит = KeyG
# event.key выводит = (g)
# капс и смена языка влияет на значение
# События клавиатуры
document.addEventListener("keydown", (event) => {
   console.log(`Нажата клавиша ${event.code} ${event.key}`);
})

# События клавиатуры
document.addEventListener("keyup", (event) => {
   console.log(`Отжата клавиша ${event.code} ${event.key}`);
})

# Авто-повтор
event.repeat

# Обработчик события на скролл
window.addEventListener('csroll', ()=>{
   console.log(`${scrollY}px`);
})