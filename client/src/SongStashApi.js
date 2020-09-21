import axios from 'axios';

const API_URL = process.env.SONG_STASH_API_URL || 'http://127.0.0.1:5000/api';

export default class SongStashApi {
  // Stash Actions

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
  //Song Actions

  static async fetchSongs() {
    try {
      const resp = await axios.get(`${API_URL}/songs`);
      return resp.data.songs;
    } catch {
        return null;
    }
  }

  static async postSong(song, userId) {
    try {
      const resp = await axios.post(`${API_URL}/songs`, {...song, user_id: userId});
      return resp.data;
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

  // Search Actions

  static async searchSongs(query) {
    try {
      const resp = await axios.get(`${API_URL}/search/${encodeURI(query)}`);
      return resp.data
    } catch {
      return null;
    }
  }

}
