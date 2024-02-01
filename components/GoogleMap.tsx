interface ILatLng {
    lat: number,
    lng: number
}

interface IMapParams {
    zoom?: number,
    maptype?: "roadmap" | "satellite",
    language?: string,
    region?: string
}

interface IViewParams extends IMapParams {
    center: ILatLng,
}

interface IPlaceParams extends IMapParams {
    q: string,
    center?: ILatLng,
}

export default function GoogleMap({
    mapMode,
    params,
    width,
    height
}: {
    mapMode: "place" | "view", /* | "directions" | "streetview" | "search" */
    params: IViewParams | IPlaceParams
    width: string,
    height: string
}) {

    let mapsUrl = `https://www.google.com/maps/embed/v1/${mapMode}?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;

    for (const [param, value] of Object.entries(params)) {
        let paramStr = `&${param}=`;
        switch (param) {
            case "center":
                paramStr += `${value.lat},${value.lng}`;
                break;
            default:
                paramStr += `${value}`;
        }
        mapsUrl += paramStr;
    }
      
    return (
        <iframe width={width} height={height}
                src={mapsUrl}>
        </iframe>
    )
}