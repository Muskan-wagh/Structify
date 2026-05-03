const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || '';
const NEMOTRON_API_KEY = process.env.NEMOTRON_API_KEY || '';
const GEMMA_API_KEY = process.env.GAMMA_API_KEY || '';
const MINIMAX_BASE_URL = 'https://openrouter.ai/api/v1';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const AI_MODELS = [
  { id: 'nvidia/nemotron-3-nano-30b-a3b:free', name: 'Nemotron 3 Nano 30B (Free)', key: 'NEMOTRON' },
  { id: 'minimax/minimax-m2.5:free', name: 'MiniMax M2.5 (Free)', key: 'MINIMAX' },
  { id: 'google/gemma-4-26b-a4b-it:free', name: 'Google Gemma 4 26B A4B (Free)', key: 'GEMMA' },
];

function getApiKey(modelId: string): string {
  const model = AI_MODELS.find(m => m.id === modelId);
  switch (model?.key) {
    case 'NEMOTRON': return NEMOTRON_API_KEY;
    case 'GEMMA': return GEMMA_API_KEY;
    default: return MINIMAX_API_KEY;
  }
}

export async function callMinimax(
  messages: ChatMessage[],
  model: string = 'nvidia/nemotron-3-nano-30b-a3b:free'
): Promise<string> {
  const fallbackModel = 'nvidia/nemotron-3-nano-30b-a3b:free';
  const apiKey = getApiKey(model) || MINIMAX_API_KEY;
  
  try {
    const response = await fetch(`${MINIMAX_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      
      if (response.status === 429 && model !== fallbackModel) {
        console.warn('Rate limited, retrying with fallback model...');
        return callMinimax(messages, fallbackModel);
      }
      
      throw new Error(`API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || '';
  } catch (error: any) {
    if (error.message?.includes('429') && model !== fallbackModel) {
      console.warn('Rate limited, retrying with fallback model...');
      return callMinimax(messages, fallbackModel);
    }
    throw error;
  }
}