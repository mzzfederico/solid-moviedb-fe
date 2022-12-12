export default function CoverGrid({ children }) {
    return (
        <ul class="grid grid-flow-row grid-cols-6 gap-4 justify-start">
            {children}
        </ul>
    )
}