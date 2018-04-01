export class RaxxGoogleMaps {
    constructor() {
        this.markers = [];
    }
    // private mapsLoaded: boolean = false;
    // private networkHandler = null;
    render() {
        return h("div", { id: 'google-map-container' });
    }
    componentDidLoad() {
        this.init().then(() => {
            console.log("Google Maps ready.");
        }, (err) => {
            console.log(err);
        });
    }
    init() {
        return new Promise((resolve, reject) => {
            this.loadSDK().then(() => {
                this.initMap().then(() => {
                    resolve(true);
                }, (err) => {
                    reject(err);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    loadSDK() {
        return new Promise((resolve) => {
            this.injectSDK().then(() => resolve());
        });
    }
    injectSDK() {
        return new Promise((resolve, reject) => {
            window['mapInit'] = () => {
                // this.mapsLoaded = true;
                resolve(true);
            };
            let script = document.createElement('script');
            script.id = 'googleMaps';
            if (this.apikey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apikey + '&callback=mapInit';
                document.body.appendChild(script);
            }
            else {
                reject('API Key not supplied');
            }
        });
    }
    initMap() {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                let mapOptions = {
                    center: latLng,
                    zoom: 15
                };
                this.map = new google.maps.Map(document.getElementById('google-map-container'), mapOptions);
                resolve(true);
            });
        });
    }
    addMarker(lat, lng) {
        let latLng = new google.maps.LatLng(lat, lng);
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    }
    getCenter() {
        return this.map.getCenter();
    }
    static get is() { return "raxx-google-maps"; }
    static get properties() { return { "addMarker": { "method": true }, "apikey": { "type": String, "attr": "apikey" }, "getCenter": { "method": true } }; }
    static get style() { return "/**style-placeholder:raxx-google-maps:**/"; }
}
