<template>
  <div class="content">
    <nav-Bar title="影视资讯"></nav-Bar>
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul class="mui-table-view">
          <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
            <router-link :to="{name:'news.detail',query:{id:item.id}}">
              <img class="mui-media-object mui-pull-left" :src="item.images.small">
              <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'><span v-for="sub in item.genres">{{sub}} &nbsp;</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        newsList: []
      }
    },
    created(){
      /*发起请求
      this.$ajax.get('https://api.douban.com/v2/movie/in_theaters')
        .then(res=>{
          this.newsList = res;
        })
        .catch(err=>{
          console.log(err);
        })*/
      this.newsList = [
        {
          rating: {
            max: 10,
            average: 8.4,
            stars: "45",
            min: 0
          },
          genres: [
            "动作",
            "科幻",
            "奇幻"
          ],
          title: "复仇者联盟3：无限战争",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1016681/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg"
              },
              name: "小罗伯特·唐尼",
              id: "1016681"
            },
            {
              alt: "https://movie.douban.com/celebrity/1021959/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg"
              },
              name: "克里斯·海姆斯沃斯",
              id: "1021959"
            },
            {
              alt: "https://movie.douban.com/celebrity/1017885/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg"
              },
              name: "克里斯·埃文斯",
              id: "1017885"
            }
          ],
          collect_count: 289731,
          original_title: "Avengers: Infinity War",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1321812/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg"
              },
              name: "安东尼·罗素",
              id: "1321812"
            },
            {
              alt: "https://movie.douban.com/celebrity/1320870/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg"
              },
              name: "乔·罗素",
              id: "1320870"
            }
          ],
          year: "2018",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg"
          },
          alt: "https://movie.douban.com/subject/24773958/",
          id: "24773958"
        },
        {
          rating: {
            max: 10,
            average: 0,
            stars: "00",
            min: 0
          },
          genres: [
            "动作",
            "科幻",
            "冒险"
          ],
          title: "游侠索罗：星球大战外传",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1040705/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.jpg"
              },
              name: "阿尔登·埃伦瑞奇",
              id: "1040705"
            },
            {
              alt: "https://movie.douban.com/celebrity/1314668/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.jpg"
              },
              name: "艾米莉亚·克拉克",
              id: "1314668"
            },
            {
              alt: "https://movie.douban.com/celebrity/1053560/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.jpg"
              },
              name: "伍迪·哈里森",
              id: "1053560"
            }
          ],
          collect_count: 279,
          original_title: "Solo: A Star Wars Story",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1031844/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.jpg"
              },
              name: "朗·霍华德",
              id: "1031844"
            }
          ],
          year: "2018",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.jpg"
          },
          alt: "https://movie.douban.com/subject/25900947/",
          id: "25900947"
        },
        {
          rating: {
            max: 10,
            average: 7.3,
            stars: "40",
            min: 0
          },
          genres: [
            "喜剧",
            "奇幻"
          ],
          title: "超时空同居",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1312940/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1503986232.61.jpg"
              },
              name: "雷佳音",
              id: "1312940"
            },
            {
              alt: "https://movie.douban.com/celebrity/1275756/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1367210981.95.jpg"
              },
              name: "佟丽娅",
              id: "1275756"
            },
            {
              alt: "https://movie.douban.com/celebrity/1325751/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499435823.67.jpg"
              },
              name: "张衣",
              id: "1325751"
            }
          ],
          collect_count: 48095,
          original_title: "超时空同居",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1331887/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520837465.56.jpg"
              },
              name: "苏伦",
              id: "1331887"
            }
          ],
          year: "2018",
          images: {
            small: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",
            large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",
            medium: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg"
          },
          alt: "https://movie.douban.com/subject/27133303/",
          id: "27133303"
        },
        {
          rating: {
            max: 10,
            average: 6.5,
            stars: "35",
            min: 0
          },
          genres: [
            "惊悚",
            "恐怖"
          ],
          title: "寂静之地",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1041022/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.jpg"
              },
              name: "艾米莉·布朗特",
              id: "1041022"
            },
            {
              alt: "https://movie.douban.com/celebrity/1027146/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg"
              },
              name: "约翰·卡拉辛斯基",
              id: "1027146"
            },
            {
              alt: "https://movie.douban.com/celebrity/1374192/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1_dN9m8yzVkcel_avatar_uploaded1495278218.5.jpg"
              },
              name: "米利森特·西蒙兹",
              id: "1374192"
            }
          ],
          collect_count: 77789,
          original_title: "A Quiet Place",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1027146/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452855116.89.jpg"
              },
              name: "约翰·卡拉辛斯基",
              id: "1027146"
            }
          ],
          year: "2018",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518852413.jpg"
          },
          alt: "https://movie.douban.com/subject/26997663/",
          id: "26997663"
        },
        {
          rating: {
            max: 10,
            average: 6.5,
            stars: "35",
            min: 0
          },
          genres: [
            "剧情",
            "传记",
            "历史"
          ],
          title: "青年马克思",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1014063/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22970.jpg"
              },
              name: "奥古斯特·迪尔",
              id: "1014063"
            },
            {
              alt: "https://movie.douban.com/celebrity/1387917/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517306102.13.jpg"
              },
              name: "史特凡·柯纳斯克",
              id: "1387917"
            },
            {
              alt: "https://movie.douban.com/celebrity/1341743/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1406537335.62.jpg"
              },
              name: "薇姬·克里普斯",
              id: "1341743"
            }
          ],
          collect_count: 3067,
          original_title: "Le jeune Karl Marx",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1294186/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1484919465.79.jpg"
              },
              name: "哈乌·佩克",
              id: "1294186"
            }
          ],
          year: "2017",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521271645.jpg"
          },
          alt: "https://movie.douban.com/subject/5330387/",
          id: "5330387"
        },
        {
          rating: {
            max: 10,
            average: 6.4,
            stars: "35",
            min: 0
          },
          genres: [
            "剧情",
            "爱情"
          ],
          title: "昼颜",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1050105/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372405365.09.jpg"
              },
              name: "上户彩",
              id: "1050105"
            },
            {
              alt: "https://movie.douban.com/celebrity/1025531/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40362.jpg"
              },
              name: "斋藤工",
              id: "1025531"
            },
            {
              alt: "https://movie.douban.com/celebrity/1000823/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48551.jpg"
              },
              name: "伊藤步",
              id: "1000823"
            }
          ],
          collect_count: 22737,
          original_title: "昼顔",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1316253/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p35685.jpg"
              },
              name: "西谷弘",
              id: "1316253"
            }
          ],
          year: "2017",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521625065.jpg"
          },
          alt: "https://movie.douban.com/subject/26877106/",
          id: "26877106"
        },
        {
          rating: {
            max: 10,
            average: 5.8,
            stars: "30",
            min: 0
          },
          genres: [
            "剧情",
            "爱情"
          ],
          title: "后来的我们",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1274628/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg"
              },
              name: "井柏然",
              id: "1274628"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274224/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg"
              },
              name: "周冬雨",
              id: "1274224"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274287/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2417.jpg"
              },
              name: "田壮壮",
              id: "1274287"
            }
          ],
          collect_count: 129778,
          original_title: "后来的我们",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1041007/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518407475.38.jpg"
              },
              name: "刘若英",
              id: "1041007"
            }
          ],
          year: "2018",
          images: {
            small: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg",
            large: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg",
            medium: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.jpg"
          },
          alt: "https://movie.douban.com/subject/26683723/",
          id: "26683723"
        },
        {
          rating: {
            max: 10,
            average: 6.7,
            stars: "35",
            min: 0
          },
          genres: [
            "剧情"
          ],
          title: "路过未来",
          casts: [
            {
              alt: "https://movie.douban.com/celebrity/1312862/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.jpg"
              },
              name: "杨子姗",
              id: "1312862"
            },
            {
              alt: "https://movie.douban.com/celebrity/1340310/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1410869351.19.jpg"
              },
              name: "尹昉",
              id: "1340310"
            },
            {
              alt: "https://movie.douban.com/celebrity/1274639/",
              avatars: {
                small: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg",
                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg",
                medium: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5984.jpg"
              },
              name: "李勤勤",
              id: "1274639"
            }
          ],
          collect_count: 3846,
          original_title: "路过未来",
          subtype: "movie",
          directors: [
            {
              alt: "https://movie.douban.com/celebrity/1275599/",
              avatars: {
                small: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg",
                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg",
                medium: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p59208.jpg"
              },
              name: "李睿珺",
              id: "1275599"
            }
          ],
          year: "2017",
          images: {
            small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg",
            large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg",
            medium: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519031460.jpg"
          },
          alt: "https://movie.douban.com/subject/26909423/",
          id: "26909423"
        }
        ]
    },
    mounted: function(){
      this.mui('.mui-scroll-wrapper').scroll({
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: true, //是否显示滚动条
        deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
      });
    }
  }
</script>

<style scoped>
  .mui-scroll-wrapper{
    top: 85px;
  }
</style>
