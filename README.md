# **Pet-проект "Business"**

### Проект бизнес сайта
___

### Базовая документация к проекту:
#### :white_check_mark: HTML 5
#### :white_check_mark: CSS 2.1 (LESS)
#### :white_check_mark: GIT
#### :white_check_mark: Методология БЭМ
#### :white_check_mark: W3C
#### :white_check_mark: Figma

### Подготавливаем директорию для проекта:
#### Создаем директорию для проекта

```git
mkdir project/Local_business/client
```
#### Переходим в директорию проекта и создаем в нем начальный файл

```git
cd client
```
```html
index.html
```
___
### Создаем репозитории для проекта на github:
#### Создаем ssh-ключ для репозитория и дальнейшей разработки

```git
ssh-keygen
```
#### Извлекаем ключ для добавления его в репозиторий в качестве Deploy key
```git
cat /root/.ssh/id_rsa.pub
```
#### Данный ключ в настройках проекта на git нужно добавить, как Deploy key. 
#### Это нужно для того, чтобы не вводить пароль от git каждый раз при обращении к репозиторию.
#### После добавления ключа копируем информацию для клонирования репозитория по SSH, после чего запускаем клонирование.
#### Клонирование проекта
```git
git@github.com:Kristina930/Local_business.git
```
#### Переходим в корневой каталог проекта
```git
cd client/
```
___

### Требования к курсовому проекту
+ Верстка всех страниц со стилизацией согласно дизайн-макету
+ Сайт должен быть адаптивный и кроссбраузерный
+ Научиться писать чистый код

___

### Все изменения внести в git репозитории
#### Подтянуть все изменения 
```git
git add .
```
#### Добавить commet
```git
git commit -m ”comment”
```
#### Залить изменения на удалённый репозиторий
```git
git push -u  origin название ветки
```
