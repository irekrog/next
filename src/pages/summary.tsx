import { Container } from '../components/container';

const SummaryPage = () => {
    return (
        <Container>
            <style jsx>{`
                table {
                    border-collapse: collapse;
                    border-spacing: 2px;
                    width: 100%;
                }
                td {
                    width: 25%;
                    padding: 16px;
                    vertical-align: top;
                }

                span {
                    display: block;
                    margin-bottom: 1rem;
                }
            `}</style>
            <h1>Podsumowanie</h1>
            <table>
                <thead>
                    <tr>
                        <th>CSR</th>
                        <th>SSR</th>
                        <th>SSG</th>
                        <th>ISR / On-Demand ISR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>
                                Client-Side Rendering pozwala na całkowite wyrenderowanie stron w
                                przeglądarce za pomocą JS.
                            </span>
                            <span>
                                Przy pierwszym załadowaniu strony, pojedynczy plik HTML jest
                                zazwyczaj serwowany z niewielką lub żadną zawartością, aż do momentu
                                pobrania JavaScript i skompilowania wszystkiego przez przeglądarkę.
                                CSR nie jest zalecany dla SEO.
                            </span>
                            <span>
                                CSR jest idealny dla stron dashboardów zawierających dużo danych,
                                stron po zalogowaniu i podobnych stron, które nie muszą znajdować
                                się w indeksie wyszukiwarki.
                            </span>
                        </td>
                        <td>
                            <span>
                                Server-Side Rendering generuje HTML w czasie żądania (request time)
                                zamiast generowania w czasie budowy (build time)
                            </span>
                            <span>SSR jest świetnym rozwiązaniem dla SEO.</span>
                        </td>
                        <td>
                            <span>
                                Static Site Generation polega na tym, że HTML jest generowany w
                                czasie budowy (build time). Ten wygenerowany HTML jest następnie
                                używany dla każdego żądania.
                            </span>
                            <span>
                                Generowanie stron statycznych jest prawdopodobnie najlepszym
                                rodzajem strategii renderowania dla SEO, ponieważ nie tylko mamy od
                                razu gotowy plik HTML, ale także performance strony jest wyższy, a
                                to jest też jeden z ważnych czynników SEO.
                            </span>
                        </td>
                        <td>
                            <span>
                                Incremental Static Regeneration pozwala na tworzenie lub
                                aktualizację stron statycznych po już ich zbudowaniu.
                            </span>
                            <span>
                                ISR umożliwia statyczne generowanie na podstawie poszczególnych
                                stron, bez konieczności przebudowy całej aplikacji.
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <figure>
                <img
                    src={'https://miro.medium.com/max/1400/0*jS47848aDEU1byaV'}
                    alt={''}
                    style={{ width: '1000px', margin: '0 auto' }}
                />
                <figcaption>
                    source:
                    https://medium.com/verclaire-nine/client-side-rendering-vs-server-side-rendering-vs-static-site-generation-835972fc469c
                </figcaption>
            </figure>
        </Container>
    );
};

export default SummaryPage;
