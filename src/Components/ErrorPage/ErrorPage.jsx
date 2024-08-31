import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <Header />
            <main>
                <article>
                    <div className="container" id="error-page">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81t4QEiB%2BrL._UL1500_.jpg?fifu" alt="" style={{ height: '50vh' }} />
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}