# Как можно отключить строгий режим при сборке в webpack, если, конечно, это допустимо.  

Вебпак автоматически добавляет этот режим если используется ES6. Возможно эта статья будет полезна
https://stackoverflow.com/questions/38664229/disable-babel-strict-mode-from-webpack-config-js

# Обнаружила, что половина шрифтов у меня не подключилось
Тут вам нужно добавить лоадер который и подгрузит ваш шрифт. Вот пример конфига:

{
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `./fonts/${filename("[ext]")}`,
            },
          },
        ],
},

# не уверен что получилось минифицировать SVG файлы


# и еще..в dist появляется файл main.9dfc93c4691fda152e84.js.LICENSE.txt, что с ним делать?

Это LICENSE из библиотеки creditcard.js. Можете попробовать решение отсюда:

https://stackoverflow.com/questions/64818489/webpack-omit-creation-of-license-txt-files
