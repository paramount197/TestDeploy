import axios from "axios";

export const Get = url => {
  axios.get(url).then(result => {
    return result.data;
  });
};

export const Post = (url, data) => {
  console.log(data);
  axios
    .post(url, {
      id: data.id,
      name: data.name,
      date: data.date,
      location: data.location,
      intake: data.intake,
      programme: data.programme
    })
    .then(result => {
      console.log("this is the post data", result.data);
    });
};
