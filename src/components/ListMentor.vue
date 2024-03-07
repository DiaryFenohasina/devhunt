<template>
    <div class="row">
        <div class="">
            <p class="card-text">{{ Mentorat.intro }}</p>
            <p class="card-text mt-3">{{ Mentorat.p1 }}</p>
            <p class="card-text mt-3">{{ Mentorat.p2 }}</p>
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran1.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran1.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran1.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
            <!-- card 2 -->
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran2.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran2.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran2.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
            <!-- card 3 -->
            <div class="cadran mt-5">
                <div class="title">
                    <h3 class="card-title h3 ">{{Mentorat.cadran3.title}}</h3>
                </div>
                <div class="texte mt-4">
                    <p class="card-text mt-2">{{ Mentorat.cadran3.texte1 }}</p>
                    <p class="card-text mt-2">{{ Mentorat.cadran3.texte2 }}</p>
                </div>
                <div class="boutton mt-4">
                    <button type="button" class="contact btn btn-primary  m-auto">Trouver un mentor</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Mentorat} from '@/data'
 export default {
    data(){
        return {
            Mentorat
        }
    }
 }
</script>

<style scoped>

</style>