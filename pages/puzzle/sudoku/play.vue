<template>
  <main class="site-layout sudoku flex justify-center flex-col">
    <div style="margin-top: -10px">
      <iframe
        :src="`http://f5game-sudoku.s3-website.ap-northeast-2.amazonaws.com/#/game/sudoku/${type}`"
        class="sudoku-iframe"
      />
    </div>

    <Share
      title="스도쿠 - F5 Games"
      imageUrl="https://f5game.s3.ap-northeast-2.amazonaws.com/sudoku.webp"
      url="https://f5game.co.kr/puzzle/sudoku"
    />
  </main>
</template>
<script setup>
const route = useRoute();
const type = route.query.type;
</script>
