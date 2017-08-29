// Importarmos la libería de gulp
// Importamos la libreria de sass
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create() // Importamos browserSync y creamos una instancia


// Definimos la tarea por defecto

gulp.task("default",function(){

    // Iniciamos el servidor de desarrollo BrowserSync

    browserSync.init({server: "src/"});

    // Observa cambios en los archivos Sass y entonces ejecuta la tarea 'saas'
gulp.watch(["src/scss/*.scss","src/scss/**/*.scss"], ["sass"]); // Los ** -> cualquier archivo scss dentro de la carpeta que contiene scss

    // Observa cambios en los archivos HTML y recarga el navegador

gulp.watch("src/*.html").on("change", browserSync.reload);
});

// Definimos la tarea Compilar saas

gulp.task("sass", function (){
    gulp.src("src/scss/style.scss") // Cargamos el archivo style.scss
    .pipe(sass().on("error", sass.logError)) // Se compila con gulp-sass
    .pipe(gulp.dest("src/css")) // Guardamos el resultado en la carpeta css
    .pipe(browserSync.stream()) // Recarga el CSS del "navegador"
     
});