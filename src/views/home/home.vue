<template>
  <div class="home">
    <!--头部-->
    <div class="home_positioning">
      <!--背景图-->
      <div class="home_background">
        <img src="../../assets/img/bj.jpg"/>
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
          <div class="home_scan">123</div>
          <span></span>
          <div class="home_scan">456</div>
        </div>
        <!--余额-->
        <flexbox :gutter="0" class="home_background_color">
          <flexbox-item class="pd_15">
            <div>
              <p>余额</p>
              <p>361</p>
            </div>
          </flexbox-item>
          <flexbox-item class="pd_15">
            <div>
              <p>资产中心</p>
              <p>361</p>
            </div>
          </flexbox-item>
        </flexbox>
        <!--积分、币额-->
        <grid :cols="2" :show-lr-borders="false" class="home_grid">
          <grid-item class="home_space_between">
            <span>幸运积分</span>
            <span>600</span>
          </grid-item>
          <grid-item class="home_space_between">
            <span>销售佣金</span>
            <span>123</span>
          </grid-item>
          <grid-item class="home_space_between">
            <span>现金币</span>
            <span>123</span>
          </grid-item>
          <grid-item class="home_space_between">
            <span>报单币</span>
            <span>123</span>
          </grid-item>
        </grid>
        <!--公告-->
        <div class="home_announcement">
          <div class="home_border">
            <i class="icon icon-jinrongtongxun"></i>
            <marquee>
              <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">内容{{i}}</marquee-item>
            </marquee>
            <div style="width: 40px;">更多</div>
          </div>
        </div>
        <!--菜单-->
        <grid :cols="3" :show-lr-borders="false" class="home_grid">
          <grid-item v-for="i in 6" :key="i">
            <span class="grid-center">{{i}}</span>
          </grid-item>
        </grid>
      </flexbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      asyncCount: 0
    }
  },
  methods: {
    onClick (i) {
      console.log(i)
      this.$http.post('/api').then(({data}) => {
        console.log(data)
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  }
}
</script>

<style scoped lang="less">
  @white_color: #fff;
  .home_positioning {
    position: relative;
    top: 0;
    left: 0;
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
    .home_personal {
      position: absolute;
      top: 0;
      left: 0;
      img {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 20px;
      }
      .home_name {
        text-align: center;
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
        }
        span {
          display: block;
          width: 2px;
          height: 20px;
          background-color: #f00;
        }
      }
      .home_background_color {
        background-color: @white_color;
        .pd_15 {
          padding: 0 15px;
        }
      }
      .home_grid {
        width: 100%;
        background-color: @white_color;
        .weui-grid {
          padding: 0 15px;
        }
        .home_space_between {
          display: flex;
          justify-content: space-between;
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
          i {
            margin-right: 10px;
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
