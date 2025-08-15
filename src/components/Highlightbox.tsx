interface HighlightboxProps {
    title: string;
    content: string;
}

const Highlightbox: React.FC<HighlightboxProps> = ({ title, content }) => {
    return (
        <div className="border-2 py-15 px-3 lg:px-10 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-yellow-950">
            <h2 className="text-3xl mb-4">{title}</h2>
            <p className="text-gray-400">{content}</p>
        </div>
    );
};

export default Highlightbox;
