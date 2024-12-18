export const fetchQuestions = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/questions/randomten');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
};

export default fetchQuestions;