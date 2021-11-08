<template>
  <nav>
    <nuxt-link to="/" class="logo">
      <span>Les lanternes</span>
      <img src="../assets/images/logo.png" alt="logo les lanternes" />
    </nuxt-link>
    <ul class="menu" v-if="navigation && navigation.menus">
      <li class="menuList" v-for="(menu, i) in navigation.menus" :key="i">
        <nuxt-link v-if="!menu['sous-menu']" :to="menu.url">
          {{ menu.titre }}
          <span class="bar" />
        </nuxt-link>
        <div v-else :to="menu.url">
          {{ menu.titre }}
          <ul class="subMenu">
            <li
              class="subMenuList"
              v-for="(subMenu, i) in menu['sous-menus']"
              :key="i"
            >
              <nuxt-link :to="subMenu.url">
                {{ subMenu.titre }}
                <span class="bar" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <label for="burger">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :d="burger[index].path1"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
        />
        <path
          :d="burger[index].path2"
          stroke="black"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
      <!-- <img src="../assets/images/burger.svg" alt="burger icon" /> -->
    </label>
    <input v-model="checked" type="checkbox" name="burger" id="burger" />
    <div class="burger-menu">
      <ul
        class="first"
        v-if="navigation && navigation.menus"
        @click="checked = false"
      >
        <li class="first" v-for="(menu, i) in navigation.menus" :key="i">
          <nuxt-link v-if="!menu['sous-menu']" :to="menu.url">
            {{ menu.titre }}
            <span class="bar" />
          </nuxt-link>
          <div v-else :to="menu.url">
            {{ menu.titre }}
            <ul class="second">
              <li
                class="second"
                v-for="(subMenu, i) in menu['sous-menus']"
                :key="i"
              >
                <nuxt-link :to="subMenu.url">
                  {{ subMenu.titre }}
                  <span class="bar" />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      burger: [
        { path1: 'M1.5 5.5L18.5 5.5', path2: 'M1.5 14.5L18.5 14.5' },
        { path1: 'M1.5 1.5L18.5 18.5', path2: 'M1.5 18.5L18.5 1.5' },
      ],
      checked: false,
    }
  },
  computed: {
    index() {
      return this.checked ? 1 : 0
    },
    navigation() {
      return this.$store.state.navigation
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  z-index: 10;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .logo {
    margin: 20px;
    display: flex;
    span {
      font-size: 36px;
    }
    img {
      max-height: 100px;
      transform: translate(-50%);
    }
  }
  .menu {
    padding: 10px;
    .menuList:not(:hover) .subMenu {
      display: none;
    }
    .menuList {
      padding: 10px;
      margin: 10px 20px;
    }
    .subMenu {
      z-index: 10;
      // Enlever la bande ici !!!
      // display: none;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      position: absolute;
      padding: 0 20px 20px 20px;
      margin-left: -20px;
      .subMenuList {
        display: flex;
        flex-direction: column;
        a {
          margin-top: 20px;
          margin-right: auto;
        }
      }
    }
    a {
      display: flex;
      flex-direction: column;
      margin-right: auto;
    }
  }
}
a:hover {
  .bar {
    width: calc(100% - 8px);
  }
}
.bar {
  background-color: #c47768;
  height: 2px;

  width: 0px;
  transition: width 500ms;
}
input[type='checkbox'] {
  opacity: 0;
  position: fixed;
  top: 0;
  z-index: -1;
}
ul.menu {
  display: none;
}
label {
  cursor: pointer;
  z-index: 100;
  margin: auto 40px;
  position: fixed;
  top: 30px;
  right: 0px;
}
.burger-menu {
  backdrop-filter: blur(3px);
  z-index: 20;
  height: 100vh;
  width: 100vw;
  background-color: rgba(232, 232, 232, 0.6);
  position: fixed;
  top: 0;
  right: 100vw;
  transition: right 500ms;

  display: flex;
  font-size: 16px;
  ul.first {
    margin: 100px auto;
    li.first {
      padding: 20px;
      margin: 20px 0;
      font-weight: bold;
    }
    li.second {
      padding: 20px auto;
      margin: 20px 0;
      font-weight: normal;
    }
  }
}
input[type='checkbox']:checked + .burger-menu {
  right: 0;
}
path {
  transition: d 500ms;
}
@media screen and (min-width: 1240px) {
  ul.menu {
    display: flex;
  }
  label {
    display: none;
  }
  .burger-menu {
    display: none;
  }
}
@media screen and (max-width: 1239px) {
  nav {
    .logo {
      position: relative;
      span {
        font-size: 20px;
      }
      img {
        position: absolute;
        left: 100%;

        max-height: 60px;
      }
    }
  }
}
</style>
