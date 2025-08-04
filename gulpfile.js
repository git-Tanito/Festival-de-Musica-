import { src, dest, watch, series } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export function js(done) {
  src("src/js/app.js").pipe(dest("build/js"));

  done();
}

export function css(done) {
  // buscar la carpeta o el archivo
  src("src/scss/app.scss", { sourcemaps: true }) // encuentra el archivo
    .pipe(sass().on("error", sass.logError)) // conpila sass a css
    .pipe(dest("build/css", { sourcemaps: "." })); // lo guarda en una carpeta
  done();
}
export function dev() {
  // que cambios va ver para guardar al final que funcion va a ejecutar
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
}

export default series(js, css, dev);
