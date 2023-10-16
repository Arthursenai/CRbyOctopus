import requests
import json

URL_CARDS = 'https://api.clashroyale.com/v1/cards'
URL_LOCATIONS = 'https://api.clashroyale.com/v1/locations'

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyZTg2NWViLTgwMmUtNDY3OS04OTUyLTg2OTMxZTZlZWZlNyIsImlhdCI6MTY5NzQ1OTc4NSwic3ViIjoiZGV2ZWxvcGVyLzM4NmU2MWY4LWYyMGMtNTViNS00ODc4LTBjNDlhZWI4ZmI1OCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.4lBXlOAAYsogJnGNUgADQbWwN650ucMh9GmPjIxUO-IUOzslq6HrJsV5TsoeqY4kdidvGX6umiEiZUBD530EhQ'
}

def get_all_cards():
    response = requests.get(url=URL_CARDS, headers=headers)
    if(response.status_code == 200):
        items_obj = json.loads(response.text)
        items_list = items_obj.get('items')

        for item in items_list:
            print('Id:' + str(item['id']))
            print('Name:' + item['name'])
            print('Max Level:' + str(item['maxLevel']))
            print('Icon Url:' + item['iconUrls']['medium'])
            print('------------------------------------')

def get_all_locations():
    response = requests.get(url=URL_LOCATIONS, headers=headers)
    if(response.status_code == 200):
        items_obj = json.loads(response.text)
        items_list = items_obj.get('items')

        for item in items_list:
            print('Id:' + str(item['id']))
            print('Name:' + item['name'])
            print('Is Country:' + str(item['isCountry']))
            print('------------------------------------')


get_all_cards()