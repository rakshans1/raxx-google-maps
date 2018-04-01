import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'raxx-google-maps',
  styleUrl: 'raxx-google-maps.css',
  // shadow: truereject
})
export class RaxxGoogleMaps {

  @Prop() apikey: string;

  public map: any;
  public markers: any[] = [];
  // private mapsLoaded: boolean = false;
  // private networkHandler = null;

  render() {
    return <div id='google-map-container'></div>
  }

  componentDidLoad() {

    this.init().then(() => {
      console.log("Google Maps ready.")
    }, (err) => {
      console.log(err);
    });

  }

  init(): Promise<any> {

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

  loadSDK(): Promise<any> {
    return new Promise((resolve) => {
      this.injectSDK().then(() => resolve())
    })
  }

  injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

      window['mapInit'] = () => {
        // this.mapsLoaded = true;
        resolve(true);
      }

      let script = document.createElement('script');
      script.id = 'googleMaps';

      if(this.apikey){
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apikey + '&callback=mapInit';
        document.body.appendChild(script);
      } else {
        reject('API Key not supplied');
      }

    });

  }

  initMap(): Promise<any> {

    return new Promise((resolve) => {

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
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

  @Method()
  addMarker(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.markers.push(marker);

  }

  @Method()
  getCenter(){
    return this.map.getCenter();
  }
}
