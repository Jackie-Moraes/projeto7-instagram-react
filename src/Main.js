import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Main() {
    return (
        <main class="total">
            <Posts />
            <Sidebar />
        </main>
    );
}