import axios from 'axios';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export default class SongStashApi {
  static async addSongToStash(songId, stashId) {
    try {
      await axios.post(`${API_URL}/stashes/songs`, {songId, stashId});
      return {songId, stashId};
    } catch {
        return null;
    }
  }
}