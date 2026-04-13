import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

async function retryWithRandomDelay(fn, maxRetries = 5) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            
            const isServiceUnavailable = 
                error.status === 503 || 
                error.message?.includes('503') || 
                error.message?.includes('Service Unavailable') ||
                error.message?.includes('temporarily unavailable');
            
            if (isServiceUnavailable && attempt < maxRetries) {
                const delay = Math.floor(Math.random() * 4000) + 1000; // 1-5 seconds
                console.log(`Service unavailable (503). Retrying in ${delay}ms... (Attempt ${attempt}/${maxRetries})`);
                await new Promise(resolve => setTimeout(resolve, delay));
            } else if (isServiceUnavailable) {
                
                console.error(`Service unavailable after ${maxRetries} retries`);
                throw error;
            } else {
                throw error;
            }
        }
    }
    
    throw lastError;
}

export async function generateWithGemini(prompt, model = 'gemini-2.5-flash') {
    try {
        
        if (!process.env.GOOGLE_GENAI_API_KEY) {
            throw new Error('GOOGLE_GENAI_API_KEY is not set in environment variables');
        }

        console.log(`Using model: ${model}`);

        // Use retry logic for API call
        const text = await retryWithRandomDelay(async () => {
            
            const geminiModel = genAI.getGenerativeModel({ model });

            
            const response = await geminiModel.generateContent({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            });

            if (!response || !response.response) {
                throw new Error('Empty response from Gemini API');
            }

            const text = response.response.text();

            if (!text) {
                throw new Error('No content generated from Gemini API');
            }

            return text;
        });

        return text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        throw new Error(`Failed to generate content with Gemini: ${error.message}`);
    }
}