import { useQuery } from 'urql';
import { Container } from '../components/container';

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

const CSRPage = () => {
    const [{ data, fetching, error }] = useQuery({
        query: BLOG_POST,
    });

    console.log('data', data);

    if (fetching) return <p>Loading...</p>;

    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <Container>
            <h1>Client Side Rendering (CSR)</h1>
            <h2>{data.demoModelsConnection.edges[0].node.title}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.demoModelsConnection.edges[0].node.content.html,
                }}
            />
        </Container>
    );
};

export default CSRPage;
