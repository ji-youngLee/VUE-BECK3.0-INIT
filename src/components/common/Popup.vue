<template>
    <transition name="Popup"> 
        <!-- //modal_fixed -->
        <div class="modal_fixed modal_lawsuit_create active">
        <!-- modal_section -->
        <section class="modal_section">
            <div class="modal_title bor_btm">
                <slot name="header"></slot>
            </div>
            <slot name="search_top"></slot>
            <slot name="modal_body"></slot>
            <div class="modal_btn_wrap bor_top tr">
                <slot name="footer_btn"></slot>
            </div>
        </section>
        <!-- //modal_section -->
        </div>
        <!-- //modal_fixed -->
    </transition>
</template>

<script>
export default {
    
}
</script>

<style>
.modal_fixed { 
    transition: opacity .3s ease;
}
.modal_section {
  transition: all .3s ease;  
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>