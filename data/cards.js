import axios from 'axios';
const API_KEY = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjEyZTg2NWViLTgwMmUtNDY3OS04OTUyLTg2OTMxZTZlZWZlNyIsImlhdCI6MTY5NzQ1OTc4NSwic3ViIjoiZGV2ZWxvcGVyLzM4NmU2MWY4LWYyMGMtNTViNS00ODc4LTBjNDlhZWI4ZmI1OCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC44Ni41MC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.4lBXlOAAYsogJnGNUgADQbWwN650ucMh9GmPjIxUO-IUOzslq6HrJsV5TsoeqY4kdidvGX6umiEiZUBD530EhQ';


export async function getCards() {
  try {
    const response = await axios.get('/api/cards')
    console.log(response.data.items);
    return response.data.items
  } catch (error) {
    return console.error('Error fetching cards:', error);
  }
}
