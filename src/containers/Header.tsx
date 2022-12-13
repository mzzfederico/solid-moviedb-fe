import { A } from "solid-start";

export default function Header() {
    return (
      <nav class="fixed top-0 left-0 w-full bg-white shadow-md rounded-b-md z-10">
        <ul class="container mx-auto flex items-center justify-start gap-5 p-4">
          <li><A class="text-xl font-bold text-gray-900 hover:text-gray-600" href="/">Home</A></li>
          <li><A class="text-xl font-bold text-gray-900 hover:text-gray-600" href="/favorites">Favorites</A></li>
        </ul>
      </nav>
    )
}
