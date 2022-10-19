import Script from "next/script";

export default function StockSnippet({ Exchange, Ticker }) {
    const wrapperStyle = {
        width: "100%",
        height: "500px"
    }
    return <>
        <div id="tradingview-wrapper" style={wrapperStyle}>
            <Script
                id="tradingview-widget"
                src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
                onLoad={() => {
                    document.getElementById('tradingview-wrapper').appendChild(document.getElementById('tradingview-widget'));
                }}>
                {JSON.stringify({
                     "width": "100%",
                     "height": "100%",
                     "colorTheme": "light",
                     "isTransparent": false,
                     "symbol": "NASDAQ:AAPL",
                     "locale": "en"
                })}
            </Script>
        </div>
    </>
}