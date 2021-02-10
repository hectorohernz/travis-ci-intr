const {src,dest, task} = require("gulp");

function s(){
    return src('src/*.js')
    .pipe(dest('output/'));
}
exports.default = s