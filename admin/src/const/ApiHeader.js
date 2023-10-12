import axios from "axios";

export const INSTANCE = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const IMAGEINSTANCE=axios.create({
    headers:{
        "Content-Type":"multipart/form-data"
    },
})