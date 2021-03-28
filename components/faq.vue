<template>
  <modal name="faq-modal" :adaptive="true">
    <div class="Accordion">
      <expander title="Giá cho mỗi khung hình là bao nhiêu?">
        <p>
          Mỗi khung hình có giá 100.000. Đối với các đơn hàng nhỏ hơn 400.000,
          Minapix sẽ thu thêm phí ship 40.000 cho mỗi đơn hàng.
        </p>
      </expander>
      <expander
        title="Kích thước mỗi khung hình là bao nhiêu?"
        animation="leftToRight"
      >
        <p>
          Kích thước mỗi khung hình là 20 x 20 cm và 2 cm
        </p>
      </expander>
      <expander title="Thời gian giao hàng là bao lâu?" animation="bounceIn">
        <p>
          Thời gian trung bình giao hàng đối với nội thành Hà Nội và TP HCM là
          24h, còn đối với các tỉnh sẽ là khoảng 3 ngày làm việc (không tính
          ngày lễ và cuối tuần).
        </p>
      </expander>
      <expander
        title="Như vậy có ảnh hưởng tới tường không?"
        animation="bottomToTop"
      >
        <p>
          Không,đa số sẽ không ảnh hưởng gì tới tường.
        </p>
      </expander>
    </div>
  </modal>
</template>

<script>
export default {
  name: "FaqComponent"
};
</script>

<style scoped>
.Accordion {
  background: #fff;
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
</style>
