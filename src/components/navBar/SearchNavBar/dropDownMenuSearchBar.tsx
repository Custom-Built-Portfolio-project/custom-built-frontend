import React from 'react';

interface SearchResultsDropdownProps {
    results: string[];
    isOpen: boolean;
    error: string | null;
}

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({ results, isOpen, error }) => {
    if (!isOpen) {
        return null;
    }
    console.log("isOpen:", isOpen);


    return (
        <div className="search-results">
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResultsDropdown;
