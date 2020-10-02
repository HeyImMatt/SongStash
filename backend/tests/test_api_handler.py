import os
from unittest import TestCase
from unittest.mock import patch
from external_api_handler import search_api, get_song_lyrics

class ApiHandler(TestCase):
    """Api Handler Tests"""

    def setUp(self):
        self.search_results_data = {
            "message": {
              "header": {
                "status_code": 200,
                "execute_time": 0.17552900314331,
                "available": 561
              },
              "body": {
                "track_list": [{
                    "track": {
                      "track_id": 5279738,
                      "track_name": "Right In the Head",
                      "track_name_translation_list": [
                        
                      ],
                      "track_rating": 16,
                      "commontrack_id": 1612903,
                      "instrumental": 0,
                      "explicit": 0,
                      "has_lyrics": 1,
                      "has_subtitles": 1,
                      "has_richsync": 0,
                      "num_favourite": 0,
                      "album_id": 10659879,
                      "album_name": "Post-War",
                      "artist_id": 13933,
                      "artist_name": "M.Ward",
                      "track_share_url": "https://www.musixmatch.com/lyrics/M-Ward/Right-in-the-Head?utm_source=application&utm_campaign=api&utm_medium=NA%3A1409620630019",
                      "track_edit_url": "https://www.musixmatch.com/lyrics/M-Ward/Right-in-the-Head/edit?utm_source=application&utm_campaign=api&utm_medium=NA%3A1409620630019",
                      "restricted": 0,
                      "updated_time": "2011-06-10T18:47:40Z",
                      "primary_genres": {
                        "music_genre_list": [
                          {
                            "music_genre": {
                              "music_genre_id": 20,
                              "music_genre_parent_id": 34,
                              "music_genre_name": "Alternative",
                              "music_genre_name_extended": "Alternative",
                              "music_genre_vanity": "Alternative"
                            }
                          },
                          {
                            "music_genre": {
                              "music_genre_id": 14,
                              "music_genre_parent_id": 34,
                              "music_genre_name": "Pop",
                              "music_genre_name_extended": "Pop",
                              "music_genre_vanity": "Pop"
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        
        self.lyrics_data = {
            "message": {
              "header": {
                "status_code": 200,
                "execute_time": 0.016567945480347
              },
              "body": {
                "lyrics": {
                  "lyrics_id": 1636545,
                  "explicit": 0,
                  "lyrics_body": "I hope my little brother puts a call in today\nI hope he don't forget where he came from\nI hope he never has to deal with wronging someone\n\n'Cause I lived with many ghosts when I was younger\nAnd I will live with many ghosts until I go\n\nI hope he's right in the head\nI hope he's right in the head\nI hope he's right in the head\nEven if he has to wrong someone\n\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409620630019)",
                  "script_tracking_url": "https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_1636545/su_0/rs_0/tr_3vUCADLtBgTzoHVQMAgidQmNogmFVHyR8TyieHbt6A5AZcHXTTxl1_Q4Dn_-Pb7NARiatF6F7e9rkrOys5FTygAF-4GpykiLRr5_sBt3SpNlqVv9FetBie_0YUpcDlRvoCDpW9UZpfaMsHE0xiLq0dqKEwT4t93rT2awYng5cYrSLEeZzRPvcWrRpsyluU-eXInFmQ7EDcUeF5VSkhzHHs84dX8yPfpyR-jUrX8mLEe5NdI0vzIwp7k9RrfatZ-bBTsSpF9ibqj0uIzcq8jwRMBI9pWSgagmqfUNJwJO6854vkT0iDv_XuJ9xRsUIW9jm6eYPkEgb2St0JHfrQR5Laimmy5yUB_K4uyPBQYcpyfrFaMDJdsyD7-0IehQEwwYziYIrHhYfW1pxpwtKwGbdn1ev3ocrKMPlJonBsyy7ElGUDc6SvARX5yRckNrlmtkFHDymRM/",
                  "pixel_tracking_url": "https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_1636545/su_0/rs_0/tr_3vUCACEinPF5cSzMqVeB6GBicOjXfW9hYCp4YtII2SzIpaBt-57L0EUX4d-jIvZ_IO3EgW-i5qDwzCwNcx-n5gXQlCtsCerSPW5tQRqw6R-TGAMgreulWTLouz8hwITyVHPk6uEEaCBAReyJ6L4HKfEHHWMrTNRJ-BouTNqehbVmJ1yoVhC-xc9yLpTyiGDoWLG0-QfKB22lK_KIicokaJGJ6lnKjtxHFzzNVzdRw6GXH6lJaaMfZFpZqZjXZeoWDWN3BDBB1oV_b1mH36_nXCXPOK039gQGJMQCbLGH0Nz0YKUbHOXAk6V_WNZ9_9V2-pePFL3Z0U7DSJEM3kVanRuNIsVCoTzEV99sju1bZ56d2m7dwBZFGl79oZIv3fDovoQdm1pPpaWxh2yzNQBqcxiw_LiOnJiFQm6dywdRxd790kBpwDkz5HjsWxiJ-Q0dASNxaiY/",
                  "lyrics_copyright": "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.",
                  "updated_time": "2017-07-25T13:01:33Z"
                }
              }
            }
        }

    def tearDown(self):
        res = super().tearDown()

    @patch('external_api_handler.requests.get')
    def test_search_api_success(self, mock_get):
          """It should return results for success case"""
          mock_get.return_value.status_code = 200
          mock_get.return_value.json.return_value = self.search_results_data

          resp = search_api('mward')

          self.assertIn("M.Ward", str(resp))
    
    @patch('external_api_handler.requests.get')
    def test_search_api_no_results(self, mock_get):
          """It should return no results message for 404"""
          mock_get.return_value.status_code = 404

          resp = search_api('mward')

          self.assertIn("No results found", str(resp))

    @patch('external_api_handler.requests.get')
    def test_search_api_other_error(self, mock_get):
          """It should return api error message for 400"""
          mock_get.return_value.status_code = 400

          resp = search_api('mward')

          self.assertIn("External API Error", str(resp))

    @patch('external_api_handler.requests.get')
    def test_get_song_lyrics_success(self, mock_get):
          """It should return results for success case"""
          mock_get.return_value.status_code = 200
          mock_get.return_value.json.return_value = self.lyrics_data

          resp = get_song_lyrics(5279738)

          self.assertIn("I hope he's right in the head", str(resp))
    
    @patch('external_api_handler.requests.get')
    def test_get_song_lyrics_no_results(self, mock_get):
          """It should return no results message for 404"""
          mock_get.return_value.status_code = 404

          resp = get_song_lyrics(5279738)

          self.assertIn("No results found", str(resp))

    @patch('external_api_handler.requests.get')
    def test_get_song_lyrics_other_error(self, mock_get):
          """It should return api error message for 400"""
          mock_get.return_value.status_code = 400

          resp = get_song_lyrics(5279738)

          self.assertIn("External API Error", str(resp))
