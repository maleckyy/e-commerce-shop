<script>
export default {};
</script>
<template>
  <footer>
    <div class="content">
      <div class="panel">
        <div class="panel-title">E-SHOP</div>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="panel">
        <div class="panel-title">About Us</div>
        <ul>
          <li>About E-SHOP</li>
          <li>News & Blog</li>
          <li>Help</li>
        </ul>
      </div>
      <div class="panel">
        <div class="panel-title">Services</div>
        <ul>
          <li>Gift Card</li>
          <li>Mobile App</li>
          <li>Order Pickup</li>
          <li>Account Signup</li>
        </ul>
      </div>
      <div class="panel">
        <div class="panel-title">Help</div>
        <ul>
          <li>Returns</li>
          <li>Contact Us</li>
          <li>Feedback</li>
          <li>Security</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-blue);
  width: 100%;
  padding: 1.4rem 0 1rem;
  position: absolute;
  bottom: 0;
}
.content {
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
  gap: 3rem;
  justify-content: space-between;
  align-items: flex-start;
}
.panel {
  font-family: var(--font-mont);
  color: var(--color-white);
}
.panel-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: default;
}
ul {
  list-style: none;
}
li {
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s;
  margin-bottom: 3px;
}
li:hover {
  transform: translateX(5px);
}
@media only screen and (max-width: 1180px) {
  .content {
    padding: 0 2rem;
  }
}
@media only screen and (max-width: 560px) {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 330px) {
  .content {
    padding: 0 0.5rem;
  }
}
</style>
