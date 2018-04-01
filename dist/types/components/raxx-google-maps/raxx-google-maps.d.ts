import '../../stencil.core';
export declare class RaxxGoogleMaps {
    apikey: string;
    map: any;
    markers: any[];
    render(): JSX.Element;
    componentDidLoad(): void;
    init(): Promise<any>;
    loadSDK(): Promise<any>;
    injectSDK(): Promise<any>;
    initMap(): Promise<any>;
    addMarker(lat: number, lng: number): void;
    getCenter(): any;
}
