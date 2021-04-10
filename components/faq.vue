<template>
  <modal name="faq-modal" :adaptive="true">
    <div class="Accordion">
      <expander title="Thường bao lâu sẽ nhận được hàng?">
        <p>
          Sau khi đặt hàng, bạn sẽ nhận được điện thoại xác nhận đơn hàng từ MinaPix. Ship trong vòng 48-72h kể từ khi xác nhận đơn hàng trừ các ngày lễ, Tết và các trường hợp giao thông vận tải có vấn đề.
        </p>
      </expander>
      <expander
        title="Khung ảnh MinaPix có kích cỡ như thế nào?"
        animation="leftToRight"
      >
        <p>
          Khung ảnh MinaPix có hình vuông, kích cỡ 25cmx25cm, dày 2cm
        </p>
      </expander>
      <expander title="Sử dụng khung ảnh MinaPix như thế nào?" animation="bounceIn">
        <p>
          Mỗi khung hình MinaPix đều có sẵn băng dính phía sau, bạn chỉ việc bóc lớp băng dính đó ra để dán thẳng lên tường hoặc các bề mặt khác nhau mà không cần đóng đinh.
Bạn nên lau sạch tường tránh để bám bụi thì băng dính sẽ chắc hơn.
        </p>
      </expander>
      <expander
        title="Tôi có thể dán lên các bề mặt khác nhau không?"
        animation="leftToRight"
      >
        <p>
          Có, khung ảnh Minapix bạn có thể dán lên mọi bề mặt khác nhau như gạch ốp, tường sơn hay gỗ và các bề mặt trang trí khác nhau.
        </p>
      </expander>
      <expander
        title="Khung ảnh MinaPix có những màu gì? Trọng lượng ra sao?"
        animation="leftToRight"
      >
        <p>
          Khung ảnh của Minapix có 2 màu đen classic và trắng sữa, trọng lượng siêu nhẹ chỉ 200gram 1 khung ảnh.
        </p>
      </expander>
      <expander
        title="Tôi có thể in ảnh từ điện thoại không?"
        animation="leftToRight"
      >
        <p>
          Có, bạn có thể tải trực tiếp ảnh từ điện thoại của cá nhân, bên phía Minapix sẽ xử lý những những có nhiều điểm tối để tương đồng và sắc nét hơn.
        </p>
      </expander>
      <expander
        title="Minapix in hình như thế nào? Có bền không?"
        animation="bottomToTop"
      >
        <p>
          Minapix in bằng mực lazer nhiệt lên giấy Epson chống bay màu bảo hành màu sắc 10 năm.
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
