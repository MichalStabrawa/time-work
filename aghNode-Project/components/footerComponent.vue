<template>
  <footer class="footer">
    <div class="container">
      <div class="wrapper-footer">
          <div>projekt i realizacja &copy Michał Stabrawa</div>
        <div>
          <a href="https://github.com/MichalStabrawa" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href>
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import fontawesome from "./../node_modules/@fortawesome/fontawesome/";
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 100px;
  background-image: linear-gradient(to right, #dad9d4, #e0ddd9, #e5e1de, #e9e5e4, #ede9e9, #ede3e5, #eadce3, #e5d7e4, #d7c6df, #c3b7dc, #a9aad9, #889ed7);
  color: grey;

  .container {
    padding-bottom: 0px;
    padding-top: 0px;
    height: 100%;

    a {
      margin: 10px;
    }
    .wrapper-footer {
      display: flex;
      justify-content: space-around;
      height: 100%;
      align-items: center;
    }
  }

  .fab {
    font-size: 30px;
    color: #3f5795;
  }
}
</style>


