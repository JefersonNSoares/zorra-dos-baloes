import {
    AdMobBanner
  } from 'expo-ads-admob';


export function BannerAd () {
        return(
            <>
                <AdMobBanner
                    bannerSize="smartBannerLandscape"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" 
                    setTestDeviceIDAsync
                    servePersonalizedAds 
                    onDidFailToReceiveAdWithError={(err) => console.log(err)} />
            </>
        );
      
  };