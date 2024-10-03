import { useState, useEffect } from 'react';

const words = ['Youtuber', 'Web Designer', 'Blogger', 'Content Creator', 'Influencer'];

export function useTextAnimation() {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return currentWord;
}
