# ============================================== Элементы

# Точка входа в DOM всегда document
document

# Пример пути по DOM (можно заносить в переменные для удобства)
document.h1.firstElementChild

# Получение дочерних тегов (внутренности любого тега)
firstElementChild 
children
lastChild

# Получение соседних тегов (соседние теги любого тега)
previousElementSibling
nextElementSibling
nextElementSibling

# Получение родительского элемента с содержимым
parentElement

# Поиск первого элемента 
document.querySelector('')
# Поиск элементов 
document.querySelectorAll('')
## По-селектору-класса
document.querySelectorAll('.test')
## По-селектору-тега
document.querySelectorAll('h1')
## По-смешенному-тегу-и-классу
document.querySelectorAll('li.test')
## По-вложенности
document.querySelectorAll('.test>li')
## По-нескольки-классам
document.querySelectorAll('.test, .test2')
## По-вложенным-классам
document.querySelectorAll('.test .test2')
## По-id
document.querySelectorAll('#test')
## По-id (отличие: путь через document необязателен)
document.getElementByID('test')
## По-атрибуту
document.querySelectorAll('[test]')
## По-атрибуту-со-значением
document.querySelectorAll('[test="85"]')
## По-колекции (на подобии массивов)
const elem = document.querySelectorAll('li')
console.log(elem[3]);
## Ищет ближайшего предка
elem.clossest('test-top')

## По-селектору-тега (живая колекция)
document.getElementsByTagName('li')
## По-селектору-класса (живая колекция)
document.getElementsByClassName('test')
## По-селектору-имени (живая колекция)
document.getElementsByName('test')

# Проверка на наличие атрибута возращает true или false
elem.matches('[class$="test"]')

# Меняет или получает содержимое элемента
const result = elem.innerHTML 
const result = elem.innerHTML = 'Любой текст' 
const result = elem.innerHTML = 
   `<h1 class="test"> Любой текст, можно c тегами переменными и классами ${random}' </h1>` 

# Меняет или получает содержимое элемента (в отличии от innerHTML гмы получаем не только содержимое но и полностью обьект)
const result = elem.outerHTML 
const result = elem.outerHTML = 'Любой текст'
const result = elem.outerHTML = 
   `<h1 class="test"> Любой текст, можно c тегами переменными и классами ${random}' <h1/>` 

# Меняет или получает содержимое элемента
elem.textContent

# Создание элемента
document.createElement('div')

# Вставка элемента рядом
elem.after()
elem.before()

## Вставка элемента внутрь вначало или в конец
elem.prepend()
elem.append()

# Вставка текста, html элемент
elem.insertAdjacentHTML(
   '???',
   `<h1 class="test"> Любой текст, можно c тегами переменными и классами ${random}' <h1/>`
)

# ??? Параметры
## Вставить HTML перед элементом
beforebegin 
## Вставить HTML после элемента
afterend
## Вставить HTML в начало элемента
afterbegin
## Вставить HTML в конец элемента
beforeend

# Клонирует элемент 
elem.cloneNode(???)

## ??? Параметры
## Клонирует с содержимым
true

# Удаляет элемент (par не нужен)
elem.remove()

# ============================================== Классы

# Получение и изминение классов
elem.className
const result = elem.className = 'test'

# Получение и изминение классов
## Добавить
elem.classList.add('active')
## Убрать
elem.classList.remove('active')
## Если нету добавить, если есть убрать
elem.classList.toggle('active')
## Проверяет на наличие класса возвращая true или false
elem.classList.contains('active')
## Проверяет на наличие класса возвращая true или false
if(elem.classList.contains('active')) {
   console.log('У этого элемента есть класс');
}

# Получение стилей (только если есть в атрибуте style="")
elem.style.color
elem.style.marginBottom
elem.style.zIndex 

# Создание и изминение стилей (только для атрибута style="") (для сброса ставим пустую строку)
elem.style.color = 'red'
elem.style.marginBottom = '30px'
elem.style.zIndex = '10'
и т.д

# Удобное создание и изминение стилей (только для атрибута style="")
elem.style.cssText = `
   margin-bottom: 30px;
   color: red;
`

# Получение стилей напрямую из папки index.css
const = getComputedStyle(elem)

# Получение стилей псевдоэлемента напрямую из папки index.css
const = getComputedStyle(elem, "::before")

# Преобразование элемента в число
parseInt(elem.paddingLeft)

# Проверяет наличие атрибута возращая true или false
elem.hasAttribute('name')
# Получает значение атрибута
elem.getAttribute('name')
# Устанавливает значение атрибута
elem.setAttribute('name, 'value')
# Удаляет атрибут
elem.removeAttribute('name')

# Скрыть элемент
elem.hidden

# Показать тег элемента
elem.tagName

# Хз
elem.dataset