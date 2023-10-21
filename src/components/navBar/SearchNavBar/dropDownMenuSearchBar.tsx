import React from 'react';

interface SearchResultsDropdownProps {
    results: string[];
    error: string | null;
}

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({ results, error }) => {
   

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
