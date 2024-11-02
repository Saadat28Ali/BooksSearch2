function LoadingIndicator(
    {
        display
    }: {
        display: boolean
    }
) {
    return (
        <div
        className={
        (display) ? 
        `LoadingIndicator

        min-h-4
        min-w-4

        border-t-2
        border-white
        rounded-full

        animate-spin
        ` : 
        `LoadingIndicator

        min-h-4
        min-w-4

        border-t-2
        border-white
        rounded-full

        animate-spin

        invisible
        `}>
        </div>
    );
}

export default LoadingIndicator;