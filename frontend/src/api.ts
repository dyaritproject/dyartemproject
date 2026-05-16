const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : '/api';

export const fetchArticles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/articles/`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
};

export const submitReferral = async (data: any) => {
    try {
        const response = await fetch(`${API_BASE_URL}/referrals/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error submitting referral:', error);
        throw error;
    }
};
