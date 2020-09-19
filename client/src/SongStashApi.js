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

  static async deleteSongFromStash(songId, stashId) {
    try {
      await axios.delete(`${API_URL}/stashes/songs/${stashId}/${songId}`);
      return {songId, stashId};
    } catch {
        return null;
    }
  }

  static async deleteStash(id) {
    try {
      await axios.delete(`${API_URL}/stashes/${id}`);
      return true;
    } catch {
        return null;
    }
  }

  static async editStash(id, name) {
    try {
      await axios.patch(`${API_URL}/stashes/${id}`, {name});
      return true;
    } catch {
        return null;
    }
  }

  static async editSong(id, song) {
    const {title, artist, lyrics} = song;
    try {
      await axios.patch(`${API_URL}/songs/${id}`, {title, artist, lyrics});
      return true;
    } catch {
        return null;
    }
  }

}
