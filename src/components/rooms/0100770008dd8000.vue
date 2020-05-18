<template>
  <span>
    <img
      :src="
        require(`@/assets/felyne-${Math.floor(
          Math.random() * Math.floor(2)
        )}.png`)
      "
      class="icon "
      alt=""
    />

    <strong> {{ this.room.hostPlayerName }}</strong>
  </span>
</template>

<script>
export default {
  props: {
    room: Object,
    advertiseData: Object
  }
};
</script>
