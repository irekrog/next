import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'https://api-eu-central-1.hygraph.com/v2/cl70vl27g1xfn01uo0ooug5c9/master',
    requestPolicy: 'network-only',
});

// export function reportWebVitals(metric: any) {
//     console.log('WEB VITALS METRIC', metric);
// }

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider value={client}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
