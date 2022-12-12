import { A } from "solid-start";

export default function Header() {
    return (
        <nav class="block container p-3 fixed top-0 background-fill z-10">
            <ul>
                <li>
                    <A href="/">Home</A>
                </li>
            </ul>
        </nav>
    )
}