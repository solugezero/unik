<template>
  <div class="files-page">
    <p class="files-page__title">Нужные файлы</p>
    <div class="files-page_inner">
      <div class="files-page_inner_block" v-for="(item, index) in data" :key="index">
        <div class="files-page_inner_block__title" v-if="item.title">{{ item.title }}</div>
        <div class="files-page_inner_block_hrefs">
          <Item :file="true" v-for="(href, index) in item.hrefs" :key="index" :filename="href.filename" :href="href.href" :description="href.description"></Item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    title: "Литература",
    hrefs: [
      { href: "https://disk.yandex.ru/d/7XaXF4mgJ2Qr3A", description: "Дополнительные материалы по темам" },
      { href: "https://disk.yandex.ru/d/DTKkCVznTTZDJA", description: "Миракс" },
    ],
  },
  {
    title: "Примеры выполнения ЛР",
    hrefs: [
      { href: "https://disk.yandex.ru/d/Myu5Hlm1rgYQjw", description: "", filename: "Рефераты.7z" },
      { href: "https://disk.yandex.ru/i/srnAG7_-E_aAYA", description: "", filename: "lab1.rabota_v_internet пример.doc" },
      { href: "https://disk.yandex.ru/d/Ctl8KJlQUMBFog", description: "", filename: "Эталоны лб (2).7z" },
    ],
  },
  {
    title: "Доклад",
    hrefs: [{ href: "https://disk.yandex.ru/d/96tp0ggArlPdqA", description: "", filename: "Примеры оформления.7z" }],
  },
  {
    title: "Дополнительные материалы по курсу",
    hrefs: [
      { href: "https://disk.yandex.ru/d/a5Tu5FVgXjbpGQ", description: "", filename: "Mirax Test.7z" },
      { href: "https://disk.yandex.ru/d/ripIn_CjtKdGDw", description: "", filename: "TSISA_testing_program.7z" },
      { href: "https://disk.yandex.ru/d/qZCLpdrH2VBt3g", description: "", filename: "ГОСТ алг 17.7z" },
      { href: "https://disk.yandex.ru/d/aRcCBbyEacWdXg", description: "", filename: "Гвоздева Иванов Тест.7z" },
      { href: "https://disk.yandex.ru/d/S-7uAUCwHDOnjA", description: "", filename: "ДКЕ-301_Медведева_Никитина_курсовая.7z" },
      { href: "https://disk.yandex.ru/i/-9-YpRFHa1z7Rw", description: "", filename: "Машина_Тьюринга_Лосинский_Олейник_Гигашвили.docx" },
      { href: "https://disk.yandex.ru/i/etKJnh-1J-t9rA", description: "", filename: "Реферат ЗЛП (2).doc" },
      { href: "https://disk.yandex.ru/d/V0Shz_xE7ugqjA", description: "", filename: "СДКМС.7z" },
      { href: "https://disk.yandex.ru/d/qe_xLgt-mDIxHg", description: "", filename: "Тесты.7z" },
      { href: "https://disk.yandex.ru/d/aYetPRJNoQqRcw", description: "", filename: "Тьюринг, теория принятия решений.7z" },
    ],
  },
  {
    title: "Коллоквиум ТСиСА",
    hrefs: [
      { href: "https://disk.yandex.ru/i/xjuStYdmdpVIiw", description: "", filename: "Вопросы к коллоквиумам (4).docx" },
      { href: "https://disk.yandex.ru/d/RVKHfeixatiSDQ", description: "", filename: "Примеры оформления (5).7z" },
      { href: "https://disk.yandex.ru/i/dJ3qOx0HL2LtaQ", description: "", filename: "Эталон по оформлению ответов к вопросам колллквиума.docx" },
    ],
  },
  {
    title: "Презентации",
    hrefs: [{ href: "https://disk.yandex.ru/d/zfI9Sx0hdki54Q", description: "", filename: "Эталоны презентаций.7z" }],
  },
  {
    title: "СДКМС EXCEL",
    hrefs: [
      { href: "https://disk.yandex.ru/d/tTQpqQ4IdsEE8g", description: "", filename: "Костина Excel.7z" },
      { href: "https://disk.yandex.ru/i/-IAnUhWWVpHDyg", description: "", filename: "ПОКЭ.XLS" },
      { href: "https://disk.yandex.ru/i/B1BUqlPjsZQ8mg", description: "", filename: "отчет ПОКЭ.doc" },
    ],
  },
];

const asd = async () => {
  let aaa = await fetch("https://disk.yandex.ru/d/Myu5Hlm1rgYQjw", {
    method: "GET",
  });
  console.log(aaa);
};

asd();
</script>

<style lang="scss" scoped>
.files-page {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  &_inner {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 30px;

    &_block {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
      gap: 15px;

      &__title {
        font-size: 18px;
        font-weight: 500;
      }

      &_hrefs {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        gap: 10px;
      }
    }
  }
}
</style>
