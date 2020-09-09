from env_vars import MUSIX_MATCH_API_KEY
import requests

API_BASE_URL = 'http://api.musixmatch.com/ws/1.1/'

def search_api(q_string):
    """Searches the MusixMatch API for songs and returns payload"""
    r = requests.get(f'{API_BASE_URL}/track.search?q={q_string}&apikey={MUSIX_MATCH_API_KEY}')
    data = r.json()
    return data['message']['body']['track_list']

def get_song_lyrics(track_id):
    """Retrieves lyrics from MusixMatch API"""
    r = requests.get(f'{API_BASE_URL}/track.lyrics.get?track_id={track_id}&apikey={MUSIX_MATCH_API_KEY}')
    data = r.json()
    return data['message']['body']['lyrics']
