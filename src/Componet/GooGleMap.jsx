import { APIProvider,Map } from "@vis.gl/react-google-maps"
// import { APIProvider,Map } from "@vis"
export default function GooGleMap(){
    console.log(Map)
    return(
                <APIProvider  apiKey="AIzaSyBFgvGFE71JaHVGdskuSFc0HcfCEkTXCW0">
                    <Map defaultCenter={{ lat: -27.61641 , lng: 32.03861 }} defaultZoom={15} style={{width:'100%',height:'100%'}} />
              </APIProvider>
    )
}