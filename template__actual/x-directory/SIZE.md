# Ширина окна браузера
window.innerWidth 

# Высота окна браузера
window.innerHeight 

# documentElemnt это <html>

# Ширина окна браузера пользователя (не считая рамки паддинги и скроллы как я понял и относительно документа (position влияет))
document.documentElemnt.clientWidth 

# Высота окна браузера пользователя (не считая рамки паддинги и скроллы как я понял и относительно документа (position влияет))
document.documentElemnt.clientHeight



# К-во проскроленных пикселей Y
window.pageYOffset

# К-во проскроленных пикселей X
window.pageXOffset

# К-во проскроленных пикселей Y (отличие что доступ не только для чтения, можно задавать изначальные значение)
elem.scrollLeft

# К-во проскроленных пикселей X (отличие что доступ не только для чтения, можно задавать изначальные значение)
elem.scrollTop

# Скроллить растояние относительно его текущего положения (x, y)
window/elem.scrollBy(0, 100)

# Скроллить по координатам [!!!]
window/elem.scrollTo({
   top: 500,
   left: 0,
   behavior: auto 
})

## ??? Параметры ([!!!Полифил])
## smooth
'smooth'
## instant
'instant'
## auto (default)
'auto'

# Скроллить к конкретному элементу
- elem.setScrollIntoView()

# Скроллить к конкретному элементу [!!!]
- elem.setScrollIntoView({
   block: 'center', //[!!!Полифил]start||center||end||nearest default: center
   inline: 'nearest', //[!!!Полифил]start||center||end||nearest default: nearest
   behavior: 'smooth', //[!!!Полифил]auto||smooth|| default: auto
})

# Общая ширина и высота элемента (считая рамки паддинги и скроллы как я понял)
elem.offsetWidth
elem.offsetHeight

# Отступ сверху или слева (считая рамки паддинги и скроллы как я понял)
elem.clientTop
elem.clientLeft

# Ширина и высота контента скролла
elem.scrollWidth
elem.scrollHeight



# Получить координаты left и top относительно окна браузера
elem.getBoundingClientRect()

# Получить координаты left и top относительно окна браузера
elem.getBoundingClientRect().top
elem.getBoundingClientRect().left 

# Что бы получить относительно документа: проскроленные пиксели + пиксели относительно браузера

# Получить обьект по координатам
document.elementFromPoint(100, 100)



