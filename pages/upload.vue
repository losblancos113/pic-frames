<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="overflow-hidden">
    <div class="overflow-hidden">
      <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div class="flex flex-col items-center min-h-400" aria-hidden="true">
        <vue-file-agent
          class="md:mt-36 sm:mt-10"
          :uploadUrl="uploadUrl"
          v-model="fileRecords"
          :accept="'image/*'"
          :maxSize="'10MB'"
          :maxFiles="14"
          :errorText="errors"
          :deletable="true"
          @delete="fileDeleted($event)"
          @beforedelete="onBeforeDelete($event)"
          @select="filesSelected($event)"
          ref="imgFileAgent"
        ></vue-file-agent>
      </div>
      <button
        class="w-bottom-button absolute bottom-0 md:bottom-3 md:left-1/2  z-40 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-24 max-w-6xl"
        @click="toggleForm"
        type="button"
      >
        Nhập thông tin đơn hàng
      </button>
      <transition
        name="slide-over"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <section
          v-if="showForm"
          class="absolute inset-y-0 right-0 max-w-full flex z-50"
          aria-labelledby="slide-over-heading"
        >
          <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
          <div class="relative w-screen max-w-md">
            <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->

            <div
              class="h-full w-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
            >
              <div class="px-4 sm:px-6">
                <h2
                  id="slide-over-heading"
                  class="text-lg font-medium text-gray-900"
                >
                  Thông tin đơn hàng
                </h2>
              </div>
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div class="h-full" aria-hidden="true">
                    <form class="w-full max-w-lg" ref="form">
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-name"
                          >
                            Họ Tên
                          </label>
                          <input
                            :class="{ 'border-red-500': !form.name }"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-name"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            v-model.trim="form.name"
                          />
                          <p
                            v-if="!form.name"
                            class="text-red-500 text-xs italic"
                          >
                            Không được bỏ trống
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-phone"
                          >
                            Số điện thoại
                          </label>
                          <input
                            :class="{ 'border-red-500': !form.phone }"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-phone"
                            type="text"
                            v-model.trim="form.phone"
                          />
                          <p
                            v-if="!form.phone"
                            class="text-red-500 text-xs italic"
                          >
                            Không được bỏ trống
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-address"
                          >
                            Địa chỉ
                          </label>
                          <textarea
                            :class="{ 'border-red-500': !form.address }"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-address"
                            v-model.trim="form.address"
                          ></textarea>
                          <p
                            v-if="!form.address"
                            class="text-red-500 text-xs italic"
                          >
                            Không được bỏ trống
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-email"
                          >
                            Email
                          </label>
                          <input
                            :class="{ 'border-red-500': !form.email }"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            v-model.trim="form.email"
                          />
                          <p
                            v-if="!form.email"
                            class="text-red-500 text-xs italic"
                          >
                            Không được bỏ trống
                          </p>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-note"
                          >
                            Lưu ý
                          </label>
                          <textarea
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-note"
                            v-model.trim="form.note"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                    <table
                      class="w-full table-auto border-double border-4 border-light-blue-500"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            Số lượng
                          </td>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            {{ fileRecords.length }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            Đơn giá
                          </td>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            {{ price | numFormat }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            Tạm tính
                          </td>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            {{ (fileRecords.length * price) | numFormat }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            Chiết khấu
                          </td>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            {{ discountPercent }}%
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            Thành tiền
                          </td>
                          <td
                            class="border-double border-4 border-light-blue-500"
                          >
                            {{
                              (fileRecords.length * price * (1 - discount))
                                | numFormat
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      v-if="showError"
                      class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <strong class="font-bold">Có lỗi!</strong>
                      <span class="block sm:inline"
                        >Xin vui lòng kiểm tra lại thông tin.</span
                      >
                      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg
                          class="fill-current h-6 w-6 text-red-500"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <title>Close</title>
                          <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="grid grid-cols-2 gap-1">
                      <div class="col-5">
                        <button
                          class="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mt-24 max-w-6xl min-w-full"
                          type="button"
                          @click="toggleForm"
                          :disabled="loading"
                        >
                          <svg
                            v-if="loading"
                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              class="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path></svg
                          >Huỷ
                        </button>
                      </div>
                      <div class="col-5">
                        <button
                          v-if="!orderPlaced"
                          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-24 max-w-6xl min-w-full"
                          type="button"
                          @click="submitForm"
                          :disabled="loading"
                        >
                          <svg
                            v-if="loading"
                            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              class="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path></svg
                          >Gửi
                        </button>
                        <button
                          v-if="orderPlaced"
                          class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:green-blue-500 rounded mt-24 max-w-6xl min-w-full"
                          type="button"
                        >
                          Đặt hàng thành công
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "upload",
  data() {
    return {
      showForm: false,
      uploadUrl: `${this.$config.baseAPIURL}/upload`,
      fileRecords: [],
      fileRecordsForUpload: [],
      filesUploaded: [],
      errors: {
        type: "Định dạng file không đúng",
        size: "Giới hạn file size 10MB"
      },
      form: {
        name: "",
        phone: "",
        address: "",
        email: "",
        note: "",
        pictures: []
      },
      price: 50000,
      showError: false,
      loading: false,
      orderPlaced: false
    };
  },
  computed: {
    discount: function() {
      if (this.fileRecords && this.fileRecords.length >= 5) {
        return 0.05;
      } else {
        return 1;
      }
    },
    discountPercent() {
      if (this.discount) {
        return this.discount < 1 ? this.discount * 100 : 0;
      }
      return 0;
    }
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        this.showError = true;
      } else {
        this.showError = false;
        this.loading = true;
        this.form.pictures = this.fileRecords.map(file => {
          return file.upload.data.fileUrl;
        });
        axios
          .post(`${this.$config.baseAPIURL}/sendmail`, this.form)
          .then(response => {
            console.log("Success");
            this.loading = false;
            this.orderPlaced = true;
          })
          .catch(error => {
            console.error(error);
            this.loading = false;
          });
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    fileDeleted(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      }
    },
    onBeforeDelete(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm("Bạn có chắc muốn xoá?")) {
          // this.$refs.imgFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
        }
      }
      // this.$refs.imgFileAgent.deleteFileRecord(fileRecord);
    },
    filesSelected: function(fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        fileRecord => !fileRecord.error
      );
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
        validFileRecords
      );
    },
    uploadImages() {
      //TODO upload images
      this.$refs.imgFileAgent.upload(this.uploadUrl, this.fileRecordsForUpload);
      // this.filesUploaded = this.fileRecords
      //   .filter(x => x.upload.error)
      //   .map(file => {
      //     return file.upload.data;
      //   });
      this.fileRecords = [];
    },
    validateForm() {
      if (this.form.name) {
        return false;
      }
      if (this.form.phone) return false;
      if (this.form.address) return false;
      if (this.form.email) return false;
      return true;
    }
  }
};
</script>

<style scoped>
.w-bottom-button {
  width: 100%;
  margin-left: 0%;
}

@media only screen and (min-width: 768px) {
  .w-bottom-button {
    width: 25%;
    margin-left: -12.5%;
  }
}
</style>
