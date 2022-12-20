<template>
  <div class="sites-page">
    <p class="sites-page__title">Нужные сайты</p>
    <div class="sites-page_inner">
      <div class="sites-page_inner_block" v-for="(item, index) in data" :key="index">
        <div class="sites-page_inner_block__title">{{ item.title }}</div>
        <div class="sites-page_inner_block_hrefs">
          <Item v-for="(href, index) in item.hrefs" :key="index" :href="href.href" :description="href.description"></Item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    title: "Психология",
    hrefs: [
      {
        href: "http://danpsih2009.narod.ru/",
        description: "",
      },
      {
        href: "http://psychology-08.narod.ru",
        description: "",
      },
      {
        href: "http://danelyan2008.narod.ru",
        description: "",
      },
      {
        href: "http://psihdan.narod.ru",
        description: "",
      },
      {
        href: "http://psixology2007.narod.ru",
        description: "",
      },
    ],
  },
  {
    title: "Юристы",
    hrefs: [
      {
        href: "http://itvur.ucoz.ru/",
        description: "",
      },
      {
        href: "http://danelan.narod.ru",
        description: "",
      },
      {
        href: "http://jure-mesi.narod.ru",
        description: "",
      },
      {
        href: "http://dan-ur.narod.ru",
        description: "",
      },
      {
        href: "http://itvjure.narod.ru",
        description: "Информационные технологии в Юриспруденции (новое)",
      },
      {
        href: "http://itvjure.narod.ru/",
        description: "",
      },
    ],
  },
  {
    title: "ЭИС",
    hrefs: [
      {
        href: "http://espio777.narod.ru",
        description: "",
      },
      {
        href: "http://eispo.narod.ru",
        description: "Лабараторные работы",
      },
      {
        href: "http://ofeis.jino-net.ru",
        description: "Пустая страница",
      },
      {
        href: "http://ofeis.narod.ru",
        description: "Госты",
      },
      {
        href: "http://ofies.narod.ru",
        description: "Схемы",
      },
      {
        href: "http://durann.narod.ru",
        description: "Пустая страница",
      },
      {
        href: "http://ofeis2007.narod.ru",
        description: "",
      },
      {
        href: "http://poeic.narod.ru",
        description: "Схемы 2007 и исходники 2005",
      },
      {
        href: "http://poeis2008.narod.ru",
        description: "",
      },
      {
        href: "http://sdkms-mesi.narod.ru",
        description: "",
      },
      {
        href: "http://dke.jino-net.ru",
        description: "",
      },
      {
        href: "http://poeis10.narod.ru",
        description: "ЛР",
      },
      {
        href: "http://poeis.jino.ru",
        description: "",
      },
      {
        href: "http://danelyankp.narod.ru",
        description: "",
      },
      {
        href: "http://eis-11.narod2.ru",
        description: "",
      },
    ],
  },
  {
    title: "ТСиСА",
    hrefs: [
      {
        href: "http://tsandsa.narod2.ru",
        description: "",
      },
      {
        href: "http://sysmesi.narod.ru",
        description: "",
      },
      {
        href: "http://teorsis.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa.narod.ru",
        description: "",
      },
      {
        href: "http://tsisamesi.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa2008.narod.ru",
        description: "",
      },
      {
        href: "http://danelyantsisa.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa-ips.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa-ips1.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa-ips2.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa.ucoz.ru",
        description: "Новое",
      },
      {
        href: "http://tsisa-2009.narod.ru",
        description: "Новое",
      },
      {
        href: "http://TijaD2010.narod.ru",
        description: "",
      },
      {
        href: "http://tsandsa.narod2.ru",
        description: "",
      },
      {
        href: "http://dek-301.narod.ru",
        description: "",
      },
      {
        href: "http://tsisa.weebly.com",
        description: "",
      },
      {
        href: "http://tsisa2011.narod.ru",
        description: "",
      },
      {
        href: "http://dmitryewseew.narod2.ru",
        description: "",
      },
    ],
  },
  {
    title: "Налоги",
    hrefs: [
      {
        href: "http://danelyan-lekz.narod.ru",
        description: "",
      },
      {
        href: "http://danelyan-nis.narod.ru",
        description: "",
      },
      {
        href: "http://danelyan-nadm.narod.ru",
        description: "",
      },
      {
        href: "http://danelyan-info.narod.ru",
        description: "",
      },
      {
        href: "http://paninchg.narod.ru",
        description: "",
      },
      {
        href: "http://danelyan-audit.narod.ru",
        description: "",
      },
      {
        href: "http://nis-mesi.narod.ru",
        description: "Новое",
      },
      {
        href: "http://alllekz.narod.ru",
        description: "",
      },
    ],
  },
  {
    title: "Дополнительное",
    hrefs: [
      {
        href: "http://wolframalpha.com",
        description: "Вопросно-ответная поисковая система",
      },
      {
        href: "http://learn-danelyan.narod.ru",
        description: "",
      },
    ],
  },
  {
    title: "Общий сайт",
    hrefs: [
      {
        href: "http://tijad2010.narod.ru",
        description: "",
      },
    ],
  },
  {
    title: "Профком",
    hrefs: [
      {
        href: "http://profmesi2011.narod2.ru",
        description: "",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.sites-page {
  display: flex;
  flex-direction: column;
  padding: 10px;

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
