<template>
  <div class="who-are-we">
    <div class="container">
      <h2 class="who-are-we__title">我们是谁</h2>
      <p class="who-are-we__description">无需编程交付一流纯三维空间设计</p>
      <div class="who-are-we__content">
        <img
          src="../../assets/images/who-are-we.jpg"
          class="main-img aos aos-toggle"
          data-aos="reset-transform"
        />
        <div
          class="who-are-we__about-us aos aos-toggle"
          data-aos="reset-transform"
        >
          <h3 class="about-us-description">
            知了云展专业为设计师和展厅从业人士打造一款将设计方案快速在线交付的平台工具，一个赋予三维项目各种交互功能的平台（会议系统、热点系统、材质编辑系统、动画系统）。一个可以在线设计展馆的设计平台（云展、画展类场景直接在线设计、墙体隔断、展台布置、无需其他三维建模软件）。
          </h3>
          <div class="tick-list">
            <div class="tick-item">
              <img src="../../assets/images/tick.svg" />
              <p>无需任何成本，只需下载客户端，即可免费体验。</p>
            </div>
            <div class="tick-item">
              <img src="../../assets/images/tick.svg" />
              <p>操作简单，易学易用，1天即可承接各种三维场景项目。</p>
            </div>
            <div class="tick-item">
              <img src="../../assets/images/tick.svg" />
              <p>可视化操作、拖拽式配置、专业效果的快速交付平台。</p>
            </div>
            <div class="tick-item">
              <img src="../../assets/images/tick.svg" />
              <p>您的客户资源、您的专业设计、快速交付平台助您成功。</p>
            </div>
          </div>
          <div class="download-buttons">
            <button-common text="下载客户端" animation />
            <button-common text="网页布展" animation />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCommon from "../ui/ButtonCommon.vue";
export default {
  components: { ButtonCommon },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/who-are-we.scss");
</style>