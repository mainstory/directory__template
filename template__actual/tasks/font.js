//Импорт gulp
const {src, dest} = require("gulp")

//Импорт плагинов
const notify = require("gulp-notify") 
const plumber = require("gulp-plumber")
const newer = require("gulp-newer") 
const fonter = require("gulp-fonter") 
const ttf2woff2 = require("gulp-ttf2woff2") 

//Задача
const font = function(cb){
   src("./#src/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}") //Берёт путь с файлами

   //Проверка на ошибки
   // .pipe(plumber({
   //    errorHandler: notify.onError(error => ({
   //       title: "HTML",
   //       message: error.message
   //    }))
   // }))

   // .pipe(newer("./dist/font")) //Фильтр
   // .pipe(fonter({
   //    formats: ["ttf", "woff", "eot", "svg"]
   // }))
   // .pipe(dest("./dist/font")) //Копирует и создаёт в dist 
   // .pipe(ttf2woff2())
   .pipe(dest("./dist/font")) //Копирует и создаёт в dist 

   cb()
}

//Вывод
module.exports = font;