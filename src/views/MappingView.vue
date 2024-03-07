<template>
    <div class="section pb-0">
        <div class="container">
            <div class="text">
                <h2 class="section-title mt-4">Découvrez le monde à portée de clic avec Google Maps !</h2>
            </div>
            <div class="image d-flex col-md-12 col-xs-12 col-sm-12 col-xl-12">
                <div id="map"></div>
            </div>
        </div>
        <!-- <h1>Position Géographique Actuelle</h1>
        <p v-if="loading">Récupération de la position en cours...</p>
        <p v-if="error">{{ error }}</p>
        <p v-if="position">
            Latitude: {{ position.latitude }}<br>
            Longitude: {{ position.longitude }}
        </p> -->
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script src="../assets/resources/ol/ol.js"></script>
<script src="../assets/resources/ol-layerswitcher.js"></script>

<script>
import ol from '../assets/resources/ol/ol.js';
export default{
    data(){
        return {
            loading: true,
            error: null,
            position: null
        }
    },
    mounted(){
        this.show()
    },
    methods : {
        getPosition(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.position = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        };
                        this.loading = false;
                    },
                    (error) => {
                        this.error = "Erreur de géolocalisation : " + error.message;
                        this.loading = false;
                    }
                );
            } else {
                this.error = "La géolocalisation n'est pas prise en charge par ce navigateur.";
                this.loading = false;
            }
        },
        show(){
            var mapView = new ol.View({
                center: ol.proj.fromLonLat([ 47.09338,  -21.45517]),
                zoom: 18
            });
            var map = new ol.Map({
                target: 'map',
                view: mapView
            });
            var osmTile = new ol.layer.Tile({
                title: 'OpenStreetMap',
                visible: true,
                source: new ol.source.OSM()
            });
            map.addLayer(osmTile);
        }
    }
}
</script>

<style src="../assets/resources/ol/ol.css"> </style>
<style src="../assets/resources/ol-layerswitcher.css"> </style>
<style scoped>
    #map {
        width: 100vw;
        height: 100vh;
    }
</style>