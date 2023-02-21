export const readFileAsArray = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const lines = reader.result.split('\n').map((line) => line.trim());
        resolve(lines);
      };
  
      reader.onerror = () => {
        reject(reader.error);
      };
  
      reader.readAsText(file);
    });
  };