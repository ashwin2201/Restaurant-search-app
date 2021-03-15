import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2SjECa2jqPjwE8HcOD8yLuC3NH_p5eckxkpMEvXV1yPZ9DOOGYRRWsC61fb3nkB7ylICHijS-61l_3PMAr41GLfdL5YvI6yE5_Ms8Gs071KouoeCzH0rHKqaHb3bXnYx'
  }
});
