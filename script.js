const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceButton = document.getElementById('advice-button');
const API_URL = 'https://api.adviceslip.com/advice';


async function getAdvice() {
  adviceButton.disabled = true;
  adviceText.textContent = 'Loading advice...';

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    const data = await response.json();

    adviceId.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = 'Unable to load advice. Please try again.';
    console.error('Error fetching advice:', error);
  } finally {
    adviceButton.disabled = false;
  }
}

getAdvice();
adviceButton.addEventListener('click', getAdvice);