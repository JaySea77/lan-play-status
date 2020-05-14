<template>
  <div class="games">
    <h1>Games with LAN Mode</h1>
    <h2>(OFW and CFW compatible)</h2>
    <div class="cards">
      <Card
        v-for="game in ofw"
        :title="game.title"
        :message="game.message"
        :lang="game.lang"
        :ds="game.ds"
        :key="game.title"
      />
    </div>
    <h1>Games with Wireless Mode</h1>
    <h2>(CFW only: it needs ldn_mitm kip)</h2>
    <div class="cards">
      <Card
        v-for="game in cfw"
        :title="game.title"
        :message="game.message"
        :lang="game.lang"
        :ds="game.ds"
        :key="game.title"
      />
      <Card title="And so on..." asset="etc.jpg" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  data: function() {
    return {
      ofw: [
        {
          title: "ARMS",
          message: "Press [L] + [R] + [Left Analog] on the main menu screen."
        },
        {
          title: "Bayonetta 2",
          message:
            "Enter tag climax and highlight local play. Press [Left Analog (hold down)] and press [L] + [R]."
        },
        {
          title: "Mario Kart 8 Deluxe",
          message: "Press [L] + [R] + [Left Analog] on the main menu screen."
        },
        {
          title: "Mario Tennis Aces",
          message:
            "Select Free Play from the Main Menu. Press [Left Analog (hold down)] and press [L] + [R]."
        },
        { title: "Pokémon Shield", lang: "enGB" },
        { title: "Pokémon Sword", lang: "enGB" },
        {
          title: "Pokkén Tournament DX",
          message:
            "From the main screen select a game. Press [X] + [Dpad-Down] and press [L] + [R]."
        },
        { title: "SAINTS ROW: THE THIRD - THE FULL PACKAGE" },
        {
          title: "Splatoon 2",
          message:
            "Press [L] + [R] + [Left Analog] at the local play option. Hold down until the lan mode is activated."
        },
        { title: "Titan Quest" }
      ],
      cfw: [
        { title: "Ace of Seafood" },
        {
          title: "Animal Crossing: New Horizons",
          message: "Switch MTU: 1500 — LanPlay PMTU: 500"
        },
        { title: "ARK: Survival Evolved" },
        { title: "Art of Balance" },
        { title: "A.O.T 2" },
        { title: "Battlezone Gold Edition" },
        { title: "Bloody Zombies" },
        { title: "Brawlout" },
        { title: "Broforce" },
        { title: "Capcom Beat 'Em Up Bundle" },
        { title: "Chiki-Chiki Boxy Pro Wrestling" },
        { title: "Chiki-Chiki Boxy Racers" },
        { title: "Chou Tousouchuu and Chou Sentouchuu Double Pack" },
        { title: "Civilization VI" },
        { title: "DAEMON X MACHINA" },
        { title: "Diablo III: Eternal Collection" },
        { title: "Disc Jam" },
        { title: "DRAGON BALL FighterZ" },
        { title: "DRAGON BALL XENOVERSE 2" },
        { title: "Dragon Marked For Death" },
        { title: "Dragon Quest Builder 2" },
        { title: "Duck Game" },
        { title: "FAST RMX", ds: true },
        { title: "Fate/Extella Link" },
        { title: "EA SPORTS FIFA 18" },
        { title: "EA SPORTS FIFA 19" },
        { title: "Flip Over Frog" },
        { title: "Flip Wars" },
        { title: "Football Heroes Turbo" },
        { title: "Freecell Battle King" },
        { title: "Full Metal Furies" },
        { title: "Gesshizu: Gajigaji Nakama wo Sodateyou" },
        { title: "GIRLS und PANZER Dream Tank Match DX" },
        { title: "GO Vacations" },
        { title: "God Eater 3" },
        { title: "Goonya Fighter" },
        { title: "Hammerwatch" },
        { title: "Human Fall Flat" },
        { title: "Just Shapes & Beats" },
        { title: "Kamen Rider Climax Scramble" },
        { title: "Korg Gadget For Nintendo Switch" },
        { title: "Luigi's Mansion 3" },
        { title: "Mantis Burn Racing" },
        { title: "Marvel Ultimate Alliance 3: The Black Order" },
        { title: "Mercenary Kings" },
        { title: "Minecraft" },
        { title: "Minna de Daifugo" },
        { title: "Monster Energy Supercross - The Official Videogame 2" },
        { title: "Monster Hunter Generations Ultimate" },
        { title: "Morphies Law: Remorphed" },
        { title: "Moto GP 18" },
        { title: "Moto GP 19" },
        { title: "Ms. Splosion Man" },
        { title: "Namco Museum" },
        { title: "NBA 2K18" },
        { title: "NBA 2K19" },
        { title: "Nine Parchments" },
        { title: "Overcooked 2" },
        { title: "Party Arcade" },
        { title: "Payday 2" },
        { title: "Pikachin-Kit: Game de Pirameki Daisakusen" },
        { title: "PixARK" },
        { title: "Poisoft Thud Card" },
        { title: "Portal Knights" },
        { title: "Pro Yakyuu Famista Evolution" },
        { title: "Puyo Puyo Champions" },
        { title: "Puyo Puyo Tetris" },
        { title: "Ragtag Adventurers" },
        { title: "Rayman Legends: Definitive Edition" },
        { title: "Red Faction Guerrilla Re-Mars-tered" },
        { title: "Resident Evil Revelations" },
        { title: "Resident Evil Revelations 2" },
        { title: "Rocket League", ds: true },
        { title: "Snack World", lang: "enGB" },
        { title: "Sniper Elite V2 Remastered" },
        { title: "SNK Heroines Tag Team Frenzy" },
        { title: "Solitaire Battle Royale" },
        { title: "Spintires: Mudrunner" },
        { title: "Stardew Valley", ds: true },
        { title: "Super Beat Sports" },
        { title: "Super Bomberman R" },
        { title: "Super Dragon Ball Heroes World Mission" },
        { title: "Super Mario Maker 2" },
        { title: "Super Mario Party" },
        { title: "Super Smash Bros. Ultimate" },
        { title: "Sword Art Online: Hollow Realization" },
        { title: "Taiko no Tatsujin Drum 'n' Fun!" },
        { title: "Taiko No Tatsujin Nintendo Switch Ver." },
        { title: "Team Sonic Racing" },
        { title: "Tennis" },
        { title: "Terraria" },
        { title: "The Mahjong" },
        { title: "Torchlight 2" },
        { title: "Trine 2: Complete Story" },
        { title: "Trine Enchanted Edition" },
        { title: "Trivial Pursuit Live!" },
        { title: "Ultra Street Fighter 2: The Final Challengers" },
        { title: "UNO", ds: true },
        { title: "Windjammers" },
        { title: "Word Search" },
        { title: "Worms W.M.D.", ds: true },
        { title: "Xenon Racer" },
        { title: "Yu-Gi-Oh! Legacy of the Duelist: Link Evolution" }
      ]
    };
  }
};
</script>

<style lang="scss">
.cards {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  max-width: 90%;
  margin: auto;
}
</style>
