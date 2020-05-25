import Vue from "vue";
import Vuex from "vuex";

import serversSource from "../public/data/servers.json";
import communitiesSource from "@/data/communities.json";
import lobbiesSource from "@/data/lobbies.json";
import gamesSource from "@/data/games.json";
import gamesOfwSource from "@/data/games-ofw.json";
import gamesCfwSource from "@/data/games-cfw.json";

import { getGameId, getGame, getGameName } from "@/utils/games";
import { filterBy, rejectBy, truthyBy, falsyBy } from "@/utils/filters";
import { sortByString } from "@/utils/sorts";

Vue.use(Vuex);

const serverMapping = ({
  ip,
  flag,
  port = 11451,
  platform = "switch",
  type = "rust"
}) => {
  return {
    ip,
    port,
    flag,
    platform,
    type,
    highlight: ip === "switch.jayseateam.nl"
  };
};

const communityMapping = community => {
  return {
    ...community,
    highlight: community.discord === "zEMCu5n"
  };
};

const lobbyMapping = lobby => {
  lobby.title = lobby.games
    .map(_gameId => {
      let gameId = getGameId(_gameId);
      let game = getGame(gamesSource, gameId);
      return getGameName(game);
    })
    .sort()
    .join(", ");
  return lobby;
};

let gamesCfw = gamesCfwSource.sort(sortByString("title"));
gamesCfw.push({ title: "And so on...", asset: "etc.jpg" });

export default new Vuex.Store({
  state: {
    servers: serversSource
      .filter(falsyBy("hidden"))
      .filter(filterBy("type", "rust"))
      .map(serverMapping),
    communities: communitiesSource.map(communityMapping),
    games: gamesSource,
    gamesOfw: gamesOfwSource.sort(sortByString("title")),
    gamesCfw,
    lobbies: lobbiesSource.map(lobbyMapping),
    monitors: undefined
  },

  actions: {
    fetchMonitors({ commit }) {
      return fetch("https://api.uptimerobot.com/v2/getMonitors", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
          "api_key=ur925564-5f8cd1426068f606bc36cbb5&format=json&all_time_uptime_ratio=1"
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          return commit("setMonitors", data.monitors);
        });
    }
  },

  mutations: {
    setMonitors(state, data) {
      return (state.monitors = data);
    },
    loadHiddenServers(state) {
      serversSource
        .filter(truthyBy("hidden"))
        .map(serverMapping)
        .forEach(server => state.servers.push(server));
    },
    loadMoreServers(state) {
      serversSource
        .filter(rejectBy("type", "rust"))
        .map(serverMapping)
        .forEach(server => state.servers.push(server));
    }
  }
});
