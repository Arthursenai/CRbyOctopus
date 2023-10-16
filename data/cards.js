import axios from 'axios';
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyZTg2NWViLTgwMmUtNDY3OS04OTUyLTg2OTMxZTZlZWZlNyIsImlhdCI6MTY5NzQ1OTc4NSwic3ViIjoiZGV2ZWxvcGVyLzM4NmU2MWY4LWYyMGMtNTViNS00ODc4LTBjNDlhZWI4ZmI1OCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.4lBXlOAAYsogJnGNUgADQbWwN650ucMh9GmPjIxUO-IUOzslq6HrJsV5TsoeqY4kdidvGX6umiEiZUBD530EhQ'; 

const headers = {
  'Content-Type': 'application/json',
  'Authorization': API_KEY,
};

export async function getCards() {
  const URL_CARDS = 'https://api.clashroyale.com/v1/cards';
  try {
    const response = await axios.get(URL_CARDS, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
}

export async function getLocations() {
  const URL_LOCATIONS = 'https://api.clashroyale.com/v1/locations';
  try {
    const response = await axios.get(URL_LOCATIONS, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}
