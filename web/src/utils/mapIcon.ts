import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [48, 60],
    iconAnchor: [24, 60],
    popupAnchor: [168, 10]
  })

  export default mapIcon;