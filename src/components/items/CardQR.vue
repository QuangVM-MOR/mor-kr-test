<template>
  <div class="card-qr">
    <img class="qr" src="../../assets/images/guest.jpg" alt="qr" />
    <div class="vt-box">
      <img class="vt" src="../../assets/images/vt.svg" alt="vt" />
      <div class="name">长按识别二维码</div>
      <div class="description">添加客服微信</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-qr {
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  & img.qr {
    width: 1.8rem;
  }
  & img.vt {
    width: 0.81rem;
  }
  .name {
    color: #999999;
    font-size: 0.22rem;
    margin: 0.16rem 0 0.04rem;
    user-select: none;
  }
  .description {
    user-select: none;
    color: #0f7bff;
    font-size: 0.22rem;
  }
}
</style>