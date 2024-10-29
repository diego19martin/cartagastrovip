
export async function logUsage(data) {
  try {
    console.log(data);
    
      const response = await fetch('https://vip-digital-server-c92ea591bdcb.herokuapp.com/api/log', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log("Data logged successfully:", result);
  } catch (error) {
      console.error("Error logging usage:", error);
  }
}