from bs4 import BeautifulSoup
import requests
import json
import  secrets

categories = [['Художественная литература', 'https://www.litres.ru/genre/knigi-boeviki-ostrosugetnaya-5014/'],
              ['Нехудожественная литература','https://www.litres.ru/genre/knigi-sovremennaya-proza-5015/'],
              ['Книги для детей', 'https://www.litres.ru/genre/priklucheniya-5107/'],
              ['Переодические издания', 'https://www.litres.ru/genre/knigi-fantastika-5004/'],
              ['Религия','https://www.litres.ru/genre/religiya-duhovnaya-literatura-5012/'],
              ['Учебная литература','https://www.litres.ru/genre/kadrovyj_menedzhment-5047/'],
              ['Комиксы','https://www.litres.ru/tags/komiksy/']
]

data = {

}

for i in categories:
    data[i[0]] = []

def pars(url, genre):
    response = requests.get(url)

    soup = BeautifulSoup(response.text, 'lxml')

    card__book = soup.find_all('div', class_='art-item', limit=30)


    for i in card__book:
        id = secrets.token_hex(nbytes=16)
        title__book = i.find('a').find('img')
        if not(title__book):
            continue
        author__book = i.find_all('a')[2].text
        url__book = i.find('a')['href']
        
        
        soup__book = requests.get('https://www.litres.ru' + url__book)
        book = BeautifulSoup(soup__book.text, 'lxml')

        price__book = book.find('span', class_='simple-price')

        if not(price__book):
            continue
        
        rating__book = book.find('div', class_='bottomline-rating').text

        genres__book = book.find('div', class_='biblio_book_info').find_all('li')[1].find_all('a')

        genres = []
        
        for j in genres__book:
            tmp = j.text
            genres.append(tmp)
        
        annotation = book.find('div', class_='biblio_book_descr_publishers').text
        
        comments = book.find_all('article', class_='Comment-module__comment')

        comments__data = []
        
        for k in comments:
            comment = k.find('div', class_='Comment-module__commentTopContent').find('div', class_='Comment-module__userInfoWrap')
            comment__author = comment.find('span').text
            comment__text = k.find('div', class_='Comment-module__reviewText').text

            stars = len(k.find_all('path', class_='Stars-modules__svgPathActive'))
            
            
            comments__data.append(
                {
                    "name": comment__author,
                    "text": comment__text,
                    "rating": stars
                }
            )
            
            
        data[genre].append({
            "id": id,
            "title": title__book['alt'],
            "author": author__book,
            "rating": rating__book,
            "price": price__book.text[0:-1],
            "annotation": annotation,
            "comments": comments__data,
            "genres": genres
        })

    
    
    
for i in categories:
    pars(i[1], i[0])
    
f = open('books.js', 'w', encoding='utf-8')

f.write(data)

f.close()

