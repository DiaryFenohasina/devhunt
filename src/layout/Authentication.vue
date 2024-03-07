<template>
  <section class="pt-5">
    <div class="container shadow section-sm rounded">
        <router-view/>
    </div>
  </section>
</template>

<style>
span {
  padding: 20px 0;
  color: #222;
  display: block;
  font-size: 18px;
  font-weight: 500;
}
span:hover {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive {
  color: var(--baseColor) !important;
  position: relative;
  margin-left: 10px;
}
.isActive::before {
  position: absolute;
  content: "";
  left: -10px;
  top: 25%;
  height: 50%;
  width: 1px;
  background: var(--baseColor);
}
.sign-up .form-floating .form-control {
  font-size: 16px;
  border: 0;
  outline: 0;
}
.sign-up .form-control.active.focus-visible {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.sign-up button i {
  color: var(--baseColor);
}
.sign-up .form-control{
  /* box-shadow: 0 4px 6px 0 rgba(62, 62, 62, 0.102), 0 6px 60px 0 rgba(62, 62, 62, 0.102) !important; */
  box-shadow: 0px 15px 60px rgba(62, 62, 62, 0.102) !important;
}
.not-valid{
  /* border-color: var(--bs-form-invalid-border-color); */
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.8em + 0.375rem) calc(0.8em + 0.375rem);
}
.is-valid{
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(.375em + .1875rem) center;
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}
.avatar-container {
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 60%;
  width: 250px;
  height:250px;
  transform: translate(-50%, -50%);

}
.avatar-image {
  opacity: 1;
  display: block;
  width: 500px;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar-middle {
  
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)

}
.avatar-container:hover .avatar-image {
  opacity: 0.3;
}
.avatar-container:hover .avatar-middle {
  opacity: 1;
}
.avatar-text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
@media screen and (max-width:991px){
  .d-smart-none{
    display: none;
  }
}
@media screen and (min-width:991px){
  .d-screen-none{
    display: none;
  }
}
.has-acc{
  font-size: 14px;
}

</style>
