export default function Footer() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <div style={{ textAlign: 'center' }}>
            {/* Line above the text */}
            <hr />

            {/* Footer content */}
            <p> {currentYear} &copy; GFIS</p>
        </div>
    );
}