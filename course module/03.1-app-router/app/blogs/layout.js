export default function BlogLayout({ children }) {
    return (
        <div className="container">
            {children} {/* This renders about/page.js content */}
        </div>
    );
}
