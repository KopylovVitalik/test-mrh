import axios from 'axios';

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/http://77.120.241.80:8811/api/`
});
