import { useState } from "react";

const initValue = {
  title: "",
  description: "",
  city: "",
  date: "",
  time: "",
  category: "BookMovieShow"
};

export const BookShow = () => {
  const [formData, setFormData] = useState(initValue);
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("#");
  }
};
