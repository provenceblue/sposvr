const {
  src,
  dest,
  series,
  parallel,
  watch,
  lastRun
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const fileInclude = require('gulp-file-include');
const beautify = require('gulp-beautify');
const del = require('del');
const hash_src = require('gulp-hash-src');
//const ghPages = require('gulp-gh-pages');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const clean = require('gulp-clean');
const path = require('path');
const source = {
  path: 'source/__path/**/*.*',
  html: 'source/html/**/*.html',
  css: 'source/asset/scss/',
  js: 'source/asset/js/',
  img: 'source/asset/images/',
  ir: 'source/asset/ir/',
  guide: 'source/html/__guide/resources/',
  commonResource: 'source/asset/common/',
}

const dist = {
  path: 'dist/__path/',
  html: 'dist/',
  css: 'dist/asset/css/',
  js: 'dist/asset/js/',
  img: 'dist/asset/images/',
  guide: 'dist/html/__guide/resources/',
  commonResource: 'dist/asset/common/'
}


//html
const htmlTask = () => {
  return (
    src(source.html, {
      base: 'source/'
    }, {
      since: lastRun(htmlTask)
    })
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(beautify.html({
      indent_size: 4
    }))
    .pipe(dest(dist.html))
    .pipe(browserSync.reload({
      stream: true
    }))
    .on('end', () => {
      return (
        del([
          'dist/html/_include',
        ])
      );
    })
  );
};


// CSS
const cssTask = () => {
  return (
    src(source.css + '*.{scss,css}')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: "expanded", // expanded , compressed  
        indentType: "space", // space, tab
        indentWidth: 4,
        precision: 8,
        sourceComments: false // 코멘트 제거 여부 
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(dist.css))
    .pipe(browserSync.reload({
      stream: true
    }))
  );
};
// JS
const jsTask = () => {
  return (
    src(source.js + '*.js', {
      since: lastRun(jsTask)
    })
    .pipe(dest(dist.js))
    .pipe(beautify.js({
      indent_size: 4
    }))
    .pipe(browserSync.reload({
      stream: true
    }))
  );
};
//img
const imgTask = () => {
  return (
    src(source.img + '**/*.{png,gif,jpg,svg}', {
      encoding: false
    })
    .pipe(dest(dist.img))
    .pipe(browserSync.reload({
      stream: true
    }))
  );
};
//Guide 
const guideTask = () => {
  return (
    src(source.guide + '*.*')
    .pipe(dest(dist.guide))
    .pipe(browserSync.reload({
      stream: true
    }))
  );
};
//hash
const hash = () => {
  return (
    src(dist.html + '/**/*.html')
    .pipe(hash_src({
      build_dir: './dist',
      src_path: './source',
      exts: ['.js', '.css']
    }))
    .pipe(dest('./dist'))
  )
};

const cleanAllTask = () => {
  return del(['./dist']);
};
//const cleanDeploy = () => del([".publish"]);

// const gh = () => {
//   return src("./dist/**/*") // 배포할 파일 경로 (dist 폴더의 모든 파일 및 폴더)
//     .pipe(ghPages( // Github 저장소에 배포
//       // { branch: "view-pages" }     // 옵션을 설정하지 않으면 자동으로 gh-pages 브랜치를 생성하고 배포 (브랜치명 변경 시 사용)
//     ));
// }
function allChanged() {
  return src('./dist/**/*.*')
    .pipe(changed('./_original', {
      hasChanged: changed.compareContents
    }))
    .pipe(dest('./_changed'));
}

function copyToOriginal() {
  return src('./_changed/**/*.*')
    .pipe(dest('./_original'));
}

function clearChanged() {
  return src('./_changed/*', {
      read: false
    })
    .pipe(clean());
}
// Server
const server = () => {
  return (
    browserSync.init({
      port: 3400,
      server: {
        baseDir: 'dist/',
        middleware: function (req, res, next) {
            const ext = path.extname(req.url);
            if (ext === '.woff') {
                res.setHeader('Content-Type', 'font-woff');
            } else if (ext === '.woff2') {
                res.setHeader('Content-Type', 'font-woff2');
            }
            next();
        }
      }
    })
  )
};
// watch
const watchTask = () => {
  watch(source.path, pathMove);
  watch(source.commonResource, commonMove);
  watch(source.html, htmlTask);
  watch(source.guide, guideTask);
  watch(source.css, cssTask);
  watch(source.js, jsTask);
  //watch(source.img, imgMinTask);
  //watch(source.ir, cssStream);

};
const pathMove = () => {
  return (
    src(source.path, {
      encoding: false
    })
    .pipe(dest(dist.path))
    .pipe(browserSync.reload({
      stream: true
    }))
  )
}

const indexMove = () => {
  return (
    src([
      'source/*.html',
    ])
    .pipe(dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
  )
};
const commonMove = () => {
  return (
    src(
      source.commonResource + '**/*.*',
      {encoding: false}
    )
    .pipe(dest(dist.commonResource))
    .pipe(browserSync.reload({
      stream: true
    }))
  )
};
exports.clean = cleanAllTask;
// const deploy = series([gh, cleanDeploy]);
// exports.deploy = deploy;


exports.default = series(
  cleanAllTask,
  pathMove,
  indexMove,
  commonMove,
  htmlTask,
  cssTask,
  jsTask,
  imgTask,
  guideTask,
  // hash,
  parallel(server, watchTask)
);

exports.build = series(
  cleanAllTask,
  pathMove,
  indexMove,
  commonMove,
  htmlTask,
  cssTask,
  jsTask,
  imgTask,
  guideTask,
  series(
    clearChanged,
    allChanged,
    copyToOriginal,
  )
);