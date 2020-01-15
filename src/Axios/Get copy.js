import axios from "axios";

const Get = url => {
  let results;

  axios.get(this.props.url).then(res => {
    console.log("this is the user response", res);
    results = res;
  });

  return results;
};

export default Get;
