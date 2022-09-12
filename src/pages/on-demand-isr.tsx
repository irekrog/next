import { Container } from '../components/container';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { ssrExchange, dedupExchange, cacheExchange, fetchExchange, useQuery } from 'urql';

const BLOG_POST = `
    query GetBlogPost {
        demoModelsConnection {
            edges {
                node {
                    title
                    content {
                        html
                    }
                }
            }
        }
    }
`;

const SSGPage = () => {
    const [{ data, fetching, error }] = useQuery({
        query: BLOG_POST,
    });

    console.log(data);

    if (fetching) return <p>Loading...</p>;

    if (error) return <p>Oh no... {error.message}</p>;

    console.log('data', data);
    return (
        <Container>
            <h1>On-Demand Incremental Static Regeneration (On-Demand ISR)</h1>
            <h2>{data.demoModelsConnection.edges[0].node.title}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.demoModelsConnection.edges[0].node.content.html,
                }}
            />
        </Container>
    );
};

// export async const getServerSideProps = async () => {
//     // Fetch data from external API
//     const res = await axios(`https://.../data`)
//     const data = await res.data();
//
//     // Pass data to the page via props
//     return { props: { data } }
// }

export const getStaticProps = async () => {
    const ssrCache = ssrExchange({ isClient: false });
    const client = initUrqlClient(
        {
            url: 'https://api-eu-central-1.hygraph.com/v2/cl70vl27g1xfn01uo0ooug5c9/master',
            exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
            requestPolicy: "network-only"
        },
        false,
    );

    await client?.query(BLOG_POST, {}).toPromise();

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    };
};

export default withUrqlClient(() => ({
    url: 'https://api-eu-central-1.hygraph.com/v2/cl70vl27g1xfn01uo0ooug5c9/master',
}))(SSGPage);
