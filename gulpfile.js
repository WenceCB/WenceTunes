// Importarmos la libería de gulp
var gulp = require("gulp");
// Importamos la libreria de sass
var sass = require("gulp-sass");
// Importamos la libreria de notify para notficaciones
var notify = require("gulp-notify");
// Importamos browserSync y creamos una instancia
var browserSync = require("browser-sync").create(); 



// Definimos la tarea por defecto

gulp.task("default",function(){

    // Iniciamos el servidor de desarrollo BrowserSync

    browserSync.init({server: "src/"});

    // Observa cambios en los archivos Sass y entonces ejecuta la tarea 'saas'
gulp.watch(["src/scss/*.scss","src/scss/**/*.scss"], ["sass"]); // Los ** -> cualquier archivo scss dentro de la carpeta que contiene scss

    // Observa cambios en los archivos HTML y recarga el navegador

gulp.watch("src/*.html", function () {
    browserSync.reload();
    notify().write("Navegador Recargado");
    });
});

// Definimos la tarea Compilar saas

gulp.task("sass", function (){
    gulp.src("src/scss/style.scss") // Cargamos el archivo style.scss
    .pipe(sass().on("error", function(error){
        return notify().write(error); // Si ocurre un error, mostramos notificación
    })) // Se compila con gulp-sass
    .pipe(gulp.dest("src/css")) // Guardamos el resultado en la carpeta css
    .pipe(browserSync.stream()) // Recarga el CSS del "navegador"
    .pipe(notify("SASS compilado 🤘")) // Muestra notificación - control-cmnd-space - emojis
     
});