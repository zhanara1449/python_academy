// Проверка обновления сайта
const COURSE_DATA = [
  {
    "grade": 6,
    "subtitle": "Первые шаги",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Первая программа",
        "theory": "print() выводит информацию на экран.",
        "code": "print('Привет, Python!')",
        "explain": "Вывод: Привет, Python!",
        "tasks": [
          {
            "type": "text",
            "question": "Выведи слово Мир",
            "q": {
              "ru": "Выведи слово Мир",
              "kk": "Мир сөзін экранға шығар",
              "en": "Print the word Мир"
            },
            "answer": "print('Мир')"
          },
          {
            "type": "text",
            "question": "Выведи число 7",
            "q": {
              "ru": "Выведи число 7",
              "kk": "7 санын экранға шығар",
              "en": "Print the number 7"
            },
            "answer": "print(7)"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Первая программа",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "First program",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Алғашқы бағдарлама",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Первая программа» при создании учебного приложения.",
              "en": "For example, use first program in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Алғашқы бағдарлама» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Первая программа"
          },
          "en": {
            "title": "First program"
          },
          "kk": {
            "title": "Алғашқы бағдарлама"
          }
        }
      },
      {
        "title": "Переменные",
        "theory": "Переменные хранят данные. Для присваивания используется знак =.",
        "code": "name = 'Алия'\nprint(name)",
        "explain": "Вывод: Алия",
        "tasks": [
          {
            "type": "text",
            "question": "Создай переменную x со значением 10",
            "answer": "x = 10",
            "q": {
              "ru": "Создай переменную x со значением 10",
              "kk": "x айнымалысына 10 мәнін меншікте",
              "en": "Assign the value 10 to variable x"
            }
          },
          {
            "type": "text",
            "question": "Выведи значение x",
            "answer": "print(x)",
            "q": {
              "ru": "Выведи значение x",
              "kk": "x мәнін экранға шығар",
              "en": "Print the value of x"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Переменные",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Variables",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Айнымалылар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Переменные» при создании учебного приложения.",
              "en": "For example, use variables in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Айнымалылар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Переменные"
          },
          "en": {
            "title": "Variables"
          },
          "kk": {
            "title": "Айнымалылар"
          }
        }
      },
      {
        "title": "Числа",
        "theory": "Числа можно складывать, вычитать, умножать и делить.",
        "code": "print(8 + 4)\nprint(3 * 5)",
        "explain": "Вывод: 12 и 15.",
        "tasks": [
          {
            "type": "text",
            "question": "Сколько будет 9 + 6?",
            "answer": "15",
            "q": {
              "ru": "Сколько будет 9 + 6?",
              "kk": "9 + 6 нешеге тең?",
              "en": "What is 9 + 6?"
            }
          },
          {
            "type": "text",
            "question": "Сколько будет 7 * 8?",
            "answer": "56",
            "q": {
              "ru": "Сколько будет 7 * 8?",
              "kk": "7 * 8 нешеге тең?",
              "en": "What is 7 * 8?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Числа",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Numbers",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Сандар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Числа» при создании учебного приложения.",
              "en": "For example, use numbers in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Сандар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Числа"
          },
          "en": {
            "title": "Numbers"
          },
          "kk": {
            "title": "Сандар"
          }
        }
      },
      {
        "title": "Строки",
        "theory": "Строка — текст в кавычках. Строки можно соединять знаком +.",
        "code": "print('Py' + 'thon')",
        "explain": "Вывод: Python.",
        "tasks": [
          {
            "type": "text",
            "question": "Что получится из \"a\" + \"b\"?",
            "answer": "ab",
            "q": {
              "ru": "Что получится из \"a\" + \"b\"?",
              "kk": "\"a\" + \"b\" нәтижесі қандай?",
              "en": "What is the result of \"a\" + \"b\"?"
            }
          },
          {
            "type": "text",
            "question": "Сколько символов в слове кот?",
            "answer": "3",
            "q": {
              "ru": "Сколько символов в слове кот?",
              "kk": "«кот» сөзінде неше таңба бар?",
              "en": "How many characters are in «кот»?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Строки",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Strings",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Жолдар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Строки» при создании учебного приложения.",
              "en": "For example, use strings in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Жолдар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Строки"
          },
          "en": {
            "title": "Strings"
          },
          "kk": {
            "title": "Жолдар"
          }
        }
      },
      {
        "title": "Типы данных",
        "theory": "int — целое число, float — дробное, str — текст, bool — логическое значение.",
        "code": "x = 5\nprint(type(x))",
        "explain": "Вывод: <class 'int'>.",
        "tasks": [
          {
            "type": "text",
            "question": "Тип числа 3.5",
            "answer": "float",
            "q": {
              "ru": "Тип числа 3.5",
              "kk": "3.5 санының типі",
              "en": "Type of the number 3.5"
            }
          },
          {
            "type": "text",
            "question": "Тип значения True",
            "answer": "bool",
            "q": {
              "ru": "Тип значения True",
              "kk": "True мәнінің типі",
              "en": "Type of the value True"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Типы данных",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Data types",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Деректер типтері",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Типы данных» при создании учебного приложения.",
              "en": "For example, use data types in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Деректер типтері» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Типы данных"
          },
          "en": {
            "title": "Data types"
          },
          "kk": {
            "title": "Деректер типтері"
          }
        }
      },
      {
        "title": "Ввод с клавиатуры",
        "theory": "input() считывает строку. int() преобразует её в число.",
        "code": "name = input('Имя: ')\nprint('Привет, ' + name)",
        "explain": "Программа приветствует введённое имя.",
        "tasks": [
          {
            "type": "text",
            "question": "Функция ввода",
            "answer": "input()",
            "q": {
              "ru": "Функция ввода",
              "kk": "Енгізу функциясы",
              "en": "Input function"
            }
          },
          {
            "type": "text",
            "question": "Преобразуй \"12\" в целое число",
            "answer": "int('12')",
            "q": {
              "ru": "Преобразуй \"12\" в целое число",
              "kk": "\"12\" жолын бүтін санға айналдыр",
              "en": "Convert \"12\" to an integer"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Ввод с клавиатуры",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Keyboard input",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Пернетақтадан енгізу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Ввод с клавиатуры» при создании учебного приложения.",
              "en": "For example, use keyboard input in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Пернетақтадан енгізу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Ввод с клавиатуры"
          },
          "en": {
            "title": "Keyboard input"
          },
          "kk": {
            "title": "Пернетақтадан енгізу"
          }
        }
      },
      {
        "title": "Сравнение",
        "theory": "Операторы ==, !=, >, < сравнивают значения и возвращают True или False.",
        "code": "print(5 > 3)",
        "explain": "Вывод: True.",
        "tasks": [
          {
            "type": "text",
            "question": "5 == 5 — True или False?",
            "answer": "True",
            "q": {
              "ru": "5 == 5 — True или False?",
              "kk": "5 == 5 нәтижесі True ме, False па?",
              "en": "Is 5 == 5 True or False?"
            }
          },
          {
            "type": "text",
            "question": "4 > 9 — True или False?",
            "answer": "False",
            "q": {
              "ru": "4 > 9 — True или False?",
              "kk": "4 > 9 нәтижесі True ме, False па?",
              "en": "Is 4 > 9 True or False?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Сравнение",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Comparisons",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Салыстыру",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Сравнение» при создании учебного приложения.",
              "en": "For example, use comparisons in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Салыстыру» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Сравнение"
          },
          "en": {
            "title": "Comparisons"
          },
          "kk": {
            "title": "Салыстыру"
          }
        }
      },
      {
        "title": "Простое условие",
        "theory": "if выполняет блок, когда условие истинно. Отступы важны.",
        "code": "age = 12\nif age >= 10:\n    print('Можно')",
        "explain": "Вывод: Можно.",
        "tasks": [
          {
            "type": "text",
            "question": "Ключевое слово условия",
            "answer": "if",
            "q": {
              "ru": "Ключевое слово условия",
              "kk": "Шарттың кілт сөзі",
              "en": "Conditional keyword"
            }
          },
          {
            "type": "text",
            "question": "Что выведет пример?",
            "answer": "Можно",
            "q": {
              "ru": "Что выведет пример?",
              "kk": "Мысал не шығарады?",
              "en": "What does the example print?"
            },
            "acceptedAnswers": [
              "Можно",
              "Болады",
              "Allowed"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Простое условие",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Simple conditions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Қарапайым шарт",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Простое условие» при создании учебного приложения.",
              "en": "For example, use simple conditions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Қарапайым шарт» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Простое условие"
          },
          "en": {
            "title": "Simple conditions"
          },
          "kk": {
            "title": "Қарапайым шарт"
          }
        }
      },
      {
        "title": "Комментарии",
        "theory": "Символ # начинает комментарий: Python игнорирует текст после него.",
        "code": "# Это комментарий\nprint(2)",
        "explain": "Вывод: 2.",
        "tasks": [
          {
            "type": "text",
            "question": "Как начинается комментарий?",
            "answer": "#",
            "q": {
              "ru": "Как начинается комментарий?",
              "kk": "Түсініктеме қандай таңбадан басталады?",
              "en": "What character starts a comment?"
            }
          },
          {
            "type": "text",
            "question": "Что выведет пример?",
            "answer": "2",
            "q": {
              "ru": "Что выведет пример?",
              "kk": "Мысал не шығарады?",
              "en": "What does the example print?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Комментарии",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Comments",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Түсініктемелер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Комментарии» при создании учебного приложения.",
              "en": "For example, use comments in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Түсініктемелер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Комментарии"
          },
          "en": {
            "title": "Comments"
          },
          "kk": {
            "title": "Түсініктемелер"
          }
        }
      },
      {
        "title": "Мини-проект: калькулятор",
        "theory": "Создай простые вычисления из двух чисел. Переменные помогают сохранить промежуточные значения.",
        "code": "a = 6\nb = 3\nprint(a + b)\nprint(a - b)",
        "explain": "Вывод: 9 и 3.",
        "tasks": [
          {
            "type": "text",
            "question": "Сумма 20 и 5",
            "answer": "25",
            "q": {
              "ru": "Сумма 20 и 5",
              "kk": "20 және 5 қосындысы",
              "en": "Sum of 20 and 5"
            }
          },
          {
            "type": "text",
            "question": "Разность 20 и 5",
            "answer": "15",
            "q": {
              "ru": "Разность 20 и 5",
              "kk": "20 және 5 айырмасы",
              "en": "Difference between 20 and 5"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: калькулятор",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: calculator",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: калькулятор",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: калькулятор» при создании учебного приложения.",
              "en": "For example, use mini project: calculator in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: калькулятор» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: калькулятор"
          },
          "en": {
            "title": "Mini project: calculator"
          },
          "kk": {
            "title": "Шағын жоба: калькулятор"
          }
        }
      }
    ]
  },
  {
    "grade": 7,
    "subtitle": "Логика и циклы",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Условия if/else",
        "theory": "else выполняется, если условие if ложно.",
        "code": "x = 4\nif x > 5:\n    print('Да')\nelse:\n    print('Нет')",
        "explain": "Вывод: Нет.",
        "tasks": [
          {
            "type": "text",
            "question": "Что выведет код?",
            "answer": "Нет",
            "q": {
              "ru": "Что выведет код?",
              "kk": "Код не шығарады?",
              "en": "What does the code print?"
            },
            "acceptedAnswers": [
              "Нет",
              "No",
              "Жоқ"
            ]
          },
          {
            "type": "text",
            "question": "Ключевое слово альтернативы",
            "answer": "else",
            "q": {
              "ru": "Ключевое слово альтернативы",
              "kk": "Балама тармақтың кілт сөзі",
              "en": "Alternative branch keyword"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Условия if/else",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "If/else conditions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "if/else шарттары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Условия if/else» при создании учебного приложения.",
              "en": "For example, use if/else conditions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «if/else шарттары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Условия if/else"
          },
          "en": {
            "title": "If/else conditions"
          },
          "kk": {
            "title": "if/else шарттары"
          }
        }
      },
      {
        "title": "elif",
        "theory": "elif проверяет дополнительное условие.",
        "code": "n = 0\nif n > 0:\n    print('Плюс')\nelif n == 0:\n    print('Ноль')\nelse:\n    print('Минус')",
        "explain": "Вывод: Ноль.",
        "tasks": [
          {
            "type": "text",
            "question": "Что выведет пример?",
            "answer": "Ноль",
            "q": {
              "ru": "Что выведет пример?",
              "kk": "Мысал не шығарады?",
              "en": "What does the example print?"
            },
            "acceptedAnswers": [
              "Ноль",
              "Zero",
              "Нөл"
            ]
          },
          {
            "type": "text",
            "question": "Ключевое слово дополнительного условия",
            "answer": "elif",
            "q": {
              "ru": "Ключевое слово дополнительного условия",
              "kk": "Қосымша шарттың кілт сөзі",
              "en": "Additional condition keyword"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "elif",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Elif branches",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "elif тармақтары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «elif» при создании учебного приложения.",
              "en": "For example, use elif branches in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «elif тармақтары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "elif"
          },
          "en": {
            "title": "Elif branches"
          },
          "kk": {
            "title": "elif тармақтары"
          }
        }
      },
      {
        "title": "Логика and/or",
        "theory": "and требует истинности обоих условий, or — хотя бы одного.",
        "code": "print(True and False)\nprint(True or False)",
        "explain": "Вывод: False и True.",
        "tasks": [
          {
            "type": "text",
            "question": "True and True",
            "answer": "True",
            "q": {
              "ru": "True and True",
              "kk": "True and True",
              "en": "True and True"
            }
          },
          {
            "type": "text",
            "question": "False or True",
            "answer": "True",
            "q": {
              "ru": "False or True",
              "kk": "False or True",
              "en": "False or True"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Логика and/or",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Logical and/or",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "and/or логикасы",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Логика and/or» при создании учебного приложения.",
              "en": "For example, use logical and/or in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «and/or логикасы» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Логика and/or"
          },
          "en": {
            "title": "Logical and/or"
          },
          "kk": {
            "title": "and/or логикасы"
          }
        }
      },
      {
        "title": "Остаток от деления",
        "theory": "Оператор % возвращает остаток, // — целую часть деления.",
        "code": "print(10 % 3)\nprint(10 // 3)",
        "explain": "Вывод: 1 и 3.",
        "tasks": [
          {
            "type": "text",
            "question": "17 % 5",
            "answer": "2",
            "q": {
              "ru": "17 % 5",
              "kk": "17 % 5",
              "en": "17 % 5"
            }
          },
          {
            "type": "text",
            "question": "17 // 5",
            "answer": "3",
            "q": {
              "ru": "17 // 5",
              "kk": "17 // 5",
              "en": "17 // 5"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Остаток от деления",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Remainder operator",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Бөлуден қалған қалдық",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Остаток от деления» при создании учебного приложения.",
              "en": "For example, use remainder operator in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Бөлуден қалған қалдық» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Остаток от деления"
          },
          "en": {
            "title": "Remainder operator"
          },
          "kk": {
            "title": "Бөлуден қалған қалдық"
          }
        }
      },
      {
        "title": "Цикл for",
        "theory": "for перебирает элементы последовательности. range(3) даёт 0,1,2.",
        "code": "for i in range(3):\n    print(i)",
        "explain": "Вывод: 0, 1, 2.",
        "tasks": [
          {
            "type": "text",
            "question": "Число повторений range(5)",
            "answer": "5",
            "q": {
              "ru": "Число повторений range(5)",
              "kk": "range(5) неше рет қайталанады?",
              "en": "How many iterations in range(5)?"
            }
          },
          {
            "type": "text",
            "question": "Первое значение range(5)",
            "answer": "0",
            "q": {
              "ru": "Первое значение range(5)",
              "kk": "range(5) бірінші мәні",
              "en": "First value of range(5)"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Цикл for",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "For loops",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "for циклі",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Цикл for» при создании учебного приложения.",
              "en": "For example, use for loops in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «for циклі» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Цикл for"
          },
          "en": {
            "title": "For loops"
          },
          "kk": {
            "title": "for циклі"
          }
        }
      },
      {
        "title": "Цикл while",
        "theory": "while повторяет код, пока условие истинно.",
        "code": "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1",
        "explain": "Вывод: 1, 2, 3.",
        "tasks": [
          {
            "type": "text",
            "question": "Сколько повторений?",
            "answer": "3",
            "q": {
              "ru": "Сколько повторений?",
              "kk": "Неше қайталау бар?",
              "en": "How many iterations?"
            }
          },
          {
            "type": "text",
            "question": "Значение n после цикла",
            "answer": "4",
            "q": {
              "ru": "Значение n после цикла",
              "kk": "Циклден кейінгі n мәні",
              "en": "Value of n after the loop"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Цикл while",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "While loops",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "while циклі",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Цикл while» при создании учебного приложения.",
              "en": "For example, use while loops in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «while циклі» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Цикл while"
          },
          "en": {
            "title": "While loops"
          },
          "kk": {
            "title": "while циклі"
          }
        }
      },
      {
        "title": "break и continue",
        "theory": "break останавливает цикл, continue пропускает текущую итерацию.",
        "code": "for i in range(5):\n    if i == 2:\n        break\n    print(i)",
        "explain": "Вывод: 0, 1.",
        "tasks": [
          {
            "type": "text",
            "question": "Команда остановки цикла",
            "answer": "break",
            "q": {
              "ru": "Команда остановки цикла",
              "kk": "Циклді тоқтату командасы",
              "en": "Loop termination statement"
            }
          },
          {
            "type": "text",
            "question": "Команда пропуска итерации",
            "answer": "continue",
            "q": {
              "ru": "Команда пропуска итерации",
              "kk": "Итерацияны өткізіп жіберу командасы",
              "en": "Skip iteration statement"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "break и continue",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Break and continue",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "break және continue",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «break и continue» при создании учебного приложения.",
              "en": "For example, use break and continue in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «break және continue» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "break и continue"
          },
          "en": {
            "title": "Break and continue"
          },
          "kk": {
            "title": "break және continue"
          }
        }
      },
      {
        "title": "Вложенные условия",
        "theory": "Условие можно поместить внутрь другого условия.",
        "code": "x = 8\nif x > 0:\n    if x % 2 == 0:\n        print(\"Чётное\")",
        "explain": "Вывод: Чётное.",
        "tasks": [
          {
            "type": "text",
            "question": "8 — чётное или нечётное?",
            "answer": "чётное",
            "q": {
              "ru": "8 — чётное или нечётное?",
              "kk": "8 жұп па, тақ па?",
              "en": "Is 8 even or odd?"
            },
            "acceptedAnswers": [
              "жұп",
              "чётное",
              "even"
            ]
          },
          {
            "type": "text",
            "question": "9 % 2",
            "answer": "1",
            "q": {
              "ru": "9 % 2",
              "kk": "9 % 2",
              "en": "9 % 2"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Вложенные условия",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Nested conditions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Кірістірілген шарттар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Вложенные условия» при создании учебного приложения.",
              "en": "For example, use nested conditions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Кірістірілген шарттар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Вложенные условия"
          },
          "en": {
            "title": "Nested conditions"
          },
          "kk": {
            "title": "Кірістірілген шарттар"
          }
        }
      },
      {
        "title": "Счётчик",
        "theory": "Счётчик накапливает число повторений или сумму.",
        "code": "total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)",
        "explain": "Вывод: 6.",
        "tasks": [
          {
            "type": "text",
            "question": "Сумма 1+2+3+4",
            "answer": "10",
            "q": {
              "ru": "Сумма 1+2+3+4",
              "kk": "1+2+3+4 қосындысы",
              "en": "Sum of 1+2+3+4"
            }
          },
          {
            "type": "text",
            "question": "Сколько чисел в range(1,4)?",
            "answer": "3",
            "q": {
              "ru": "Сколько чисел в range(1,4)?",
              "kk": "range(1,4) ішінде неше сан бар?",
              "en": "How many numbers are in range(1,4)?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Счётчик",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Counters",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Санауыштар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Счётчик» при создании учебного приложения.",
              "en": "For example, use counters in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Санауыштар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Счётчик"
          },
          "en": {
            "title": "Counters"
          },
          "kk": {
            "title": "Санауыштар"
          }
        }
      },
      {
        "title": "Мини-проект: угадай число",
        "theory": "Используй сравнения и ввод, чтобы проверить догадку пользователя.",
        "code": "secret = 7\nguess = 7\nprint(guess == secret)",
        "explain": "Вывод: True.",
        "tasks": [
          {
            "type": "text",
            "question": "Секрет 7, догадка 7",
            "answer": "True",
            "q": {
              "ru": "Секрет 7, догадка 7",
              "kk": "Құпия сан 7, болжам 7",
              "en": "Secret 7, guess 7"
            }
          },
          {
            "type": "text",
            "question": "Секрет 7, догадка 4",
            "answer": "False",
            "q": {
              "ru": "Секрет 7, догадка 4",
              "kk": "Құпия сан 7, болжам 4",
              "en": "Secret 7, guess 4"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: угадай число",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: guess the number",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: санды тап",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: угадай число» при создании учебного приложения.",
              "en": "For example, use mini project: guess the number in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: санды тап» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: угадай число"
          },
          "en": {
            "title": "Mini project: guess the number"
          },
          "kk": {
            "title": "Шағын жоба: санды тап"
          }
        }
      }
    ]
  },
  {
    "grade": 8,
    "subtitle": "Коллекции",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Списки",
        "theory": "Список — упорядоченная изменяемая коллекция.",
        "code": "a = [10, 20, 30]\nprint(a[0])",
        "explain": "Вывод: 10.",
        "tasks": [
          {
            "type": "text",
            "question": "Первый индекс списка",
            "answer": "0",
            "q": {
              "ru": "Первый индекс списка",
              "kk": "Тізімнің бірінші индексі",
              "en": "First index of a list"
            }
          },
          {
            "type": "text",
            "question": "a=[3,4,5]; a[1]",
            "answer": "4",
            "q": {
              "ru": "a=[3,4,5]; a[1]",
              "kk": "a=[3,4,5]; a[1]",
              "en": "a=[3,4,5]; a[1]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Списки",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Lists",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Тізімдер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Списки» при создании учебного приложения.",
              "en": "For example, use lists in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Тізімдер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Списки"
          },
          "en": {
            "title": "Lists"
          },
          "kk": {
            "title": "Тізімдер"
          }
        }
      },
      {
        "title": "Методы списков",
        "theory": "append добавляет элемент, pop удаляет и возвращает элемент.",
        "code": "a = [1,2]\na.append(3)\nprint(a)",
        "explain": "Вывод: [1, 2, 3].",
        "tasks": [
          {
            "type": "text",
            "question": "Метод добавления элемента",
            "answer": "append",
            "q": {
              "ru": "Метод добавления элемента",
              "kk": "Элемент қосу әдісі",
              "en": "Method to add an element"
            }
          },
          {
            "type": "text",
            "question": "Длина [1,2,3]",
            "answer": "3",
            "q": {
              "ru": "Длина [1,2,3]",
              "kk": "[1,2,3] ұзындығы",
              "en": "Length of [1,2,3]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Методы списков",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "List methods",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Тізім әдістері",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Методы списков» при создании учебного приложения.",
              "en": "For example, use list methods in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Тізім әдістері» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Методы списков"
          },
          "en": {
            "title": "List methods"
          },
          "kk": {
            "title": "Тізім әдістері"
          }
        }
      },
      {
        "title": "Срезы",
        "theory": "Срез a[start:stop] берёт элементы до stop, не включая его.",
        "code": "a = [1,2,3,4]\nprint(a[1:3])",
        "explain": "Вывод: [2, 3].",
        "tasks": [
          {
            "type": "text",
            "question": "a=[1,2,3]; a[0:2]",
            "answer": "[1,2]",
            "q": {
              "ru": "a=[1,2,3]; a[0:2]",
              "kk": "a=[1,2,3]; a[0:2]",
              "en": "a=[1,2,3]; a[0:2]"
            }
          },
          {
            "type": "text",
            "question": "a=[1,2,3]; a[-1]",
            "answer": "3",
            "q": {
              "ru": "a=[1,2,3]; a[-1]",
              "kk": "a=[1,2,3]; a[-1]",
              "en": "a=[1,2,3]; a[-1]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Срезы",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Slices",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Тілімдер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Срезы» при создании учебного приложения.",
              "en": "For example, use slices in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Тілімдер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Срезы"
          },
          "en": {
            "title": "Slices"
          },
          "kk": {
            "title": "Тілімдер"
          }
        }
      },
      {
        "title": "Кортежи",
        "theory": "Кортеж похож на список, но его элементы нельзя менять.",
        "code": "point = (3, 4)\nprint(point[0])",
        "explain": "Вывод: 3.",
        "tasks": [
          {
            "type": "text",
            "question": "Можно ли изменять кортеж?",
            "answer": "нет",
            "q": {
              "ru": "Можно ли изменять кортеж?",
              "kk": "Кортежді өзгертуге бола ма?",
              "en": "Can a tuple be modified?"
            }
          },
          {
            "type": "text",
            "question": "point=(3,4); point[1]",
            "answer": "4",
            "q": {
              "ru": "point=(3,4); point[1]",
              "kk": "point=(3,4); point[1]",
              "en": "point=(3,4); point[1]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Кортежи",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Tuples",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Кортеждер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Кортежи» при создании учебного приложения.",
              "en": "For example, use tuples in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Кортеждер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Кортежи"
          },
          "en": {
            "title": "Tuples"
          },
          "kk": {
            "title": "Кортеждер"
          }
        }
      },
      {
        "title": "Множества",
        "theory": "set хранит уникальные элементы без гарантии порядка.",
        "code": "s = set([1,1,2])\nprint(len(s))",
        "explain": "Вывод: 2.",
        "tasks": [
          {
            "type": "text",
            "question": "Сколько элементов в set([2,2,3])?",
            "answer": "2",
            "q": {
              "ru": "Сколько элементов в set([2,2,3])?",
              "kk": "set([2,2,3]) ішінде неше элемент бар?",
              "en": "How many elements in set([2,2,3])?"
            }
          },
          {
            "type": "text",
            "question": "Название типа множества",
            "answer": "set",
            "q": {
              "ru": "Название типа множества",
              "kk": "Жиын типінің атауы",
              "en": "Name of the set type"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Множества",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Sets",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Жиындар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Множества» при создании учебного приложения.",
              "en": "For example, use sets in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Жиындар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Множества"
          },
          "en": {
            "title": "Sets"
          },
          "kk": {
            "title": "Жиындар"
          }
        }
      },
      {
        "title": "Строковые методы",
        "theory": "lower(), upper(), strip() помогают обрабатывать текст.",
        "code": "s = '  Python  '\nprint(s.strip().lower())",
        "explain": "Вывод: python.",
        "tasks": [
          {
            "type": "text",
            "question": "Результат \"ABC\".lower()",
            "answer": "abc",
            "q": {
              "ru": "Результат \"ABC\".lower()",
              "kk": "\"ABC\".lower() нәтижесі",
              "en": "Result of \"ABC\".lower()"
            }
          },
          {
            "type": "text",
            "question": "Результат \"hi\".upper()",
            "answer": "HI",
            "q": {
              "ru": "Результат \"hi\".upper()",
              "kk": "\"hi\".upper() нәтижесі",
              "en": "Result of \"hi\".upper()"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Строковые методы",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "String methods",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Жол әдістері",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Строковые методы» при создании учебного приложения.",
              "en": "For example, use string methods in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Жол әдістері» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Строковые методы"
          },
          "en": {
            "title": "String methods"
          },
          "kk": {
            "title": "Жол әдістері"
          }
        }
      },
      {
        "title": "Перебор списков",
        "theory": "for позволяет последовательно обработать все элементы.",
        "code": "for x in [2,4,6]:\n    print(x*2)",
        "explain": "Вывод: 4, 8, 12.",
        "tasks": [
          {
            "type": "text",
            "question": "Сколько элементов перебирается?",
            "answer": "3",
            "q": {
              "ru": "Сколько элементов перебирается?",
              "kk": "Неше элемент қарастырылады?",
              "en": "How many elements are iterated over?"
            }
          },
          {
            "type": "text",
            "question": "Последний вывод",
            "answer": "12",
            "q": {
              "ru": "Последний вывод",
              "kk": "Соңғы шығарылатын мән",
              "en": "Last printed value"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Перебор списков",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Iterating over lists",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Тізімді айналып өту",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Перебор списков» при создании учебного приложения.",
              "en": "For example, use iterating over lists in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Тізімді айналып өту» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Перебор списков"
          },
          "en": {
            "title": "Iterating over lists"
          },
          "kk": {
            "title": "Тізімді айналып өту"
          }
        }
      },
      {
        "title": "Функция len",
        "theory": "len() возвращает число элементов коллекции.",
        "code": "print(len('Python'))",
        "explain": "Вывод: 6.",
        "tasks": [
          {
            "type": "text",
            "question": "len(\"кот\")",
            "answer": "3",
            "q": {
              "ru": "len(\"кот\")",
              "kk": "len(\"кот\") нәтижесі",
              "en": "Result of len(\"кот\")"
            }
          },
          {
            "type": "text",
            "question": "len([])",
            "answer": "0",
            "q": {
              "ru": "len([])",
              "kk": "len([])",
              "en": "len([])"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Функция len",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "The len function",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "len функциясы",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Функция len» при создании учебного приложения.",
              "en": "For example, use the len function in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «len функциясы» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Функция len"
          },
          "en": {
            "title": "The len function"
          },
          "kk": {
            "title": "len функциясы"
          }
        }
      },
      {
        "title": "Поиск максимума",
        "theory": "max() находит наибольший элемент, min() — наименьший.",
        "code": "a = [7,2,9]\nprint(max(a))",
        "explain": "Вывод: 9.",
        "tasks": [
          {
            "type": "text",
            "question": "max([1,8,3])",
            "answer": "8",
            "q": {
              "ru": "max([1,8,3])",
              "kk": "max([1,8,3])",
              "en": "max([1,8,3])"
            }
          },
          {
            "type": "text",
            "question": "min([1,8,3])",
            "answer": "1",
            "q": {
              "ru": "min([1,8,3])",
              "kk": "min([1,8,3])",
              "en": "min([1,8,3])"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Поиск максимума",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Finding the maximum",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Максимумды табу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Поиск максимума» при создании учебного приложения.",
              "en": "For example, use finding the maximum in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Максимумды табу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Поиск максимума"
          },
          "en": {
            "title": "Finding the maximum"
          },
          "kk": {
            "title": "Максимумды табу"
          }
        }
      },
      {
        "title": "Мини-проект: среднее",
        "theory": "Среднее арифметическое — сумма элементов, делённая на количество.",
        "code": "a = [4,6,8]\nprint(sum(a)/len(a))",
        "explain": "Вывод: 6.0.",
        "tasks": [
          {
            "type": "text",
            "question": "Среднее 2,4,6",
            "answer": "4",
            "q": {
              "ru": "Среднее 2,4,6",
              "kk": "2, 4, 6 сандарының орташа мәні",
              "en": "Average of 2, 4, 6"
            }
          },
          {
            "type": "text",
            "question": "sum([2,3,5])",
            "answer": "10",
            "q": {
              "ru": "sum([2,3,5])",
              "kk": "sum([2,3,5])",
              "en": "sum([2,3,5])"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: среднее",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: average",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: орташа мән",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: среднее» при создании учебного приложения.",
              "en": "For example, use mini project: average in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: орташа мән» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: среднее"
          },
          "en": {
            "title": "Mini project: average"
          },
          "kk": {
            "title": "Шағын жоба: орташа мән"
          }
        }
      }
    ]
  },
  {
    "grade": 9,
    "subtitle": "Функции и модули",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Функции def",
        "theory": "Функция объединяет команды, которые можно вызывать много раз.",
        "code": "def greet():\n    print(\"Привет\")\ngreet()",
        "explain": "Вывод: Привет.",
        "tasks": [
          {
            "type": "text",
            "question": "Слово объявления функции",
            "answer": "def",
            "q": {
              "ru": "Слово объявления функции",
              "kk": "Функция жариялау кілт сөзі",
              "en": "Function definition keyword"
            }
          },
          {
            "type": "text",
            "question": "Как вызвать greet?",
            "answer": "greet()",
            "q": {
              "ru": "Как вызвать greet?",
              "kk": "greet функциясын қалай шақырады?",
              "en": "How do you call greet?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Функции def",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Functions with def",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "def функциялары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Функции def» при создании учебного приложения.",
              "en": "For example, use functions with def in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «def функциялары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Функции def"
          },
          "en": {
            "title": "Functions with def"
          },
          "kk": {
            "title": "def функциялары"
          }
        }
      },
      {
        "title": "Параметры",
        "theory": "Параметры принимают значения при вызове функции.",
        "code": "def double(x):\n    return x * 2\nprint(double(5))",
        "explain": "Вывод: 10.",
        "tasks": [
          {
            "type": "text",
            "question": "double(7)",
            "answer": "14",
            "q": {
              "ru": "double(7)",
              "kk": "double(7)",
              "en": "double(7)"
            }
          },
          {
            "type": "text",
            "question": "Сколько параметров у double?",
            "answer": "1",
            "q": {
              "ru": "Сколько параметров у double?",
              "kk": "double функциясында неше параметр бар?",
              "en": "How many parameters does double have?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Параметры",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Parameters",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Параметрлер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Параметры» при создании учебного приложения.",
              "en": "For example, use parameters in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Параметрлер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Параметры"
          },
          "en": {
            "title": "Parameters"
          },
          "kk": {
            "title": "Параметрлер"
          }
        }
      },
      {
        "title": "return",
        "theory": "return возвращает результат функции и завершает её выполнение.",
        "code": "def add(a,b):\n    return a+b\nprint(add(2,3))",
        "explain": "Вывод: 5.",
        "tasks": [
          {
            "type": "text",
            "question": "add(4,6)",
            "answer": "10",
            "q": {
              "ru": "add(4,6)",
              "kk": "add(4,6)",
              "en": "add(4,6)"
            }
          },
          {
            "type": "text",
            "question": "Слово возврата значения",
            "answer": "return",
            "q": {
              "ru": "Слово возврата значения",
              "kk": "Мәнді қайтару кілт сөзі",
              "en": "Value return keyword"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "return",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Return values",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "return нәтижесі",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «return» при создании учебного приложения.",
              "en": "For example, use return values in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «return нәтижесі» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "return"
          },
          "en": {
            "title": "Return values"
          },
          "kk": {
            "title": "return нәтижесі"
          }
        }
      },
      {
        "title": "Словари",
        "theory": "Словарь хранит значения по ключам.",
        "code": "user = {'name':'Алия','age':15}\nprint(user['age'])",
        "explain": "Вывод: 15.",
        "tasks": [
          {
            "type": "text",
            "question": "Какой ключ содержит возраст?",
            "answer": "age",
            "q": {
              "ru": "Какой ключ содержит возраст?",
              "kk": "Жас қай кілтте сақталған?",
              "en": "Which key stores the age?"
            }
          },
          {
            "type": "text",
            "question": "Значение user[\"age\"]",
            "answer": "15",
            "q": {
              "ru": "Значение user[\"age\"]",
              "kk": "user[\"age\"] мәні",
              "en": "Value of user[\"age\"]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Словари",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Dictionaries",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Сөздіктер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Словари» при создании учебного приложения.",
              "en": "For example, use dictionaries in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Сөздіктер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Словари"
          },
          "en": {
            "title": "Dictionaries"
          },
          "kk": {
            "title": "Сөздіктер"
          }
        }
      },
      {
        "title": "Методы словарей",
        "theory": "keys() возвращает представление ключей, values() — значений.",
        "code": "d = {'a':1,'b':2}\nprint(len(d))",
        "explain": "Вывод: 2.",
        "tasks": [
          {
            "type": "text",
            "question": "Метод получения ключей",
            "answer": "keys()",
            "q": {
              "ru": "Метод получения ключей",
              "kk": "Кілттерді алу әдісі",
              "en": "Method to get keys"
            }
          },
          {
            "type": "text",
            "question": "Метод получения значений",
            "answer": "values()",
            "q": {
              "ru": "Метод получения значений",
              "kk": "Мәндерді алу әдісі",
              "en": "Method to get values"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Методы словарей",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Dictionary methods",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Сөздік әдістері",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Методы словарей» при создании учебного приложения.",
              "en": "For example, use dictionary methods in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Сөздік әдістері» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Методы словарей"
          },
          "en": {
            "title": "Dictionary methods"
          },
          "kk": {
            "title": "Сөздік әдістері"
          }
        }
      },
      {
        "title": "Области видимости",
        "theory": "Локальная переменная создаётся внутри функции и обычно недоступна снаружи.",
        "code": "x = 10\ndef f():\n    x = 5\n    return x\nprint(f())",
        "explain": "Вывод: 5.",
        "tasks": [
          {
            "type": "text",
            "question": "Что возвращает f()?",
            "answer": "5",
            "q": {
              "ru": "Что возвращает f()?",
              "kk": "f() не қайтарады?",
              "en": "What does f() return?"
            }
          },
          {
            "type": "text",
            "question": "Внешнее x после вызова f",
            "answer": "10",
            "q": {
              "ru": "Внешнее x после вызова f",
              "kk": "f шақырылғаннан кейінгі сыртқы x мәні",
              "en": "Outer x after calling f"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Области видимости",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Variable scope",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Айнымалылардың көріну аймағы",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Области видимости» при создании учебного приложения.",
              "en": "For example, use variable scope in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Айнымалылардың көріну аймағы» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Области видимости"
          },
          "en": {
            "title": "Variable scope"
          },
          "kk": {
            "title": "Айнымалылардың көріну аймағы"
          }
        }
      },
      {
        "title": "Рекурсия",
        "theory": "Рекурсивная функция вызывает саму себя; нужен базовый случай.",
        "code": "def fact(n):\n    if n <= 1: return 1\n    return n * fact(n-1)\nprint(fact(4))",
        "explain": "Вывод: 24.",
        "tasks": [
          {
            "type": "text",
            "question": "Факториал 3",
            "answer": "6",
            "q": {
              "ru": "Факториал 3",
              "kk": "3 факториалы",
              "en": "Factorial of 3"
            }
          },
          {
            "type": "text",
            "question": "Факториал 0",
            "answer": "1",
            "q": {
              "ru": "Факториал 0",
              "kk": "0 факториалы",
              "en": "Factorial of 0"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Рекурсия",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Recursion",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Рекурсия",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Рекурсия» при создании учебного приложения.",
              "en": "For example, use recursion in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Рекурсия» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Рекурсия"
          },
          "en": {
            "title": "Recursion"
          },
          "kk": {
            "title": "Рекурсия"
          }
        }
      },
      {
        "title": "Лямбда-функции",
        "theory": "lambda создаёт небольшую анонимную функцию.",
        "code": "square = lambda x: x*x\nprint(square(6))",
        "explain": "Вывод: 36.",
        "tasks": [
          {
            "type": "text",
            "question": "square(3)",
            "answer": "9",
            "q": {
              "ru": "square(3)",
              "kk": "square(3)",
              "en": "square(3)"
            }
          },
          {
            "type": "text",
            "question": "Ключевое слово анонимной функции",
            "answer": "lambda",
            "q": {
              "ru": "Ключевое слово анонимной функции",
              "kk": "Анонимді функцияның кілт сөзі",
              "en": "Anonymous function keyword"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Лямбда-функции",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Lambda functions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Лямбда функциялары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Лямбда-функции» при создании учебного приложения.",
              "en": "For example, use lambda functions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Лямбда функциялары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Лямбда-функции"
          },
          "en": {
            "title": "Lambda functions"
          },
          "kk": {
            "title": "Лямбда функциялары"
          }
        }
      },
      {
        "title": "Модули",
        "theory": "import подключает готовые модули стандартной библиотеки.",
        "code": "import math\nprint(math.sqrt(81))",
        "explain": "Вывод: 9.0.",
        "tasks": [
          {
            "type": "text",
            "question": "Ключевое слово подключения модуля",
            "answer": "import",
            "q": {
              "ru": "Ключевое слово подключения модуля",
              "kk": "Модульді қосу кілт сөзі",
              "en": "Module import keyword"
            }
          },
          {
            "type": "text",
            "question": "Корень из 49",
            "answer": "7",
            "q": {
              "ru": "Корень из 49",
              "kk": "49 санының квадрат түбірі",
              "en": "Square root of 49"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Модули",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Modules",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Модульдер",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Модули» при создании учебного приложения.",
              "en": "For example, use modules in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Модульдер» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Модули"
          },
          "en": {
            "title": "Modules"
          },
          "kk": {
            "title": "Модульдер"
          }
        }
      },
      {
        "title": "Мини-проект: статистика",
        "theory": "Объединяй функции для обработки набора чисел.",
        "code": "def average(a):\n    return sum(a)/len(a)\nprint(average([2,4,6]))",
        "explain": "Вывод: 4.0.",
        "tasks": [
          {
            "type": "text",
            "question": "average([10,20])",
            "answer": "15",
            "q": {
              "ru": "average([10,20])",
              "kk": "average([10,20])",
              "en": "average([10,20])"
            }
          },
          {
            "type": "text",
            "question": "sum([5,5,5])",
            "answer": "15",
            "q": {
              "ru": "sum([5,5,5])",
              "kk": "sum([5,5,5])",
              "en": "sum([5,5,5])"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: статистика",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: statistics",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: статистика",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: статистика» при создании учебного приложения.",
              "en": "For example, use mini project: statistics in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: статистика» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: статистика"
          },
          "en": {
            "title": "Mini project: statistics"
          },
          "kk": {
            "title": "Шағын жоба: статистика"
          }
        }
      }
    ]
  },
  {
    "grade": 10,
    "subtitle": "Алгоритмы и файлы",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Сортировка sorted",
        "theory": "sorted возвращает новый отсортированный список.",
        "code": "a = [9,1,5]\nprint(sorted(a))",
        "explain": "Вывод: [1, 5, 9].",
        "tasks": [
          {
            "type": "text",
            "question": "Первый элемент sorted([5,2,8])",
            "answer": "2",
            "q": {
              "ru": "Первый элемент sorted([5,2,8])",
              "kk": "sorted([5,2,8]) бірінші элементі",
              "en": "First element of sorted([5,2,8])"
            }
          },
          {
            "type": "text",
            "question": "Функция сортировки",
            "answer": "sorted",
            "q": {
              "ru": "Функция сортировки",
              "kk": "Сұрыптау функциясы",
              "en": "Sorting function"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Сортировка sorted",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Sorting with sorted",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "sorted арқылы сұрыптау",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Сортировка sorted» при создании учебного приложения.",
              "en": "For example, use sorting with sorted in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «sorted арқылы сұрыптау» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Сортировка sorted"
          },
          "en": {
            "title": "Sorting with sorted"
          },
          "kk": {
            "title": "sorted арқылы сұрыптау"
          }
        }
      },
      {
        "title": "Сортировка reverse",
        "theory": "Параметр reverse=True сортирует по убыванию.",
        "code": "print(sorted([2,8,1], reverse=True))",
        "explain": "Вывод: [8, 2, 1].",
        "tasks": [
          {
            "type": "text",
            "question": "Первый элемент результата",
            "answer": "8",
            "q": {
              "ru": "Первый элемент результата",
              "kk": "Нәтиженің бірінші элементі",
              "en": "First element of the result"
            }
          },
          {
            "type": "text",
            "question": "Значение reverse для убывания",
            "answer": "True",
            "q": {
              "ru": "Значение reverse для убывания",
              "kk": "Кему ретімен сұрыптау үшін reverse мәні",
              "en": "Value of reverse for descending order"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Сортировка reverse",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Reverse sorting",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Кері сұрыптау",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Сортировка reverse» при создании учебного приложения.",
              "en": "For example, use reverse sorting in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Кері сұрыптау» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Сортировка reverse"
          },
          "en": {
            "title": "Reverse sorting"
          },
          "kk": {
            "title": "Кері сұрыптау"
          }
        }
      },
      {
        "title": "Линейный поиск",
        "theory": "Линейный поиск последовательно проверяет элементы списка.",
        "code": "a = [4,7,9]\nprint(7 in a)",
        "explain": "Вывод: True.",
        "tasks": [
          {
            "type": "text",
            "question": "Есть ли 3 в [1,2,3]?",
            "answer": "True",
            "q": {
              "ru": "Есть ли 3 в [1,2,3]?",
              "kk": "[1,2,3] ішінде 3 бар ма?",
              "en": "Is 3 in [1,2,3]?"
            }
          },
          {
            "type": "text",
            "question": "Есть ли 8 в [1,2,3]?",
            "answer": "False",
            "q": {
              "ru": "Есть ли 8 в [1,2,3]?",
              "kk": "[1,2,3] ішінде 8 бар ма?",
              "en": "Is 8 in [1,2,3]?"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Линейный поиск",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Linear search",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Сызықтық іздеу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Линейный поиск» при создании учебного приложения.",
              "en": "For example, use linear search in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Сызықтық іздеу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Линейный поиск"
          },
          "en": {
            "title": "Linear search"
          },
          "kk": {
            "title": "Сызықтық іздеу"
          }
        }
      },
      {
        "title": "Бинарный поиск",
        "theory": "Бинарный поиск делит отсортированный массив пополам; сложность O(log n).",
        "code": "from bisect import bisect_left\na=[1,3,5,7]\nprint(bisect_left(a,5))",
        "explain": "Вывод: 2.",
        "tasks": [
          {
            "type": "text",
            "question": "Индекс 5 в [1,3,5,7]",
            "answer": "2",
            "q": {
              "ru": "Индекс 5 в [1,3,5,7]",
              "kk": "[1,3,5,7] тізіміндегі 5 индексі",
              "en": "Index of 5 in [1,3,5,7]"
            }
          },
          {
            "type": "text",
            "question": "Массив для бинарного поиска должен быть...",
            "answer": "отсортированным",
            "q": {
              "ru": "Массив для бинарного поиска должен быть...",
              "kk": "Бинарлық іздеуге арналған массив қандай болуы керек?",
              "en": "An array for binary search must be..."
            },
            "acceptedAnswers": [
              "sorted",
              "сұрыпталған",
              "отсортированным"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Бинарный поиск",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Binary search",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Екілік іздеу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Бинарный поиск» при создании учебного приложения.",
              "en": "For example, use binary search in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Екілік іздеу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Бинарный поиск"
          },
          "en": {
            "title": "Binary search"
          },
          "kk": {
            "title": "Екілік іздеу"
          }
        }
      },
      {
        "title": "Сложность алгоритмов",
        "theory": "O(n) — линейный рост операций, O(n²) — квадратичный.",
        "code": "a = [1,2,3]\nfor x in a:\n    print(x)",
        "explain": "Выполняется 3 итерации.",
        "tasks": [
          {
            "type": "text",
            "question": "Сложность одного прохода по n элементам",
            "answer": "O(n)",
            "q": {
              "ru": "Сложность одного прохода по n элементам",
              "kk": "n элементтен бір рет өтудің күрделілігі",
              "en": "Complexity of one pass over n elements"
            }
          },
          {
            "type": "text",
            "question": "Сложность двух вложенных циклов по n",
            "answer": "O(n²)",
            "q": {
              "ru": "Сложность двух вложенных циклов по n",
              "kk": "n бойынша екі кірістірілген циклдің күрделілігі",
              "en": "Complexity of two nested loops of size n"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Сложность алгоритмов",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Algorithm complexity",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Алгоритм күрделілігі",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Сложность алгоритмов» при создании учебного приложения.",
              "en": "For example, use algorithm complexity in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Алгоритм күрделілігі» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Сложность алгоритмов"
          },
          "en": {
            "title": "Algorithm complexity"
          },
          "kk": {
            "title": "Алгоритм күрделілігі"
          }
        }
      },
      {
        "title": "Файлы: запись",
        "theory": "with open(..., \"w\") открывает файл для записи и автоматически закрывает его.",
        "code": "with open('note.txt','w',encoding='utf-8') as f:\n    f.write('Привет')",
        "explain": "В файл записывается Привет.",
        "tasks": [
          {
            "type": "text",
            "question": "Режим записи",
            "answer": "w",
            "q": {
              "ru": "Режим записи",
              "kk": "Жазу режимі",
              "en": "Write mode"
            }
          },
          {
            "type": "text",
            "question": "Метод записи",
            "answer": "write",
            "q": {
              "ru": "Метод записи",
              "kk": "Жазу әдісі",
              "en": "Write method"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Файлы: запись",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Writing files",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Файлға жазу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Файлы: запись» при создании учебного приложения.",
              "en": "For example, use writing files in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Файлға жазу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Файлы: запись"
          },
          "en": {
            "title": "Writing files"
          },
          "kk": {
            "title": "Файлға жазу"
          }
        }
      },
      {
        "title": "Файлы: чтение",
        "theory": "Режим r открывает файл для чтения. read() считывает содержимое.",
        "code": "with open('note.txt','r',encoding='utf-8') as f:\n    text = f.read()",
        "explain": "Переменная text содержит текст файла.",
        "tasks": [
          {
            "type": "text",
            "question": "Режим чтения",
            "answer": "r",
            "q": {
              "ru": "Режим чтения",
              "kk": "Оқу режимі",
              "en": "Read mode"
            }
          },
          {
            "type": "text",
            "question": "Метод чтения",
            "answer": "read",
            "q": {
              "ru": "Метод чтения",
              "kk": "Оқу әдісі",
              "en": "Read method"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Файлы: чтение",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Reading files",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Файлдан оқу",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Файлы: чтение» при создании учебного приложения.",
              "en": "For example, use reading files in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Файлдан оқу» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Файлы: чтение"
          },
          "en": {
            "title": "Reading files"
          },
          "kk": {
            "title": "Файлдан оқу"
          }
        }
      },
      {
        "title": "Исключения",
        "theory": "try/except позволяют обрабатывать ошибки без остановки всей программы.",
        "code": "try:\n    int('abc')\nexcept ValueError:\n    print('Ошибка')",
        "explain": "Вывод: Ошибка.",
        "tasks": [
          {
            "type": "text",
            "question": "Тип ошибки преобразования abc в int",
            "answer": "ValueError",
            "q": {
              "ru": "Тип ошибки преобразования abc в int",
              "kk": "abc мәнін int түріне айналдыру қатесінің типі",
              "en": "Error type when converting abc to int"
            }
          },
          {
            "type": "text",
            "question": "Ключевое слово обработки ошибки",
            "answer": "except",
            "q": {
              "ru": "Ключевое слово обработки ошибки",
              "kk": "Қатені өңдеу кілт сөзі",
              "en": "Error handling keyword"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Исключения",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Exceptions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Ерекше жағдайлар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Исключения» при создании учебного приложения.",
              "en": "For example, use exceptions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Ерекше жағдайлар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Исключения"
          },
          "en": {
            "title": "Exceptions"
          },
          "kk": {
            "title": "Ерекше жағдайлар"
          }
        }
      },
      {
        "title": "JSON",
        "theory": "Модуль json переводит структуры данных в JSON и обратно.",
        "code": "import json\nprint(json.dumps({\"x\": 1}))",
        "explain": "Вывод: {\"x\": 1}.",
        "tasks": [
          {
            "type": "text",
            "question": "Метод сериализации JSON",
            "answer": "dumps",
            "q": {
              "ru": "Метод сериализации JSON",
              "kk": "JSON сериализация әдісі",
              "en": "JSON serialization method"
            }
          },
          {
            "type": "text",
            "question": "Модуль для JSON",
            "answer": "json",
            "q": {
              "ru": "Модуль для JSON",
              "kk": "JSON модулі",
              "en": "Module for JSON"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "JSON",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "JSON",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "JSON",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «JSON» при создании учебного приложения.",
              "en": "For example, use json in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «JSON» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "JSON"
          },
          "en": {
            "title": "JSON"
          },
          "kk": {
            "title": "JSON"
          }
        }
      },
      {
        "title": "Мини-проект: анализ данных",
        "theory": "Сочетай сортировку, сумму и длину списка для анализа.",
        "code": "a=[4,8,6]\nprint(max(a)-min(a))",
        "explain": "Вывод: 4.",
        "tasks": [
          {
            "type": "text",
            "question": "Размах [2,9,5]",
            "answer": "7",
            "q": {
              "ru": "Размах [2,9,5]",
              "kk": "[2,9,5] ауқымы",
              "en": "Range of [2,9,5]"
            }
          },
          {
            "type": "text",
            "question": "Среднее [3,6,9]",
            "answer": "6",
            "q": {
              "ru": "Среднее [3,6,9]",
              "kk": "[3,6,9] орташа мәні",
              "en": "Average of [3,6,9]"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: анализ данных",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: data analysis",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: деректерді талдау",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: анализ данных» при создании учебного приложения.",
              "en": "For example, use mini project: data analysis in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: деректерді талдау» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: анализ данных"
          },
          "en": {
            "title": "Mini project: data analysis"
          },
          "kk": {
            "title": "Шағын жоба: деректерді талдау"
          }
        }
      }
    ]
  },
  {
    "grade": 11,
    "subtitle": "Объектно-ориентированное программирование",
    "lessons": [
      {
        "i18n": {
          "ru": {
            "title": "Урок 0. Знакомство с Python и установка"
          },
          "kk": {
            "title": "0-сабақ. Python-мен танысу және орнату"
          },
          "en": {
            "title": "Lesson 0. Meet Python and install it"
          }
        },
        "code": "print(\"Hello, Python!\")\nprint(2 + 3)",
        "theory": "Python — язык программирования общего назначения. Скачайте актуальную стабильную версию Python 3 с официального сайта https://www.python.org/downloads/ . На Windows при установке включите добавление Python в PATH, если такой параметр предлагается. На macOS запустите официальный установщик; на Linux проверьте системный python3 или установите его через менеджер пакетов. Откройте терминал и проверьте python --version (Windows) или python3 --version (macOS/Linux). Создайте файл hello.py, введите print(\"Hello, Python!\") и выполните python hello.py или python3 hello.py. Для удобства можно использовать IDLE или VS Code с расширением Python. Не скачивайте установщики с неизвестных сайтов.",
        "explain": "Ожидаемый вывод: Hello, Python! и 5.",
        "tasks": [
          {
            "type": "choice",
            "q": {
              "ru": "Откуда безопаснее скачивать Python?",
              "kk": "Python-ды қайдан қауіпсіз жүктеуге болады?",
              "en": "Where should you download Python safely?"
            },
            "options": {
              "ru": [
                "python.org",
                "Случайный файловый сайт",
                "Неизвестный чат"
              ],
              "kk": [
                "python.org",
                "Кездейсоқ файл сайты",
                "Белгісіз чат"
              ],
              "en": [
                "python.org",
                "Random file-sharing site",
                "Unknown chat"
              ]
            },
            "correct": 0
          },
          {
            "type": "text",
            "question": "Какая команда проверяет версию Python на Windows?",
            "q": {
              "ru": "Какая команда проверяет версию Python на Windows?",
              "kk": "Windows жүйесінде Python нұсқасын қандай команда тексереді?",
              "en": "Which command checks the Python version on Windows?"
            },
            "answer": "python --version"
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какое расширение у файла программы Python?",
              "kk": "Python бағдарламасының файл кеңейтімі қандай?",
              "en": "What is the extension of a Python source file?"
            },
            "options": {
              "ru": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "kk": [
                ".py",
                ".jpg",
                ".mp3"
              ],
              "en": [
                ".py",
                ".jpg",
                ".mp3"
              ]
            },
            "correct": 0
          },
          {
            "type": "order",
            "q": {
              "ru": "Расположи шаги первого запуска.",
              "kk": "Алғашқы іске қосу қадамдарын ретте.",
              "en": "Put the first-run steps in order."
            },
            "items": {
              "ru": [
                "Установить Python",
                "Создать hello.py",
                "Запустить файл"
              ],
              "kk": [
                "Python орнату",
                "hello.py жасау",
                "Файлды іске қосу"
              ],
              "en": [
                "Install Python",
                "Create hello.py",
                "Run the file"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни, зачем нужен интерпретатор Python.",
              "kk": "Python интерпретаторы не үшін қажет екенін түсіндір.",
              "en": "Explain what the Python interpreter does."
            },
            "sample": {
              "ru": "Он выполняет команды Python и сообщает об ошибках.",
              "kk": "Ол Python командаларын орындайды және қателерді көрсетеді.",
              "en": "It executes Python instructions and reports errors."
            }
          }
        ]
      },
      {
        "title": "Классы",
        "theory": "Класс описывает структуру и поведение объектов.",
        "code": "class Cat:\n    pass\nc = Cat()\nprint(type(c).__name__)",
        "explain": "Вывод: Cat.",
        "tasks": [
          {
            "type": "text",
            "question": "Ключевое слово объявления класса",
            "answer": "class",
            "q": {
              "ru": "Ключевое слово объявления класса",
              "kk": "Класс жариялау кілт сөзі",
              "en": "Class declaration keyword"
            }
          },
          {
            "type": "text",
            "question": "Название класса в примере",
            "answer": "Cat",
            "q": {
              "ru": "Название класса в примере",
              "kk": "Мысалдағы класс атауы",
              "en": "Class name in the example"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Классы",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Classes",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Кластар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Классы» при создании учебного приложения.",
              "en": "For example, use classes in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Кластар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Классы"
          },
          "en": {
            "title": "Classes"
          },
          "kk": {
            "title": "Кластар"
          }
        }
      },
      {
        "title": "Конструктор __init__",
        "theory": "Метод __init__ задаёт начальное состояние объекта.",
        "code": "class User:\n    def __init__(self,name):\n        self.name=name\nu=User(\"Дана\")\nprint(u.name)",
        "explain": "Вывод: Дана.",
        "tasks": [
          {
            "type": "text",
            "question": "Метод инициализации",
            "answer": "__init__",
            "q": {
              "ru": "Метод инициализации",
              "kk": "Инициализация әдісі",
              "en": "Initialization method"
            }
          },
          {
            "type": "text",
            "question": "Значение u.name",
            "answer": "Дана",
            "q": {
              "ru": "Значение u.name",
              "kk": "u.name мәні",
              "en": "Value of u.name"
            },
            "acceptedAnswers": [
              "Dana",
              "Дана"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Конструктор __init__",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "The __init__ constructor",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "__init__ конструкторы",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Конструктор __init__» при создании учебного приложения.",
              "en": "For example, use the __init__ constructor in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «__init__ конструкторы» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Конструктор __init__"
          },
          "en": {
            "title": "The __init__ constructor"
          },
          "kk": {
            "title": "__init__ конструкторы"
          }
        }
      },
      {
        "title": "Методы объектов",
        "theory": "Метод — функция внутри класса, которая может работать с self.",
        "code": "class Counter:\n    def value(self):\n        return 5\nprint(Counter().value())",
        "explain": "Вывод: 5.",
        "tasks": [
          {
            "type": "text",
            "question": "Значение Counter().value()",
            "answer": "5",
            "q": {
              "ru": "Значение Counter().value()",
              "kk": "Counter().value() мәні",
              "en": "Value of Counter().value()"
            }
          },
          {
            "type": "text",
            "question": "Первый параметр метода объекта",
            "answer": "self",
            "q": {
              "ru": "Первый параметр метода объекта",
              "kk": "Объект әдісінің бірінші параметрі",
              "en": "First parameter of an instance method"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Методы объектов",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Object methods",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Объект әдістері",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Методы объектов» при создании учебного приложения.",
              "en": "For example, use object methods in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Объект әдістері» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Методы объектов"
          },
          "en": {
            "title": "Object methods"
          },
          "kk": {
            "title": "Объект әдістері"
          }
        }
      },
      {
        "title": "Наследование",
        "theory": "Дочерний класс может наследовать методы родительского.",
        "code": "class Animal:\n    def sound(self): return \"Звук\"\nclass Dog(Animal): pass\nprint(Dog().sound())",
        "explain": "Вывод: Звук.",
        "tasks": [
          {
            "type": "text",
            "question": "Родительский класс",
            "answer": "Animal",
            "q": {
              "ru": "Родительский класс",
              "kk": "Ата-аналық класс",
              "en": "Parent class"
            }
          },
          {
            "type": "text",
            "question": "Что выведет пример?",
            "answer": "Звук",
            "q": {
              "ru": "Что выведет пример?",
              "kk": "Мысал не шығарады?",
              "en": "What does the example print?"
            },
            "acceptedAnswers": [
              "Дыбыс",
              "Звук",
              "Sound"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Наследование",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Inheritance",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Мұрагерлік",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Наследование» при создании учебного приложения.",
              "en": "For example, use inheritance in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Мұрагерлік» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Наследование"
          },
          "en": {
            "title": "Inheritance"
          },
          "kk": {
            "title": "Мұрагерлік"
          }
        }
      },
      {
        "title": "Полиморфизм",
        "theory": "Объекты разных классов могут иметь методы с одинаковым названием.",
        "code": "class A:\n    def say(self): return \"A\"\nclass B:\n    def say(self): return \"B\"\nprint(B().say())",
        "explain": "Вывод: B.",
        "tasks": [
          {
            "type": "text",
            "question": "Что выведет B().say()?",
            "answer": "B",
            "q": {
              "ru": "Что выведет B().say()?",
              "kk": "B().say() не шығарады?",
              "en": "What does B().say() print?"
            }
          },
          {
            "type": "text",
            "question": "Как называется принцип общего интерфейса?",
            "answer": "полиморфизм",
            "q": {
              "ru": "Как называется принцип общего интерфейса?",
              "kk": "Ортақ интерфейс принципі қалай аталады?",
              "en": "What is the principle of a common interface called?"
            },
            "acceptedAnswers": [
              "полиморфизм",
              "polymorphism"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Полиморфизм",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Polymorphism",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Полиморфизм",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Полиморфизм» при создании учебного приложения.",
              "en": "For example, use polymorphism in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Полиморфизм» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Полиморфизм"
          },
          "en": {
            "title": "Polymorphism"
          },
          "kk": {
            "title": "Полиморфизм"
          }
        }
      },
      {
        "title": "Инкапсуляция",
        "theory": "Инкапсуляция объединяет данные и методы. _name — соглашение о внутреннем использовании.",
        "code": "class User:\n    def __init__(self): self._age=16\n    def get_age(self): return self._age\nprint(User().get_age())",
        "explain": "Вывод: 16.",
        "tasks": [
          {
            "type": "text",
            "question": "Что возвращает get_age()?",
            "answer": "16",
            "q": {
              "ru": "Что возвращает get_age()?",
              "kk": "get_age() не қайтарады?",
              "en": "What does get_age() return?"
            }
          },
          {
            "type": "text",
            "question": "Символ соглашения внутреннего атрибута",
            "answer": "_",
            "q": {
              "ru": "Символ соглашения внутреннего атрибута",
              "kk": "Ішкі атрибутты белгілеу таңбасы",
              "en": "Convention symbol for an internal attribute"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Инкапсуляция",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Encapsulation",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Инкапсуляция",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Инкапсуляция» при создании учебного приложения.",
              "en": "For example, use encapsulation in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Инкапсуляция» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Инкапсуляция"
          },
          "en": {
            "title": "Encapsulation"
          },
          "kk": {
            "title": "Инкапсуляция"
          }
        }
      },
      {
        "title": "Генераторы списков",
        "theory": "Списковые включения компактно создают новые списки.",
        "code": "a=[x*x for x in range(4)]\nprint(a)",
        "explain": "Вывод: [0, 1, 4, 9].",
        "tasks": [
          {
            "type": "text",
            "question": "Последний элемент результата",
            "answer": "9",
            "q": {
              "ru": "Последний элемент результата",
              "kk": "Нәтиженің соңғы элементі",
              "en": "Last element of the result"
            }
          },
          {
            "type": "text",
            "question": "Число элементов",
            "answer": "4",
            "q": {
              "ru": "Число элементов",
              "kk": "Элементтер саны",
              "en": "Number of elements"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Генераторы списков",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "List comprehensions",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Тізім генераторлары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Генераторы списков» при создании учебного приложения.",
              "en": "For example, use list comprehensions in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Тізім генераторлары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Генераторы списков"
          },
          "en": {
            "title": "List comprehensions"
          },
          "kk": {
            "title": "Тізім генераторлары"
          }
        }
      },
      {
        "title": "Генераторы yield",
        "theory": "yield выдаёт значения по одному и сохраняет состояние функции.",
        "code": "def nums():\n    yield 1\n    yield 2\nprint(list(nums()))",
        "explain": "Вывод: [1, 2].",
        "tasks": [
          {
            "type": "text",
            "question": "Ключевое слово генератора",
            "answer": "yield",
            "q": {
              "ru": "Ключевое слово генератора",
              "kk": "Генератордың кілт сөзі",
              "en": "Generator keyword"
            }
          },
          {
            "type": "text",
            "question": "Число выдаваемых значений",
            "answer": "2",
            "q": {
              "ru": "Число выдаваемых значений",
              "kk": "Шығарылатын мәндер саны",
              "en": "Number of yielded values"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Генераторы yield",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Yield generators",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "yield генераторлары",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Генераторы yield» при создании учебного приложения.",
              "en": "For example, use yield generators in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «yield генераторлары» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Генераторы yield"
          },
          "en": {
            "title": "Yield generators"
          },
          "kk": {
            "title": "yield генераторлары"
          }
        }
      },
      {
        "title": "Декораторы",
        "theory": "Декоратор оборачивает функцию и может изменить её поведение.",
        "code": "def deco(f):\n    def wrap(): return f()+\"!\"\n    return wrap\n@deco\ndef hello(): return \"Привет\"\nprint(hello())",
        "explain": "Вывод: Привет!.",
        "tasks": [
          {
            "type": "text",
            "question": "Символ применения декоратора",
            "answer": "@",
            "q": {
              "ru": "Символ применения декоратора",
              "kk": "Декораторды қолдану таңбасы",
              "en": "Decorator application symbol"
            }
          },
          {
            "type": "text",
            "question": "Что выведет hello()?",
            "answer": "Привет!",
            "q": {
              "ru": "Что выведет hello()?",
              "kk": "hello() не шығарады?",
              "en": "What does hello() print?"
            },
            "acceptedAnswers": [
              "Сәлем!",
              "Hello!",
              "Привет!"
            ]
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Декораторы",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Decorators",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Декораторлар",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Декораторы» при создании учебного приложения.",
              "en": "For example, use decorators in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Декораторлар» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Декораторы"
          },
          "en": {
            "title": "Decorators"
          },
          "kk": {
            "title": "Декораторлар"
          }
        }
      },
      {
        "title": "Мини-проект: модель ученика",
        "theory": "Используй класс для хранения оценок и подсчёта среднего.",
        "code": "class Student:\n    def __init__(self,marks): self.marks=marks\n    def avg(self): return sum(self.marks)/len(self.marks)\nprint(Student([4,5,3]).avg())",
        "explain": "Вывод: 4.0.",
        "tasks": [
          {
            "type": "text",
            "question": "Среднее оценок 4,5,3",
            "answer": "4",
            "q": {
              "ru": "Среднее оценок 4,5,3",
              "kk": "4, 5, 3 бағаларының орташа мәні",
              "en": "Average of grades 4, 5, 3"
            }
          },
          {
            "type": "text",
            "question": "Название метода среднего в примере",
            "answer": "avg",
            "q": {
              "ru": "Название метода среднего в примере",
              "kk": "Мысалдағы орташа мән әдісінің атауы",
              "en": "Name of the averaging method in the example"
            }
          },
          {
            "type": "choice",
            "q": {
              "ru": "Какой раздел изучаем на этом уроке?",
              "en": "Which topic does this lesson cover?",
              "kk": "Бұл сабақта қандай тақырып оқытылады?"
            },
            "options": {
              "ru": [
                "Мини-проект: модель ученика",
                "Работа с изображениями",
                "Компьютерные сети"
              ],
              "en": [
                "Mini project: student model",
                "Image editing",
                "Computer networks"
              ],
              "kk": [
                "Шағын жоба: оқушы моделі",
                "Суреттерді өңдеу",
                "Компьютерлік желілер"
              ]
            },
            "correct": 0,
            "why": {
              "ru": "Название темы указано в заголовке урока.",
              "en": "The topic is stated in the lesson title.",
              "kk": "Тақырып сабақтың атауында көрсетілген."
            }
          },
          {
            "type": "order",
            "q": {
              "ru": "Расставь шаги решения задачи в правильном порядке.",
              "en": "Arrange the problem-solving steps in the correct order.",
              "kk": "Есеп шығару қадамдарын дұрыс ретке қой."
            },
            "items": {
              "ru": [
                "Понять задачу",
                "Написать код",
                "Проверить результат"
              ],
              "en": [
                "Understand the task",
                "Write the code",
                "Check the result"
              ],
              "kk": [
                "Есепті түсіну",
                "Кодты жазу",
                "Нәтижені тексеру"
              ]
            },
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "reflection",
            "q": {
              "ru": "Объясни своими словами, где можно применить изученную тему.",
              "en": "Explain in your own words where you could use this topic.",
              "kk": "Осы тақырыпты қайда қолдануға болатынын өз сөзіңмен түсіндір."
            },
            "sample": {
              "ru": "Например, использовать «Мини-проект: модель ученика» при создании учебного приложения.",
              "en": "For example, use mini project: student model in a learning app.",
              "kk": "Мысалы, оқу қосымшасында «Шағын жоба: оқушы моделі» тақырыбын қолдануға болады."
            }
          }
        ],
        "i18n": {
          "ru": {
            "title": "Мини-проект: модель ученика"
          },
          "en": {
            "title": "Mini project: student model"
          },
          "kk": {
            "title": "Шағын жоба: оқушы моделі"
          }
        }
      }
    ]
  }
];
