//Импорт gulp
const { src, dest } = require("gulp")

const notify = require("gulp-notify")
const plumber = require("gulp-plumber")
const fileInclude = require("gulp-file-include")


//Задача
const js = function (cb) {
   src("./#src/js/index.js") //Берёт путь с файлами //?(2)

      //Проверка на ошибки
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
         }))
      }))

      .pipe(fileInclude()) //Плагином обрабатывает

      .pipe(dest("./dist/js")) //Копирует и создаёт в dist //?(3)

   src("./#src/js/cfg/**/*") //Берёт путь с файлами //?(2)
      .pipe(dest("./dist/js/cfg")) //Копирует и создаёт в dist //?(3)

   src("./#src/js/lib/**/*") //Берёт путь с файлами //?(2)
      .pipe(dest("./dist/js/lib")) //Копирует и создаёт в dist //?(3)


   cb()
}

//Вывод
module.exports = js;