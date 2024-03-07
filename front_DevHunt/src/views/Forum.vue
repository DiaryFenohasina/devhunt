<template>
  <div>
    <BannerForum />
    <section class="pt-5">
      <div class="container shadow section-sm rounded min-Height">
        <div class="row">
          <table-forum />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BannerForum from "@/components/bannerForum.vue";
import TableForum from "@/components/TableForum.vue";

export default {
  name: "SampleComponent",
  components: {
    BannerForum,
    TableForum,
  },
};
</script>

<style scoped>
.rounded-5 {
  border-radius: 5px !important;
}
.message {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
}
.message-font {
  font-size: 13px;
}
.min-Height {
  min-height: 800px;
  max-height: 800px;
}
.message-panel {
  min-height: 700px;
  max-height: 700px;
}
.card-message {
  min-height: 560px;
  max-height: 560px;
  overflow-y: scroll;
}
.chat-r {
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #cacaca;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 300px;
}
.chat-l {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #ffffff;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 300px;
}
.online {
  position: relative;
  left: 15px;
  top: 20px;
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: rgb(3, 173, 26);
}
</style>