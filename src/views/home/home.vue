<template>
  <div class="home" style="height: 100%;">
    <!--头部-->
    <view-box ref="viewBox" body-padding-bottom="54px">
      <div class="home_positioning">
        <!--背景图-->
        <div class="home_background">
          <img src="../../assets/img/bj.jpg"/>
        </div>
        <!--信息-->
        <div class="home_information">
          <span>人数：123456</span>
        </div>
        <!--内容-->
        <flexbox orient="vertical" :gutter="0" class="home_personal">
          <!--头像-->
          <flexbox-item>
            <img src="../../../build/logo.png" />
          </flexbox-item>
          <!--名字-->
          <flexbox-item class="home_name">
            <span>name</span>
          </flexbox-item>
          <!--功能-->
          <div class="home_flex">
            <div class="home_scan">
              <i class="icon icon-saoyisao"></i>
              <p>扫一扫</p>
            </div>
            <span></span>
            <div class="home_scan">
              <i class="icon icon-shoukuanma"></i>
              <p>收款码</p>
            </div>
          </div>
          <!--余额-->
          <flexbox :gutter="0" class="home_background_color">
            <flexbox-item class="pd_15">
              <div class="home_assets">
                <p><i class="icon icon-qianbao"></i>余额</p>
                <span>361</span>
              </div>
            </flexbox-item>
            <flexbox-item class="pd_15">
              <div class="home_assets">
                <p><i class="icon icon-weibiaoti-"></i>资产中心</p>
                <span>361</span>
              </div>
            </flexbox-item>
          </flexbox>
          <!--积分、币额-->
          <grid :cols="2" :show-lr-borders="false" class="home_grid">
            <grid-item class="home_space_between">
              <span><i class="icon icon-jifen"></i>幸运积分</span>
              <strong>{{num}}</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="icon icon-qiandai_"></i>销售佣金</span>
              <strong>123</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="icon icon-kuangji"></i>现金币</span>
              <strong>123</strong>
            </grid-item>
            <grid-item class="home_space_between">
              <span><i class="icon icon-qian"></i>报单币</span>
              <strong>123</strong>
            </grid-item>
          </grid>
          <!--公告-->
          <div class="home_announcement">
            <div class="home_border">
              <i class="icon icon-gonggao1"></i>
              <marquee>
                <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">内容{{i}}</marquee-item>
              </marquee>
              <div class="home_announcement" @click="csInput">
                <!--<router-link to="/announcement">更多</router-link>-->
                <span>123456</span>
              </div>
            </div>
          </div>
          <!--菜单-->
          <grid :cols="3" :show-lr-borders="false" class="home_grid">
            <grid-item v-for="(item, index) in icon" :key="index" class="home_menu">
              <i :class="item.menuIcon"></i>
              <p class="grid-center">{{item.menuName}}</p>
            </grid-item>
          </grid>
          <x-input placeholder="I'm placeholder" :value="value"></x-input>
        </flexbox>
      </div>
      <tabbar slot="bottom">
        <tabbar-item selected>
          <i slot="icon" class="icon icon-home"></i>
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="icon icon-dianpu1"></i>
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item link="/component/demo">
          <i slot="icon" class="icon icon-jifen"></i>
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item>
          <i slot="icon" class="icon icon-wode"></i>
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { login } from '../../api/api'
export default {
  name: 'home',
  data () {
    return {
      asyncCount: 0,
      num: '',
      value: '',
      icon: [
        {
          menuIcon: 'icon icon-yinhangqia1',
          menuName: '转出'
        },
        {
          menuIcon: 'icon icon-jifen1',
          menuName: '转入'
        },
        {
          menuIcon: 'icon icon-licai',
          menuName: '理财'
        },
        {
          menuIcon: 'icon icon-huiyuan',
          menuName: '会员礼包'
        },
        {
          menuIcon: 'icon icon-dianpu1',
          menuName: '商城'
        },
        {
          menuIcon: 'icon icon-qian',
          menuName: '交易市场'
        },
        {
          menuIcon: 'icon icon-zhanghuzhongxin',
          menuName: '团队'
        },
        {
          menuIcon: 'icon icon-mima1',
          menuName: '分享'
        },
        {
          menuIcon: 'icon icon-wenti',
          menuName: '投资建议'
        }
      ]
    }
  },
  methods: {
    onClick (i) {
      console.log(i)
      this.getRequest(reg).then(({data}) => {
        console.log(data)
      })
    },
    csInput () {
      this.value = '123'
    }
  },
  mounted () {
    this.num = '8'
    console.log(this.num)
    const pamet = {key: '00d91e8e0cca2b76f515926a36db68f5', account: '13594347817', password: '123456'}
    this.postRequest(login, pamet).then(({data}) => {
      console.log('data-----', data)
    })
    console.log(this.icon)
    this.$vux.loading.show({
      text: 'Loading'
    })
    setTimeout(() => {
      this.asyncCount = 5
      this.$vux.loading.hide()
    }, 2000)
  }
}
</script>

<style scoped lang="less">
  @white_color: #fff;
  .home_positioning {
    position: relative;
    width: 100%;
    .home_background {
      position: absolute;
      top: 0;
      left: 0;
      img {
        display: block;
        width: 100%;
      }
    }
    .home_information {
      position: absolute;
      top: 0;
      left: 0;
      span{
        color: #fff;
      }
    }
    .home_personal {
      position: absolute;
      top: 0;
      left: 0;
      margin-bottom: 54px;
      img {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 20px;
      }
      .home_name {
        text-align: center;
        span {
          color: #fff;
        }
      }
      .home_flex {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        .home_scan {
          flex: 1;
          margin: 0 auto;
          text-align: center;
          color: #fff;
          i {
            font-size: 28px;
          }
          p {
            font-size: 12px;
          }
        }
        span {
          display: block;
          width: 2px;
          height: 26px;
          background-color: #56a7f2;
        }
      }
      .home_background_color {
        background-color: @white_color;
        .pd_15 {
          padding: 0 15px;
        }
        .home_assets {
          p {
            i {
              margin-right: 5px;
            }
          }
          span {
            color: @tabbar-text-active-color;
          }
        }
      }
      .home_grid {
        width: 100%;
        background-color: @white_color;
        .weui-grid {
          padding: 5px 15px;
        }
        .home_space_between {
          display: flex;
          justify-content: space-between;
          span {
            color: #000;
            i {
              margin-right: 5px;
            }
          }
          strong {
            font-weight: normal;
            color: @tabbar-text-active-color;
          }
        }
      }
      .home_announcement {
        width: 100%;
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: @box_background;
        .home_border {
          flex-direction: row;
          background-color: @white_color;
          display: flex;
          color: #4084f3;
          i {
            margin-right: 10px;
          }
          .home_announcement {
            width: 40px;
            color: @tabbar-text-active-color;
          }
        }
      }
      .home_grid {
        .home_menu {
          text-align: center;
          i {
            font-size: 40px;
          }
        }
      }
    }
  }




  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
