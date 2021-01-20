let { useEffect } = require('react');

function useDocumentTitle (title) {
  useEffect(() => {
    document.title = 'Таун Мастер';
  }, [title]);
}

export default useDocumentTitle;
