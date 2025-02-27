# Git - наиболее частые команды
![](https://dataenginer.ru/wp-content/uploads/2019/01/e948f49dadbb4dc8af8da57a8843a635-1024x338.png)
## Где найти команды и их описание?
- **git help** - перечень общих команд
- **git help названиеКоманды** - ссылка на команду и подробное описание

## Начало работы с Git
- **git init** - инициализирует новый репозиторий
- **git config user.name / user.email** - установка имени и почты человека внесшего изменения 
- **git remote add origin ссылкаНаХранилище** - связь с хранилищем в гитхабе
- **git add  -A /. / abc.html** - выделение файла для добавления в индекс
- **git commit -a / abc.html -m "определение коммита"** - добавление файла в репозиторий
- **git push origin main** - загрузка в удаленный репозиторий
- **git config --list**  - конфиг гита

## Узнать статус/логи/комит
- **git status** - статус файлов в индексе
- **git log** - открыть логи, просмотреть изменения (можно найти хэш комита и переключиться по нему)
- **git show хэшКомита** - покажет весь комит  (*хэш взять из гит лога*)

## Убрать/Удалить/Откатить
- **git restore** --staged путь до файла - убрать из индекса
- **git rm -r --cashed путь до файла** - убрать из репозитория и индекса (*оставить в рабочей области, флаг --cashed / удаленный репозиторий, флаг -r*)
- **git checkout HEAD^** - откат на прошлый коммит
- **git revert хэшКомита** - вернуться на определенный комит (*как вернуться на свой комит будет сразу в подсказках*)

## Ветки 
- **git branch** - посмотреть на какой ты ветке
- **git branch abc** - создание новой ветки "аbc"
- **git branch -d abc** - удаление ветки "abc" (*удаление это флаг -d*)
- **git checkout main** - переключение на ветку мейн
- **git checkout -b abc** - переключение и создание ветки abc
- **git cherry-pick abc def main** - выборочно копирует коммиты на ветку main

## Слияние
- **git merge abc** - выполняется слияние основной ветки и ветки abc (нужно прописать в основной ветке)
- **git rebase main** (*переносит комиты поверх ветки мейн и выполняется с ветки, которую переносим*)
- **git merge --abort** - остановить слияние при конфликте

## Загрузить себе
- **git clone ссылкаНаФайл** - клонирование репозитория в свою рабочую область
- **git fetch** - загрузить из удаленного репозитория в локальный (*без изменений локального*)
- **git pull** - загрузить из удаленного репозитория в локальный (*изменяет локальный*)  

[Полезные команды Git](https://habr.com/ru/companies/ruvds/articles/599929/)

# Alias/Короткое название

### git config alias.toHub '!git add .; git commit -m "fast"; git push' 
(*перечисление нескольких команд в один алиас!*)

### git config --global alias.co checkout 
### git config --global alias.ci commit
### git config --global alias.st status
### git config --global alias.br branch
### git config --global alias.type 'cat-file -t'
### git config --global alias.dump 'cat-file -p'
(*Установка глобальных сокращений для команд*)
