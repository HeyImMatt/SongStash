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
