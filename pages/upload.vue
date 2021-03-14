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

        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-24 max-w-6xl"
          @click="toggleForm"
          type="button"
        >
          Gửi đơn hàng
        </button>
      </div>
      <transition
        name="slide-over"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <section
          v-if="showForm"
          class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
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
              class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4"
            >
              <button
                class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                @click="toggleForm"
                type="button"
              >
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
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
                  <div
                    class="h-full border-2 border-dashed border-gray-200"
                    aria-hidden="true"
                  >
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
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-name"
                            type="text"
                            placeholder="Nguyễn Văn A"
                            v-model.trim="form.name"
                          />
                          <p class="text-red-500 text-xs italic">
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
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-phone"
                            type="text"
                            v-model.trim="form.phone"
                          />
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
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-address"
                            v-model.trim="form.address"
                          ></textarea>
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
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            v-model.trim="form.email"
                          />
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
                              (fileRecords.length * price * discount)
                                | numFormat
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-24 max-w-6xl min-w-full"
                      type="button"
                      @click="submitForm"
                    >
                      Gửi
                    </button>
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
      uploadUrl: "http://localhost:3001/upload",
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
      price: 50000
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
      console.log(this.fileRecords);
      this.form.pictures = this.fileRecords.map(file => {
        return file.upload.data.fileUrl;
      });
      console.log(this.form);
      axios
        .post("http://localhost:3001/sendmail", this.form)
        .then(response => {
          console.log("Success");
        })
        .catch(error => {
          console.error(error);
        });
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
        if (confirm("Are you sure you want to delete?")) {
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
    }
  }
};
</script>

<style scoped></style>
