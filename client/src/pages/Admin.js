import * as Api from "../api";
import {useState, useRef, useEffect} from "react";

function Admin() {
  const [datas, setDatas] = useState({
    name: "",
    description: "",
    address: "",
    category: "",
    imgURL: "",
  });
  const imgRef = useRef();

  const url = window.localStorage.getItem("imgURL");
  useEffect(() => {
    setDatas((cur) => {
      return {...cur, imgURL: url};
    });
  }, [url]);

  async function addImg() {
    const formData = new FormData();
    await formData.append("src", imgRef.current.files[0]);
    const res = await Api.post("/api/spot", formData);
    const imgURL = res.data.mainURL;
    window.localStorage.setItem("imgURL", imgURL);
  }

  async function create() {
    await Api.post("/api/spot/create", datas);
  }

  function changeHandler(e) {
    setDatas((cur) => {
      const newValue = {...cur};
      newValue[e.target.name] = e.target.value;
      return newValue;
    });
  }
  return (
    <>
      {" "}
      <div>
        <label>이름</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div>
        <label>설명</label>
        <input type="text" name="description" onChange={changeHandler} />
      </div>
      <div>
        <label>주소</label>
        <input type="text" name="address" onChange={changeHandler} />
      </div>
      <div>
        <label>이미지</label>
        <input type="file" name="img" onChange={addImg} ref={imgRef} />
      </div>
      <div>
        <label>카테고리</label>
        <select name="category" onChange={changeHandler}>
          <option>popular</option>
          <option>funny</option>
          <option>calm</option>
        </select>
      </div>
      <button onClick={create}>create</button>
    </>
  );
}

export default Admin;
