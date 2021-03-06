import os
import requests

API_BASE_URL = 'http://api.musixmatch.com/ws/1.1/'
MUSIX_MATCH_API_KEY = os.getenv('MUSIX_MATCH_API_KEY')

def search_api(q_string):
    """Searches the MusixMatch API for songs and returns payload"""
    try:
        r = requests.get(f'{API_BASE_URL}/track.search?q={q_string}&f_has_lyrics=1&page_size=100&s_artist_rating=desc&apikey={MUSIX_MATCH_API_KEY}')
        
        if r.status_code == 200:
            data = r.json()
            results = [{
                "mmId": s["track"]["track_id"],
                "title": s["track"]["track_name"],
                "artist": s["track"]["artist_name"],
                "lyricsLocation": s["track"]["track_share_url"].split('?', 1)[0],
            } for s in data['message']['body']['track_list']]

            return results
        
        if r.status_code == 404:
            return {"message":"No results found"}

        return {"message":"External API Error. Try again later."}

    except:
        return {"message":"External API Error. Try again later."}

def get_song_lyrics(track_id):
    """Retrieves lyrics from MusixMatch API"""
    try:
        r = requests.get(f'{API_BASE_URL}/track.lyrics.get?track_id={track_id}&apikey={MUSIX_MATCH_API_KEY}')

        if r.status_code == 200:
            data = r.json()
            return data['message']['body']['lyrics']['lyrics_body'].split('...', 1)[0]

        if r.status_code == 404:
            return {"message":"No results found"}

        return {"message":"External API Error. Try again later."}

    except:
        return {"message":"External API Error. Try again later."}