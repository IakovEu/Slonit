# Git наиболее частые команды

## Где найти команды и их описание?
- **git help** - перечень общих команд
- **git help название команды** - ссылка на команду и подробное описание

## Начало работы с Git
- **git init** - инициализирует новый репозиторий
- **git config user.name / user.email** - установка имени и почты человека внесшего изменения 
- **git remote add origin http://linkName.com** - связь с хранилищем в гитхабе
- **git add  -A /. / abc.html** - выделение файла для добавления в индекс
- **git commit -a / abc.html -m "определение коммита"** - добавление файла в репозиторий
- **git push origin main** - загрузка в удаленный репозиторий

## Узнать статус/логи
- **git status** - статус файлов в индексе
- **git log** - открыть логи, просмотреть изменения (можно найти хэш комита и переключиться по нему)

## Убрать/Удалить/Откатить
- **git restore** --staged путь до файла - убрать из индекса
- **git rm -r --cashed путь до файла** - убрать из репозитория и индекса (*оставить в рабочей области флаг --cashed удаленный репозиторий флаг -r*)

## Ветки 
- **git branch** - посмотреть на какой ты ветке
- **git branch abc** - создание новой ветки "аbc"
- **git branch -d abc** - удаление ветки "abc" (*удаление это флаг -d*)
- **git checkout main** - переключение на ветку мейн
- **git checkout -b abc** - переключение + создание ветки abc


git show хэш комита(взять из гит лога) - покажет весь комит  


git checkout HEAD^ - откат на прошлый коммит

git merge abc - выполняется слияние основной ветки и ветки abc (нужно прописать в основной ветке)
git merge --abort - остановить слияние при конфликте

git rebase main (переносит коммиты поверх ветки мейн и выполняется с ветки abc)

git pull origin main - загрузка с выбранной ветки из репозитория

git clone ссылка на файл на гитхабе - клонирование репозитория

git reset HEAD~2- удаление коммита в локальном репозитории

git revert HEAD - замена коммита на прошлый в удаленном репозитории

git cherry-pick abc def main - копирует коммиты

git config --list  - конфиг гита

-------------------------------------------------------------------------
# Alias короткое название

git config alias.наименованиеКоманды '!git add .; git commit -m "fast"; git push'
перечисление команд в один алиас! (У меня toHub)

git config --global alias.co checkout (Установка глобальных сокращений для команд)
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
git config --global alias.type 'cat-file -t'
git config --global alias.dump 'cat-file -p'
