export const uploadToCloudnary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "starweet");
    data.append("cloud_name", "dmxnml9p1");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmxnml9p1/image/upload",
      {
        method: "post",
        body: data,
      }
    );

    const fileData = await res.json();
    return fileData.url.toString();
  } else console.log("error form upload function");
};
