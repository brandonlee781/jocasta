import { useState, useEffect } from 'react';

interface IOptions {
  successDuration?: number;
}

function copy(text: string): boolean {
  try {
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export default function useCopyClipboard(
  text: string,
  options?: IOptions
): [boolean, () => void] {
  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options?.successDuration;

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    }
  ]
}