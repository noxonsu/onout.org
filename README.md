https://onout.org
https://onout.org/telegram/GPT/ - connect gpt to telegram


# devops
если надо менять страницу по крипте, редактируй прямо index.html далее само задеплоится в cf pages

если аи и прочие новые:
1. см гугл таблицы. 
2. меняй там нужную строку (сделано, чтоб манагерам проще было).
3. в меню тыкай enable gpt functions,
4. в меню onout stuff - translate current row (или all rows)
5. gpt functions - open - replace gpt forumals with values in sheet
6. зайди на сервер wp и редактируй /home/cloud.onout.org/web/cloud2.onout.org/public_html/generate.php согласно коментам
7. в той же папке ```cd onout.org && git reset --hard && git pull ```
8. запусти cloud2.onout.org/generate.php оно перезапишет html файлы одного продукта (Какой раскоменчен)
9. скрипт выдаст линки на превьюхи, проверь, что все ок во всех переводах!
10. ``` git add . && git commit && git push ``` (нужно будет ввести название изменений) 
