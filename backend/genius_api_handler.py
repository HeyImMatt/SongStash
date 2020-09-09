from env_vars import GENIUS_API_KEY
import requests
# from bs4 import BeautifulSoup

# soup = BeautifulSoup(html_doc, 'html.parser')

BASE_URL = 'https://api.genius.com'
headers = {
  'Authorization': f'Bearer {GENIUS_API_KEY}'
}

def search_api(q_string):
    r = requests.get(f'{BASE_URL}/search?q={q_string}', headers=headers)
    data = r.json()
    return data['response']['hits']