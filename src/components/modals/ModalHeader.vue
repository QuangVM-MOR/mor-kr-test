<template>
  <Modal @close="$emit('close')" :isShow="isShow">
    <FormModal :type="formType" :isShow="isShow"/>
  </Modal>
</template>
<script>
import Modal from "./Modal.vue";
import FormModal from "../forms/FormModal.vue";
export default {
  components: {
    Modal,
    FormModal,
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    formType: {
      type: String,
      default: "login",
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/modals/modal-header.scss");
</style>
