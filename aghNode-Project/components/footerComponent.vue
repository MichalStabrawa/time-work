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
  background: #f2f6f9;
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


